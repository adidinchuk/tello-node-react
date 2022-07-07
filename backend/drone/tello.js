const dgram = require('dgram');
const throttle = require('lodash.throttle');
const wait = require('waait');
const NodeCache = require('node-cache');
const cv2 = require('opencv4nodejs');
const delays = require('../metadata/delays');
const commandSchema = require('../metadata/commands');
const util = require('./util');
const automation = require('./automation')
const PIDController = require('./PIDController');
const queue = require('queue');
const config = require('../../config');

const HANDSHAKE_COMMAND = 'command';
const WIFI_GET_COMMAND = 'wifi?';
const SPEED_GET_COMMAND = 'speed?';


const GET_COMMAND_TIMEOUT_THRESHOLD = 2000; // maximum time the server will wait for a read response from the drone (ms)
const RECONNECTION_ATTEMPT_PERIOD = 10000; // reconnection attempt frequency (ms)
const COMMAND_RESET_PERIOD = 2000; // permitted drone silence preiod before the connection is considered lost (ms)
const AUTOMATION_CYCLE = 30; // frequency of the cycle that sends movement commands to the drone when in automation mode (ms)
const DRONE_STATE_THROTTLE = 1000; // dictates how often drone state data should be sent downstream to consuming systems (ms)
const FRAME_SIZE = [960, 720]; // drone camera frame size in pixles 

class Tello {

    droneIO = dgram.createSocket('udp4');
    droneState = dgram.createSocket('udp4');
    droneCache = new NodeCache();
    /* A queue is used to manage and execute instructions as they are recieved by the server. 
     * Most commands will have a mimum delay and will be dropped by the drone if recieved inside the delay window
     * The queue is used to manage requests, maintain their order and ensure they make their way through to the drone
     * */
    instructionQueue = queue({ results: [] });

    // default settings //
    commandPort = config.backend.drone.COMMAND_PORT;
    statusPort = config.backend.drone.STATUS_PORT;
    videoEndpoint = config.backend.drone.VIDEO_ENDPOINT;
    videoServerEndpoint = null;
    host = config.backend.drone.HOST;
    downStreamVideoStreamServer = null;

    automationOptions = ['followPerson', 'followPersons'];
    statusSocketKey = 'dronestate';
    /* As the automation loop converges on the designated target, the observeWindow value will be used as the acceptable 
     * deviation area from the frame's center :
     * i.e. a value of [75,*] will continusouly update the drone's x position until it is within 75 pixles of the x target
     * i.e. a value of [*,75] will continusouly update the drone's z position until it is within 75 pixles of the z target
     */
    observeWindow = [75, 75];
    /* As the automation loop converges on the designated target, the observeRange value will be used as the 
     * acceptable deviation in the target's overall size as a % of the total frame. The largest error value (x vs z) 
     * will be used as the PID driver.
     * i.e. If the observeRange value is [0.2, 0.3] the drone will move forward if the target takes up less than 20% of the 
     * total width or height. It will move backwards if the target takes up more than 30% of the total width or height. 
     */
    observeRange = [.2, .3];

    status = {
        lastResponseTimestamp: -1,
        connected: false,
        captureOpen: false,
        automated: false,
        destinationTarget: { a: 0, b: 0, c: 0, d: 0 },
        automationInstruction: null,
        targetLock: true,
        trackTargetMoveInterval: null,
        rc: { a: 0, b: 0, c: 0, d: 0 }
    }

    videoCapture = null;

    // PID controller definitions
    // values have been tweeked for the Tello drone 
    PIDX = new PIDController(0.1, 0, 0.2, 20, -20);
    PIDY = new PIDController(8, 0, 15, 40, -40);
    PIDZ = new PIDController(0.1, 0, 0.1, 100, -100);

    /*
    * constructor description
    * @param  {[int]} commandPort [Tello drone command port - typically 8889]
    * @param  {[int]} statusPort [Tello drone status port - typically 8890]
    * @param  {[string]} host [Tello drone ip address - typically 192.168.10.1]
    */
    constructor(commandPort, statusPort, host, videoEndpoint, videoServerEndpoint) {
        this.commandPort = commandPort !== undefined ? commandPort : this.commandPort;
        this.statusPort = statusPort !== undefined ? statusPort : this.statusPort;
        this.host = host !== undefined ? host : this.host;
        this.videoEndpoint = videoEndpoint !== undefined ? videoEndpoint : this.videoEndpoint;
        this.videoServerEndpoint = videoServerEndpoint !== undefined ? videoServerEndpoint : this.videoServerEndpoint;
        this.initialize();
    }

    initialize() {
        this.initCommandQueue();
        this.initCache();

        //bind IO and drone state sockets 
        this.droneIO.bind(this.commandPort);
        this.droneState.bind(this.statusPort);
        this.initOutputSockets();
        this.send(HANDSHAKE_COMMAND);
        this.initConnectionManager();
        this.initVideoProcessor();
    }

    initCache() {
        //The WIFI_GET_COMMAND & SPEED_GET_COMMAND cache objects are used to track the drones state for these parameters
        //The communication with the drone is async and requires for the server to remember the query state
        this.droneCache.set(WIFI_GET_COMMAND, { last: { value: null, timestamp: -1 }, current: { value: null, timestamp: -1 } });
        this.droneCache.set(SPEED_GET_COMMAND, { last: { value: null, timestamp: -1 }, current: { value: null, timestamp: -1 } });
    }

    initCommandQueue() {
        //See comments above the instructionQueue definition
        this.instructionQueue.concurrency = 1;
        this.instructionQueue.autostart = true;
    }

    /* The connection manager:
     * 1. monitors the connection status with the drone
     * 2. re-establishes the connection with the drone if an issue is detected 
     * 3. clear any rc move command 
     * 4. kick off intervals to poll speed and wifi data from the drone
     */
    initConnectionManager() {
        //continously check for a stale status timestamp
        setInterval(() => {
            if (Date.now() - this.status.lastResponseTimestamp > COMMAND_RESET_PERIOD) {
                //set the disconnected flag
                if (this.status.connected) {
                    this.status.connected = false;
                    process.stdout.write('Failed to establish communication with the drone, attempting to reconnect...')
                }
                //attempt to reconnect with a handshake
                this.send(HANDSHAKE_COMMAND);

                //release the videoCapture so it can be re-establsihed on the next frame
                if (this.videoCapture != null)
                    this.videoCapture.release();

                //nutralize the drone's current rc memory and clear the trackTargetMoveInterval to ensure safe connection recovery
                setTimeout(() => {
                    this.send('rc', { a: 0, b: 0, c: 0, d: 0 });
                    clearInterval(this.status.trackTargetMoveInterval);
                }, delays.command);
            }
        }, RECONNECTION_ATTEMPT_PERIOD);

        //kick off the get wifi request cycle
        setInterval(() => {
            if (this.status.connected)
                this.requestDataState(WIFI_GET_COMMAND);
        }, 3000);
        //kick off the get speed request cycle
        setInterval(() => {
            if (this.status.connected)
                this.requestDataState(SPEED_GET_COMMAND);
        }, 1000);
    }

    initVideoProcessor() {
        //kick off the video data processing process
        setInterval(() => {
            if (this.videoCapture != null) {
                //pull the next available frame in the videoCapture queue
                const frame = this.videoCapture.read();
                //clear the video capture and clear the captureOpen flag if the frame is empty
                if (frame.sizes.length == 0) {
                    this.status.captureOpen = false;
                    this.videoCapture = null;
                } else {
                    //process the frame and push the processed video stream data downstream to consuming user interfaces
                    this.status.captureOpen = true;
                    this.processFrame(frame);
                    if (this.videoServerEndpoint != null)
                        this.videoServerEndpoint.emit('image', cv2.imencode('.jpg', frame).toString('base64'));
                }
            }
        }, 1000 / util.VIDEO_STREAM_FPS);
    }
    /* function used to initialize a video capture
     * @param  {[int]} delay [timed delay in ms after the function is called and before the capture is created]
    */
    async initVideoStream(delay) {
        // run if the drone is connected but no video data is available 
        // a delay is used to allow for an optional delay between the initialization and the openining of the capture and add resilience
        if (!this.status.captureOpen && this.status.connected) {
            setTimeout(() => {
                try {
                    this.videoCapture = new cv2.VideoCapture(this.videoEndpoint, cv2.CAP_FFMPEG);
                    this.videoCapture.set(cv2.CAP_PROP_BUFFERSIZE, 1); //not sure if this flag currently works
                    this.videoCapture.set(cv2.CAP_PROP_FPS, 30);
                } catch (error) {
                    //retry the operation if an error is encountered 
                    console.log(error);
                    this.initVideoStream(2000)
                }
            }, delay)
        }
    }

    /* connect to the drone's state data feed and forward data downstream to the provided web socket
     *
     */
    initOutputSockets() {
        //set the droneState socket to read any data flowing from the drone
        this.droneState.on('message',
            //throttle data to 100ms updates
            throttle(rawMessage => {
                if (this.statusSocket != null) {
                    const state = util.parseStateData(rawMessage.toString()); //parse raw data
                    this.status.lastResponseTimestamp = Date.now();
                    //forward data downstream
                    if (this.statusSocket != null) {
                        // append any other required additional data available server side that might be needed downstream
                        let data = state;
                        data.other = this.getInfo();
                        data.rc = this.status.rc;
                        data.targetLocked = this.status.targetLock;
                        data.automated = this.status.automated;
                        data.automationInstruction = this.status.automationInstruction;
                        this.statusSocket.emit(this.statusSocketKey, data);
                    }
                }
            }, DRONE_STATE_THROTTLE)
        );

        //set up the IO socket to read any feedback originating from the drone.
        this.droneIO.on('message', rawMessage => {
            let message = rawMessage.toString();
            this.status.lastResponseTimestamp = Date.now(); //update the connection status timestamp
            if (message == 'ok') {
                //if the drone was previously disconnected upgdate the state and open the video stream
                if (!this.status.connected) {
                    console.log('\nConnection with the Tello drone has been established..')
                    this.status.connected = true;
                    this.send('streamon');
                    this.initVideoStream(1000);
                }
            } else {
                /*
                 * if the response is not 'ok' and is instead an integer, it is likely a response 
                 * from the drone following a get command 
                */
                let droneData = parseFloat(message);
                if (droneData != NaN)
                    this.processGetResponse(droneData);
                else
                    console.log('Error encounterd in drone IO response');
                return;
            }
        });
    }

    /*
     * wrapper for the send method to include reply message processing
     * this should be used for read commands that are accompanied by a response
     *  @param  {[string]} key [the read command string key]
     */
    requestDataState(key) {
        //check if the buffer currently reflects a read request hold
        if (!this.getInfoReadHold()) {
            // if there is no read hold, set a hold for the current read request
            this.droneCache.set('COMMAND_HOLD_KEY', key);
            //clear the cache of the value currently being read
            this.droneCache.set(key, { last: this.droneCache.get(key).current, current: { value: null, timestamp: Date.now() } });
            //forward the read request
            this.send(key);
        } else {
            //if there is a read hold, retry in 0.1s
            setTimeout(() => {
                this.requestDataState(key);
            }, 100);
        }
    }

    /*
    verify if there is a read hold on a previous read command 
    */
    getInfoReadHold() {
        if (this.droneCache.get('COMMAND_HOLD_KEY') == null)
            return false
        // check if the current read value is empty
        if (this.droneCache.get(this.droneCache.get('COMMAND_HOLD_KEY')).current.value == null) {
            // check if the wait period for a response has expired 
            if (Date.now() - this.droneCache.get(this.droneCache.get('COMMAND_HOLD_KEY')).current.timestamp > GET_COMMAND_TIMEOUT_THRESHOLD) {
                // if the read command has timed out, set the value to -1
                this.droneCache.set(
                    this.droneCache.get('COMMAND_HOLD_KEY'),
                    {
                        last: this.droneCache.get(this.droneCache.get('COMMAND_HOLD_KEY')).current,
                        current: { value: -1, timestamp: Date.now() }
                    }
                )
            } else {
                return true;
            }
        }
        return false;
    }

    /*
     * Parse and cache the raw read response returned by the drone
     * @param  {[float]} value [the float value returned by the drone]
    */
    processGetResponse(value) {
        this.droneCache.set(
            this.droneCache.get('COMMAND_HOLD_KEY'),
            {
                last: this.droneCache.get(this.droneCache.get('COMMAND_HOLD_KEY')).current,
                current: { value: value, timestamp: Date.now() }
            }
        );
    }

    /*
     * connect to an upstream websocket for processing instructions
     * the instructions must be properly formatted
     * this method cannot be used for read commands
     * @param  {[socket.io Server object]} statusSocket [server used for transmition of IO data]
     * @param  {[string]} eventKey [the key for the socket]
     */
    setIOStream(statusSocket, eventKey) {
        this.statusSocketKey = eventKey !== undefined ? eventKey : this.statusSocketKey;
        this.statusSocket = statusSocket.sockets;
        //forward all commands directly to the drone via the send method
        this.statusSocket.on('connection', socket => {
            socket.on('command', rawMessage => {
                this.send(rawMessage.command, rawMessage.data);
            });
            socket.emit('status', true);
        })
    }

    /* This function should be used to send any required commands to the drone.
     * @param  {[string]} command [the drone command to forward]
     * @param  {[json/string]} data [data associated with the drone command (if any)]
     */
    send(command, data) {
        let rawInstructions = '';
        //convert instruciton to raw drone command
        try {
            rawInstructions = util.buildDroneCommand(command, data, commandSchema);
        } catch (err) {
            console.log(err.toString())
            return;
        }
        //re-establish the connection with the drone if required
        if (command != HANDSHAKE_COMMAND && Date.now() - this.status.lastResponseTimestamp > COMMAND_RESET_PERIOD)
            this.send(HANDSHAKE_COMMAND);
        //push the command onto the drone command queue
        let self = this;
        this.instructionQueue.push(async function (callback) {
            //send command and sleep the queue for the required delay period 
            self.forwardCommand(rawInstructions);
            await wait(delays[command]);
            callback(null, true)
        })
        return this.status.connected;
    }

    /* this method is called when a video frame is read and processed by the server 
     * additional video processing logic can be implemented in this method
     * the any changes to the frame must be done directly to the input parameter object 
     * @param  {[cv frame object]} frame [frame containing image data to process]
    */
    processFrame(frame) {
        let target;
        //follow primary detected face
        if (this.status.automationInstruction == this.automationOptions[0])
            target = automation.trackFace(frame);

        //follow bundle of all detected faces in the frame
        if (this.status.automationInstruction == this.automationOptions[1])
            target = automation.trackFaces(frame);

        if (target != undefined) {
            //store the target's location with respect to the frame
            this.status.destinationTarget = target;

            //set the target locked flag and kick off the motion loop 
            if (!this.status.targetLock) {
                this.status.targetLock = true;
                this.automationLoop(AUTOMATION_CYCLE);
            }
            //display the observe window range within the frame
            frame.drawRectangle(
                new cv2.Point2((frame.sizes[1] / 2) - this.observeWindow[1], (frame.sizes[0] / 2) - this.observeWindow[0]),
                new cv2.Point2((frame.sizes[1] / 2) + this.observeWindow[1], (frame.sizes[0] / 2) + this.observeWindow[0]),
                new cv2.Vec(255, 173, 5),
                1,
                cv2.LINE_8
            )
        }

        else if (this.status.targetLock) {
            //clear the target lock flag and clear all move instruction if no lock is re-established in the next 0.5 seconds
            this.status.targetLock = false;
            setTimeout(() => {
                if (!this.status.targetLock) {
                    this.send('rc', { a: 0, b: 0, c: 0, d: 0 });
                    clearInterval(this.status.trackTargetMoveInterval);
                }
            }, 50);
        }
    }

    /* This is the main automation loop for the drone continously sending mvoement instructions
     * @param  {[cv frame object]} frame [frame containing image data to process]
     */
    automationLoop(updatePeriod) {
        //clear the previous automation interval
        clearInterval(this.status.trackTargetMoveInterval);
        this.status.trackTargetMoveInterval = setInterval(() => {
            //calculate the delta between the observeRange and target size within the frame
            let widthError = ((this.observeRange[1] - this.observeRange[0]) / 2) - this.status.destinationTarget.percent_x;
            let heightError = ((this.observeRange[1] - this.observeRange[0]) / 2) - this.status.destinationTarget.percent_z;

            //calculate the x, y and z errors 
            let xError = this.status.destinationTarget.x - (FRAME_SIZE[0] / 2);
            let zError = -(this.status.destinationTarget.z - (FRAME_SIZE[1] / 2));
            //take the larger of the two errors for the yError
            let yError = Math.abs(widthError) > Math.abs(heightError) ? widthError : heightError;

            let r = 0;
            let z = 0;
            let y = 0;

            //if the error is outside the permitted threshold run the error through the PID controllers
            if (Math.abs(xError) > this.observeWindow[0])
                r = this.PIDX.getPIDOutput(xError);
            if (Math.abs(zError) > this.observeWindow[1])
                z = this.PIDZ.getPIDOutput(zError);
            //only run the y dimansion PID controller if the z,y target is achieved 
            if (r == 0 && z == 0) {
                if (Math.abs(yError) > Math.abs((this.observeRange[1] - this.observeRange[0]) / 2))
                    y = -this.PIDY.getPIDOutput(yError);
            }
            //set the status value for sending downstream to the User Interface
            this.status.rc = { a: 0, b: y, c: z, d: r };
            //if the target is still locked set the rc command for this itteration of the automation loop
            if (this.status.targetLock)
                this.send('rc', { a: 0, b: y, c: z, d: r });

        }, updatePeriod);
    }

    /*
     * Forwards the raw command to the drone. 
     * All validation of the instruction must be done on prior to calling this funciton
     * @param  {[string]} command [raw command to forward to the drone]
     */
    forwardCommand(command) {
        this.droneIO.send(command, 0, command.length, this.commandPort, this.host, util.handleError);
    }

    //Returns the drone's current connection state (true / false)
    getdroneState() {
        return this.status.connected;
    }

    /*
     * Update the automation isntructions for the drone . 
     * @param  {[string]} flag [automation option value (see automationOptions)]
     */
    setAutomationTarget(flag) {
        this.status.automationInstruction = flag;
        this.status.automated = true;
    }

    /*
     * Disable any active automation isntructions for the drone. 
     */
    clearAutomationTarget() {
        this.status.automated = false;
        this.status.automationInstruction = null;
    }

    /*
     * update the websocket object for downstream video streaming. 
     * @param  {[socket.io Server object]} server [server used for transmition of video data]
     */
    setDownstreamVideoStream(server) {
        this.videoServerEndpoint = server;
    }

    //compiles and returns data stored in the read cache
    getInfo() {
        let speed = 0;
        let wifi = 0;
        //check and pull the most relevent value for the drone's speed from the cache
        if (this.droneCache.get(SPEED_GET_COMMAND).current.value == null)
            speed = this.droneCache.get(SPEED_GET_COMMAND).last.value;
        else if (this.droneCache.get(SPEED_GET_COMMAND).current.value != -1)
            speed = this.droneCache.get(SPEED_GET_COMMAND).current.value;
        else
            speed = null;
        //check and pull the most relevent value for the drone's wifi signal from the cache
        if (this.droneCache.get(WIFI_GET_COMMAND).current.value == null)
            wifi = this.droneCache.get(WIFI_GET_COMMAND).last.value;
        else if (this.droneCache.get(WIFI_GET_COMMAND).current.value != -1)
            wifi = this.droneCache.get(WIFI_GET_COMMAND).current.value;
        else
            wifi = null;
        //fix bug with Tello sometimes retuning 100 speed when grounded.
        speed = speed == 100.0 ? 0 : speed;
        return ({
            wifi: wifi == -1 ? null : wifi,
            speed: speed == -1 ? null : speed,
        })
    }

}

module.exports = Tello;
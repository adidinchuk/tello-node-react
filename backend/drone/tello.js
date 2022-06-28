const dgram = require('dgram');
const throttle = require('lodash.throttle');
const wait = require('waait');
const NodeCache = require('node-cache');
const cv2 = require('opencv4nodejs');
const { fork } = require('child_process');
const delays = require('../metadata/delays');
const commandSchema = require('../metadata/commands');
const util = require('./util');
const vision = require('./vision');
const automation = require('./automation')
const PIDController = require('./PIDController');
const HANDSHAKE_COMMAND = 'command';
const WIFI_GET_COMMAND = 'wifi?';
const SPEED_GET_COMMAND = 'speed?';
const GET_COMMAND_TIMEOUT_THRESHOLD = 1000;
const RECONNECTION_ATTEMPT_PERIOD = 15000;
const COMMAND_RESET_PERIOD = 1000;
const VIDEO_STREAM_FPS = 100;
const DRONE_STATE_THROTTLE = 1000;
const FRAME_SIZE = [960, 720];

const queue = require('queue');
const config = require('../../config');

class Tello {

    droneIO = dgram.createSocket('udp4');
    droneState = dgram.createSocket('udp4');
    droneCache = new NodeCache();
    instructionQueue = queue({ results: [] });

    faceDetectionClassifier = new cv2.CascadeClassifier(cv2.HAAR_FRONTALFACE_ALT2);

    // default settings //
    commandPort = config.backend.drone.COMMAND_PORT;
    statusPort = config.backend.drone.STATUS_PORT;
    videoEndpoint = config.backend.drone.VIDEO_ENDPOINT;
    videoServerEndpoint = config.backend.VIDEO_STREAMING_SERVER_HOST;
    host = config.backend.drone.HOST;

    automationOptions = ['followPerson', 'followPersons'];
    observeWindow = [150, 150];

    status = {
        lastResponseTimestamp: -1,
        connected: false,
        captureOpen: false,
        automated: false,
        destinationTarget: { a: 0, b: 0, c: 0, d: 0 },
        automationInstruction: null,
        targetLock: true,
        moveInterval: null,
        rc: { a: 0, b: 0, c: 0, d: 0 }
    }

    statusSocketKey = 'dronestate';
    videoCapture = null;

    PIDX = new PIDController(0.3, 0, 1, 40, -40);
    PIDZ = new PIDController(1, 0, 1, 40, -40);

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
        this.updateOutputSockets();

        this.send(HANDSHAKE_COMMAND);
        this.startConnectionManager();
    }

    initCache() {
        this.droneCache.set(WIFI_GET_COMMAND, { last: { value: null, timestamp: -1 }, current: { value: null, timestamp: -1 } });
        this.droneCache.set(SPEED_GET_COMMAND, { last: { value: null, timestamp: -1 }, current: { value: null, timestamp: -1 } });
    }

    initCommandQueue() {
        this.instructionQueue.concurrency = 1;
        this.instructionQueue.autostart = true;
    }

    startConnectionManager() {
        setInterval(() => {
            if (Date.now() - this.status.lastResponseTimestamp > COMMAND_RESET_PERIOD) {
                if (!this.status.connected) {
                    process.stdout.clearLine(0);
                    process.stdout.cursorTo(0);
                } else
                    this.status.connected = false;
                process.stdout.write('Failed to establish communication with the drone, attempting to reconnect...')

                this.send(HANDSHAKE_COMMAND);

                if (this.videoCapture != null)
                    this.videoCapture.release();
            }
        }, RECONNECTION_ATTEMPT_PERIOD);

        setInterval(() => {
            if (this.status.connected)
                this.requestDataState(WIFI_GET_COMMAND);
        }, 3000);

        setInterval(() => {
            if (this.status.connected)
                this.requestDataState(SPEED_GET_COMMAND);
        }, 1000);
    }

    setDownstreamVideoStream(server) {
        setInterval(() => {
            if (this.videoCapture != null) {
                this.status.captureOpen = true;
                const frame = this.videoCapture.read();
                if (frame.sizes.length == 0) {
                    this.status.captureOpen = false;
                    this.videoCapture = null;
                } else {
                    this.processFrame(frame);
                    server.emit('image', cv2.imencode('.jpg', frame).toString('base64'));
                }
            }
        }, 1000 / VIDEO_STREAM_FPS);
    }

    async initVideoStream(delay) {
        if (!this.status.captureOpen && this.status.connected) {
            setTimeout(() => {
                try {
                    this.videoCapture = new cv2.VideoCapture(this.videoEndpoint, cv2.CAP_FFMPEG);
                    this.videoCapture.set(cv2.CAP_PROP_BUFFERSIZE, 1);
                    this.videoCapture.set(cv2.CAP_PROP_FPS, 30);

                } catch (error) {
                    console.log(error);
                    this.initVideoStream(10000)
                }
            }, delay)
        }
    }



    getInfo() {
        let speed = 0;
        let wifi = 0;

        if (this.droneCache.get(SPEED_GET_COMMAND).current.value == null)
            speed = this.droneCache.get(SPEED_GET_COMMAND).last.value;
        else if (this.droneCache.get(SPEED_GET_COMMAND).current.value != -1)
            speed = this.droneCache.get(SPEED_GET_COMMAND).current.value;
        else
            speed = null;

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

    requestDataState(key) {
        this.droneCache.set('COMMAND_HOLD_KEY', key);
        if (this.getInfoBufferState()) {
            this.droneCache.set(key, { last: this.droneCache.get(key).current, current: { value: null, timestamp: Date.now() } });
            this.send(key);
        } else {
            setTimeout(() => {
                this.droneCache.set(key, { last: this.droneCache.get(key).current, current: { value: null, timestamp: Date.now() } });
                this.send(key);
            }, 1000);
        }
    }

    /*
    verify if the server is currently waiting on a drone status response 
    */
    getInfoBufferState() {
        if (this.droneCache.get(this.droneCache.get('COMMAND_HOLD_KEY')).current.value == null) {
            if (Date.now() - this.droneCache.get(this.droneCache.get('COMMAND_HOLD_KEY')).current.timestamp > GET_COMMAND_TIMEOUT_THRESHOLD) {
                this.droneCache.set(
                    this.droneCache.get('COMMAND_HOLD_KEY'),
                    {
                        last: this.droneCache.get(this.droneCache.get('COMMAND_HOLD_KEY')).current,
                        current: { value: -1, timestamp: Date.now() }
                    })
            } else {
                return false;
            }
        }
        return true;
    }

    /*
    Parse and cache the raw data returned by the drone
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
    Allows for the drone to hook into an upstream websocket for processing instructions
    */
    setIOStream(statusSocket, eventKey) {
        this.statusSocketKey = eventKey !== undefined ? eventKey : this.statusSocketKey;
        this.statusSocket = statusSocket.sockets;
        //once a 
        this.statusSocket.on('connection', socket => {
            socket.on('command', rawMessage => {

                this.send(rawMessage.command, rawMessage.data);
            });
            socket.emit('status', true);
        })
    }

    updateOutputSockets() {
        //set the droneState socket to read any data flowing from the drone
        this.droneState.on('message',
            //throttle data to 100ms updates
            throttle(rawMessage => {
                if (this.statusSocket != null) {
                    const state = util.parseStateData(rawMessage.toString());
                    this.status.lastResponseTimestamp = Date.now();
                    //forward data downstream
                    if (this.statusSocket != null) {
                        var data = state;
                        data.other = this.getInfo();
                        data.rc = [{ name: 'X', value: this.status.rc.a }, { name: 'Y', value: this.status.rc.b }, { name: 'Z', value: this.status.rc.c }, { name: 'R', value: this.status.rc.d }];
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
                if the response is not 'ok' and is instead an integer, it is likely a response 
                from the drone following a get command 
                */
                let floatVal = parseFloat(message);
                if (floatVal != NaN)
                    this.processGetResponse(floatVal);
                else
                    console.log('Error encounterd in drone IO response');
                return;
            }
        });
    }

    //This function should be used to send any required commands to the drone.
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
        var self = this;
        this.instructionQueue.push(async function (callback) {
            //send command and sleep the queue for the required delay period 
            self.forwardCommand(rawInstructions);
            await wait(delays[command]);
            callback(null, true)
        })
        return this.status.connected;
    }
    /*
    Forwards the raw command to the drone. 
    All validation of the instruction must be done on prior to calling this funciton
    */
    forwardCommand(command) {
        this.droneIO.send(command, 0, command.length, this.commandPort, this.host, util.handleError);
    }

    //Returns the drone's current connection state (true / false)
    getdroneState() {
        return this.status.connected;
    }

    processFrame(frame) {
        var target;
        if (this.status.automationInstruction == 'followPerson')
            target = automation.trackFace(frame);

        if (target != undefined) {
            this.status.destinationTarget = target;
            //set the target locked flag and kick off the movement loop 
            if (!this.status.targetLock) {
                this.status.targetLock = true;
                clearInterval(this.status.moveInterval);
                this.followLoop(30);
            }

            frame.drawRectangle(
                new cv2.Point2((frame.sizes[1] - this.observeWindow[1]) / 2, (frame.sizes[0] - this.observeWindow[0]) / 2),
                new cv2.Point2((frame.sizes[1] + this.observeWindow[1]) / 2, (frame.sizes[0] + this.observeWindow[0]) / 2),
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
                    clearInterval(this.status.moveInterval);
                }
            }, 50);
        }
    }

    followLoop(updatePeriod) {
        this.status.moveInterval = setInterval(() => {
            var xError = this.status.destinationTarget.x - (FRAME_SIZE[0] / 2);
            var zError = -(this.status.destinationTarget.z - (FRAME_SIZE[1] / 2));
            var r = 0;
            var z = 0;
            if (Math.abs(xError) > this.observeWindow[0] / 2)
                r = this.PIDX.getPIDOutput(xError);
            if (Math.abs(zError) > this.observeWindow[1] / 2)
                z = this.PIDZ.getPIDOutput(zError);

            this.status.rc = { a: 0, b: 0, c: z, d: r };

            if (this.status.targetLock)
                this.send('rc', { a: 0, b: 0, c: z, d: r });

        }, updatePeriod);
    }

    setAutomationTarget(flag) {
        this.status.automationInstruction = flag;
        this.status.automated = true;
    }

    clearAutomationTarget() {
        this.status.automated = false;
        this.status.automationInstruction = null;
    }

}

module.exports = Tello;
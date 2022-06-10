const dgram = require('dgram');
const throttle = require('lodash.throttle');
const wait = require('waait');
const delays = require('../metadata/delays');
const commandSchema = require('../metadata/commands');
const NodeCache = require('node-cache');
const cv2 = require('opencv4nodejs');


const util = require('./util');

const HANDSHAKE_COMMAND = 'command';
const CACHE_WIFI_KEY = 'wifiState';
const CACHE_SPEED_KEY = 'speedState';
const GET_COMMAND_TIMEOUT_THRESHOLD = 1000;

const queue = require('queue');
const config = require('../../config');
const spawn = require('child_process').spawn;

const drawRect = (image, rect, color, opts = { thickness: 2 }) =>
  image.drawRectangle(
    rect,
    color,
    opts.thickness,
    cv2.LINE_8
  );

//list of permitted commands
const PERMITTED_COMMANDS = commandSchema.control.concat(commandSchema.read).concat(commandSchema.set);

class Tello {

    droneIO = dgram.createSocket('udp4');
    droneState = dgram.createSocket('udp4');

    // default settings //
    commandPort = config.backend.drone.COMMAND_PORT;
    statusPort = config.backend.drone.STATUS_PORT;
    videoEndpoint = config.backend.drone.VIDEO_ENDPOINT;
    videoServerEndpoint = config.backend.VIDEO_STREAMING_SERVER_HOST;
    host = config.backend.drone.HOST;
    commandResetPeriod = 1000;
    reconnectionAttemptPeriod = 15000;
    statusSocketKey = 'dronestate';
    Vcap = null;

    lastResponseTimestamp = -1;

    currentCommand = null;
    currentCommandTimestamp = -1;

    connected = false;
    droneCache = new NodeCache();

    instructionQueue = queue({ results: [] });
    captureOpen = false;
    classifier = null;

    classifier = null;

    /*
    * constructor description
    * @param  {[int]} commandPort [Tello drone command port - typically 8889]
    * @param  {[int]} statusPort [Tello drone status port - typically 8890]
    * @param  {[string]} host [Tello drone ip address - typically 192.168.10.1]
    * @param  {[string]} socket.io [socket for live streaming status data]
    * @param  {[string]} commandResetPeriod [when a command is recieved - if nothing has beenr ecieved from the drone over this period a new handshake will be made]
    * @param  {[string]} reconnectionAttemptPeriod [this period dictates how often the server attempts to re-establish communication with the drone if nothing has been recieved since the commandResetPeriod]
    */
    constructor(commandPort, statusPort, host, videoEndpoint, videoServerEndpoint, statusSocket, statusSocketKey, commandResetPeriod, reconnectionAttemptPeriod) {
        process.env.OPENCV_FFMPEG_DEBUG = -8;
        this.instructionQueue.concurrency = 1;
        this.instructionQueue.autostart = true;

        this.commandPort = commandPort !== undefined ? commandPort : this.commandPort;
        this.statusPort = statusPort !== undefined ? statusPort : this.statusPort;
        this.host = host !== undefined ? host : this.host;
        this.commandResetPeriod = commandResetPeriod !== undefined ? commandResetPeriod : this.commandResetPeriod;
        this.reconnectionAttemptPeriod = reconnectionAttemptPeriod !== undefined ? reconnectionAttemptPeriod : this.reconnectionAttemptPeriod;
        this.statusSocketKey = statusSocketKey !== undefined ? statusSocketKey : this.statusSocketKey;
        this.videoEndpoint = videoEndpoint !== undefined ? videoEndpoint : this.videoEndpoint;
        this.videoServerEndpoint = videoServerEndpoint !== undefined ? videoServerEndpoint : this.videoServerEndpoint;

        this.statusSocket = statusSocket;


        this.classifier = new cv2.CascadeClassifier(cv2.HAAR_FRONTALFACE_ALT2);

        this.initDrone();

        console.log(cv2.utils);

    }

    drawBlueRect = (image, rect, opts = { thickness: 2 }) =>
        drawRect(image, rect, new cv2.Vec(255, 0, 0), opts);

    setVideoEndpoint(endpoint) {
        console.log('ini video')

        const FPS = 100;

        //this.initVideoStream(100);

        setInterval(() => {



            if (this.Vcap != null) {
                this.captureOpen = true;
                
                const frame = this.Vcap.read();

                if (frame.sizes.length == 0) {
                    this.captureOpen = false;
                    this.Vcap = null;
                } else {
                    

                    

                    // detect faces
                    const { objects, numDetections } = this.classifier.detectMultiScale(frame.bgrToGray(), { scaleFactor: 1.2, minSize: new cv2.Size(100, 100) });
               

                    if (!objects.length) {
                        endpoint.emit('image', cv2.imencode('.jpg', frame).toString('base64'));
                    } else {
                        // draw detection
                        const numDetectionsTh = 10;
                        objects.forEach((rect, i) => {
                            
                      
                             if(numDetections[i] > numDetectionsTh)
                             {
                                const thickness = numDetections[i] < numDetectionsTh ? 1 : 2;
                                this.drawBlueRect(frame, rect, { thickness });
                             }
                               
                        });

                        endpoint.emit('image', cv2.imencode('.jpg', frame).toString('base64'));
                    }


                }


            }


        }, 1000 / FPS);

    }

    async initVideoStream(delay) {

        if (!this.captureOpen && this.connected) {
            setTimeout(() => {
                try {
                    console.log('start')

                    this.Vcap = new cv2.VideoCapture(this.videoEndpoint, cv2.CAP_FFMPEG, ['-tune', 'zerolatency', '-v', '0']);
                    // this.Vcap.set();
                    this.Vcap.set(cv2.CAP_PROP_FRAME_WIDTH, 24);
                    this.Vcap.set(cv2.CAP_PROP_FRAME_HEIGHT, 24);
               
                     
                    console.log('finish')
                } catch (error) {
                    console.log(error);
                    this.initVideoStream(10000)
                }
            }, delay)
        }

    }

    initDrone() {

        //bind IO and drone state sockets 
        this.droneIO.bind(this.commandPort);
        this.droneState.bind(this.statusPort);

        this.updateOutputSockets();
        this.send(HANDSHAKE_COMMAND);

        this.droneCache.set(CACHE_WIFI_KEY, { last: { value: null, timestamp: -1 }, current: { value: null, timestamp: -1 } });
        this.droneCache.set(CACHE_SPEED_KEY, { last: { value: null, timestamp: -1 }, current: { value: null, timestamp: -1 } });

        setInterval(() => {
            if (Date.now() - this.lastResponseTimestamp > this.commandResetPeriod) {
                this.connected = false;
                this.send(HANDSHAKE_COMMAND);
                console.log('Connection with drone lost, attempting to reconnect.')
                if (this.Vcap != null)
                    this.Vcap.release();
            }
        }, this.reconnectionAttemptPeriod);

        /* var args = [
              "-i", this.videoEndpoint,
              "-r", "30",
              "-s", "1280x720",
              "-codec:v", "mpeg1video",
              "-b", "800k",
              "-f", "mpegts",
              "-tune", "zerolatency",
              this.videoServerEndpoint
          ];
     
          // Spawn an ffmpeg instance
          var streamer = spawn('ffmpeg', args);
     
          streamer.on("exit", function (code) {
              console.log("Failure", code);
          });*/

        setInterval(() => {
            if (this.connected)
                this.requestWIFIState();
        }, 3000);

        setInterval(() => {
            if (this.connected)
                this.requestSpeedState();
        }, 1000);

    }

    getInfo() {

        let speed = 0;
        let wifi = 0;

        if (this.droneCache.get(CACHE_SPEED_KEY).current.value == null)
            speed = this.droneCache.get(CACHE_SPEED_KEY).last.value;
        else if (this.droneCache.get(CACHE_SPEED_KEY).current.value != -1)
            speed = this.droneCache.get(CACHE_SPEED_KEY).current.value;
        else
            speed = null;

        if (this.droneCache.get(CACHE_WIFI_KEY).current.value == null)
            wifi = this.droneCache.get(CACHE_WIFI_KEY).last.value;
        else if (this.droneCache.get(CACHE_WIFI_KEY).current.value != -1)
            wifi = this.droneCache.get(CACHE_WIFI_KEY).current.value;
        else
            wifi = null;

        //fix bug with Tello sometimes retuning 100 speed when grounded.
        speed = speed == 100.0 ? 0 : speed;

        return ({
            wifi: wifi == -1 ? null : wifi,
            speed: speed == -1 ? null : speed
        })
    }

    requestWIFIState() {
        if (this.getInfoBufferState()) {
            this.droneCache.set(CACHE_WIFI_KEY, { last: this.droneCache.get(CACHE_WIFI_KEY).current, current: { value: null, timestamp: Date.now() } });
            this.send('wifi?');
        } else {
            setTimeout(() => {
                this.droneCache.set(CACHE_WIFI_KEY, { last: this.droneCache.get(CACHE_WIFI_KEY).current, current: { value: null, timestamp: Date.now() } });
                this.send('wifi?');
            }, 1000);
        }
    }

    requestSpeedState() {
        if (this.getInfoBufferState()) {
            this.droneCache.set(CACHE_SPEED_KEY, { last: this.droneCache.get(CACHE_SPEED_KEY).current, current: { value: null, timestamp: Date.now() } });
            this.send('speed?');
        } else {
            setTimeout(() => {
                this.droneCache.set(CACHE_SPEED_KEY, { last: this.droneCache.get(CACHE_SPEED_KEY).current, current: { value: null, timestamp: Date.now() } });
                this.send('speed?');
            }, 1000);
        }
    }

    getInfoBufferState() {
        if (this.droneCache.get(CACHE_WIFI_KEY).current.value == null) {
            if (Date.now() - this.droneCache.get(CACHE_WIFI_KEY).current.timestamp > GET_COMMAND_TIMEOUT_THRESHOLD) {
                this.droneCache.set(CACHE_WIFI_KEY, { last: this.droneCache.get(CACHE_WIFI_KEY).current, current: { value: -1, timestamp: Date.now() } })
            } else {
                return false;
            }
        }

        if (this.droneCache.get(CACHE_SPEED_KEY).current.value == null) {
            if (Date.now() - this.droneCache.get(CACHE_SPEED_KEY).current.timestamp > GET_COMMAND_TIMEOUT_THRESHOLD) {
                this.droneCache.set(CACHE_SPEED_KEY, { last: this.droneCache.get(CACHE_SPEED_KEY).current, current: { value: -1, timestamp: Date.now() } })
            } else {
                return false;
            }
        }

        return true;
    }

    processGetMessage(value) {
        if (this.droneCache.get(CACHE_WIFI_KEY).current.value == null) {
            this.droneCache.set(CACHE_WIFI_KEY, { last: this.droneCache.get(CACHE_WIFI_KEY).current, current: { value: value, timestamp: Date.now() } })
        }

        if (this.droneCache.get(CACHE_SPEED_KEY).current.value == null) {
            this.droneCache.set(CACHE_SPEED_KEY, { last: this.droneCache.get(CACHE_SPEED_KEY).current, current: { value: value, timestamp: Date.now() } })
        }
    }

    setStatusSocket(statusSocket, eventKey) {
        this.statusSocketKey = eventKey !== undefined ? eventKey : this.statusSocketKey;
        this.statusSocket = statusSocket;
        this.updateOutputSockets();
    }

    updateOutputSockets() {
        this.droneState.on('message',
            throttle(message => {
                if (this.statusSocket != null) {
                    const state = util.parseStateData(message.toString());
                    this.lastResponseTimestamp = Date.now();
                    this.statusSocket.emit(this.statusSocketKey, state);
                }
            }, 100)
        );

        this.droneIO.on('message', rawMessage => {
            let message = rawMessage.toString();
            this.lastResponseTimestamp = Date.now();
            if (message.toString() == 'ok') {
                console.log(`🚁 : ${message}`);
                this.lastPayload = Date.now();
                if (!this.connected) {
                    console.log('Connection with drone has been re-established.')
                    this.connected = true;
                    this.send('streamon');
                    this.initVideoStream(1000);
                }

            } else {

                let floatVal = parseFloat(message);
                if (floatVal != NaN) {
                    this.processGetMessage(floatVal);
                } else {
                    console.log('Error encounterd in drone IO response');
                }
                return;
            }

        });
    }

    send(command, data) {
        let rawInstructions = '';
        try {
            rawInstructions = buildDroneCommand(command, data, commandSchema);
        } catch (err) {
            console.log(err.toString())
            return;
        }



        if (command != HANDSHAKE_COMMAND && Date.now() - this.lastResponseTimestamp > this.commandResetPeriod)
            this.send(HANDSHAKE_COMMAND);

        var self = this;
        this.instructionQueue.push(async function (cb) {
            self.forwardSend(rawInstructions);
            //console.log(delays[command]);
            await wait(delays[command]);
            cb(null, true)
        })

        return this.connected;

    }

    forwardSend(command) {
        //console.log("FORWARDING TO DRONE: " + command);
        this.droneIO.send(command, 0, command.length, this.commandPort, this.host, util.handleError);
    }

    getdroneState() {
        return this.connected;
    }

}

function buildDroneCommand(command, data, schema) {


    if (!PERMITTED_COMMANDS.includes(command))
        throw new Error('Command REJECTED as it is not on the approved list.');

    constructedCommand = command;

    if (data == null)
        return constructedCommand;

    if (command in schema.valueThresholds)
        constructedCommand += ' ' + processSubCommand(data, schema.valueThresholds[command]);

    function processSubCommand(commandComponenet, commandSchema) {

        resultString = '';

        if (commandSchema.hasOwnProperty('values')) {
            if (commandComponenet >= commandSchema.values.min && commandComponenet <= commandSchema.values.max)
                resultString = commandComponenet;
            else
                throw new Error('Provided command value is outside the allowed threshold.');
        } else {

            for (var element of Object.keys(commandSchema))
                resultString += ' ' + processSubCommand(commandComponenet[element], commandSchema[element])

        }
        console.log('returning  ' + resultString)
        return resultString;

    }

    return constructedCommand;

}

module.exports = Tello;
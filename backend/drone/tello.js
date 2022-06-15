const dgram = require('dgram');
const throttle = require('lodash.throttle');
const wait = require('waait');
const NodeCache = require('node-cache');
const cv2 = require('opencv4nodejs');

const delays = require('../metadata/delays');
const commandSchema = require('../metadata/commands');
const util = require('./util');

const HANDSHAKE_COMMAND = 'command';
const CACHE_WIFI_KEY = 'wifiState';
const CACHE_SPEED_KEY = 'speedState';
const GET_COMMAND_TIMEOUT_THRESHOLD = 1000;
const RECONNECTION_ATTEMPT_PERIOD = 15000;
const COMMAND_RESET_PERIOD = 1000;

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

    statusSocketKey = 'dronestate';
    videoCapture = null;
    lastResponseTimestamp = -1;
    connected = false;
    captureOpen = false;

    /*
    * constructor description
    * @param  {[int]} commandPort [Tello drone command port - typically 8889]
    * @param  {[int]} statusPort [Tello drone status port - typically 8890]
    * @param  {[string]} host [Tello drone ip address - typically 192.168.10.1]
    */
    constructor(commandPort, statusPort, host, videoEndpoint, videoServerEndpoint) {
        this.instructionQueue.concurrency = 1;
        this.instructionQueue.autostart = true;
        this.commandPort = commandPort !== undefined ? commandPort : this.commandPort;
        this.statusPort = statusPort !== undefined ? statusPort : this.statusPort;
        this.host = host !== undefined ? host : this.host;
        this.videoEndpoint = videoEndpoint !== undefined ? videoEndpoint : this.videoEndpoint;
        this.videoServerEndpoint = videoServerEndpoint !== undefined ? videoServerEndpoint : this.videoServerEndpoint;
        this.initDrone();
    }

    setVideoEndpoint(endpoint) {
        const FPS = 100;
        setInterval(() => {
            if (this.videoCapture != null) {
                this.captureOpen = true;
                const frame = this.videoCapture.read();
                if (frame.sizes.length == 0) {
                    this.captureOpen = false;
                    this.videoCapture = null;
                } else {
                    const { objects, numDetections } = this.faceDetectionClassifier.detectMultiScale(frame.bgrToGray(), { scaleFactor: 1.2, minSize: new cv2.Size(100, 100) });
                    if (!objects.length) {
                        endpoint.emit('image', cv2.imencode('.jpg', frame).toString('base64'));
                    } else {
                        // draw detection
                        const numDetectionsTh = 10;
                        objects.forEach((rect, i) => {
                            if (numDetections[i] > numDetectionsTh) {
                                const thickness = numDetections[i] < numDetectionsTh ? 1 : 2;
                                util.drawBlueRect(frame, rect, { thickness });
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
                    this.videoCapture = new cv2.VideoCapture(this.videoEndpoint, cv2.CAP_FFMPEG);
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
            if (Date.now() - this.lastResponseTimestamp > COMMAND_RESET_PERIOD) {
                if(!this.connected){
                    process.stdout.clearLine(0);
                    process.stdout.cursorTo(0);                    
                }else                    
                    this.connected = false;
                this.send(HANDSHAKE_COMMAND);
                console.log('Connection with drone lost, attempting to reconnect...')
                if (this.videoCapture != null)
                    this.videoCapture.release();
            }
        }, RECONNECTION_ATTEMPT_PERIOD);

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
        this.statusSocket = statusSocket.sockets;
        this.updateOutputSockets();

        statusSocket.on('connection', socket => {
            socket.on('command', message => {
                this.send(message.command, message.data);
            });
            socket.emit('status', true);
        })
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
                this.lastPayload = Date.now();
                if (!this.connected) {
                    console.log('Connection with the Tello drone has been established..')
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
            rawInstructions = util.buildDroneCommand(command, data, commandSchema);
        } catch (err) {
            console.log(err.toString())
            return;
        }



        if (command != HANDSHAKE_COMMAND && Date.now() - this.lastResponseTimestamp > COMMAND_RESET_PERIOD)
            this.send(HANDSHAKE_COMMAND);

        var self = this;
        this.instructionQueue.push(async function (cb) {
            self.forwardSend(rawInstructions);
            await wait(delays[command]);
            cb(null, true)
        })

        return this.connected;

    }

    forwardSend(command) {
        this.droneIO.send(command, 0, command.length, this.commandPort, this.host, util.handleError);
    }

    getdroneState() {
        return this.connected;
    }

}

module.exports = Tello;
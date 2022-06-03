const dgram = require('dgram');
const throttle = require('lodash.throttle');
const wait = require('waait');
const delays = require('../metadata/delays');
const commandSchema = require('../metadata/commands');
const NodeCache = require('node-cache');
const cv = require('opencv4nodejs');

const HANDSHAKE_COMMAND = 'command';
const CACHE_WINDOW_KEY = 'commandWindow';

const queue = require('queue');
const spawn = require('child_process').spawn;

//list of permitted commands
const PERMITTED_COMMANDS = commandSchema.control.concat(commandSchema.read).concat(commandSchema.set);

class Tello {

    droneIO = dgram.createSocket('udp4');
    droneState = dgram.createSocket('udp4');

    // default settings //
    commandPort = 8889;
    statusPort = 8890;
    videoEndpoint = "udp://0.0.0.0:11111";
    videoServerEndpoint = "ws://localhost:3001"
    host = '192.168.10.1';
    commandResetPeriod = 1000;
    reconnectionAttemptPeriod = 15000;
    statusSocketKey = 'dronestate';

    lastResponseTimestamp = -1;

    currentCommand = null;
    currentCommandTimestamp = -1;

    connected = false;
    droneCache = new NodeCache();

    instructionQueue = queue({ results: [] });

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
        this.initDrone();

    }

    initDrone() {

        //bind IO and drone state sockets 
        this.droneIO.bind(this.commandPort);
        this.droneState.bind(this.statusPort);

        this.updateOutputSockets();
        this.send(HANDSHAKE_COMMAND);

        setInterval(() => {
            if (Date.now() - this.lastResponseTimestamp > this.commandResetPeriod) {
                this.connected = false;
                this.send(HANDSHAKE_COMMAND);
            }
        }, this.reconnectionAttemptPeriod);

        this.droneCache.set(CACHE_WINDOW_KEY, 0);

        var args = [
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
        // Uncomment if you want to see ffmpeg stream info
        //streamer.stderr.pipe(process.stderr);
        streamer.on("exit", function (code) {
            console.log("Failure", code);
        });

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
                    const state = parseStateData(message.toString());
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
                    this.connected = true;
                }

            } else {
                console.log('Error encounterd in drone IO response');
                return;
            }

        });
    }

    send(command, data) {
        console.log(command)
        let rawInstructions = '';
        try {
            rawInstructions = buildDroneCommand(command, data, commandSchema);
        } catch (err) {
            console.log(err.toString())
            return;
        }

        console.log(rawInstructions);

        if (command != HANDSHAKE_COMMAND && Date.now() - this.lastResponseTimestamp > this.commandResetPeriod)
            this.send(HANDSHAKE_COMMAND);

        var self = this;
        this.instructionQueue.push(async function (cb) {
            self.forwardSend(rawInstructions);
            console.log(delays[command]);
            await wait(delays[command]);
            cb(null, true)
        })
       
        return this.connected;

    }

    forwardSend(command) {
        console.log("FORWARDING TO DRONE: " + command);
        this.droneIO.send(command, 0, command.length, this.commandPort, this.host, handleError);
    }

    getdroneState() {
        return this.connected;
    }

}

function handleError(err) {
    if (err) {
        console.log('ERROR');
        console.log(err);
    }
}

function buildDroneCommand(command, data, schema) {

    console.log(command)
    if (!PERMITTED_COMMANDS.includes(command))
        throw new Error('Command is not on the approved list.');

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
                throw new Error('Provided value is outside the allowed threshold.');
        } else {

            for (var element of Object.keys(commandSchema))
                resultString += ' ' + processSubCommand(commandComponenet[element], commandSchema[element])

        }
        console.log('returning  ' + resultString)
        return resultString;

    }

    return constructedCommand;

}

function parseStateData(message) {
    return message.split(';').map(attr => attr.split(':')).reduce((data, [key, value]) => {
        (value != undefined) ? data[key] = value : void (0);
        return data;
    }, {})
}

module.exports = Tello;
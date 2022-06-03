const express = require("express");
const http = require('http');

const app = express();

const io_server = http.createServer(app);
const { Server } = require("socket.io");
const Tello = require("./drone/tello");


const io = new Server(io_server, {
    cors: {
        origin: "*",
        methods: ["GET", "POST"],
        credentials: false
    },
    allowEIO3: true
});

const config = require('../config')

tello = new Tello(
    config.backend.drone.COMMAND_PORT,
    config.backend.drone.STATUS_PORT,
    config.backend.drone.HOST,
    config.backend.drone.VIDEO_ENDPOINT,
    config.backend.SERVER_HOST + ':' + config.backend.VIDEO_STREAMING_SERVER_PORT
);

tello.setStatusSocket(io.sockets, 'dronestate');

io.on('connection', socket => {
    socket.on('command', message => {
        console.log(`Command sent from browser :`);
        console.log(message);
        tello.send(message.command, message.data);
    });
    socket.emit('status', true);
})

io_server.listen(config.backend.IO_SERVER_PORT, () => {
    console.log('Socket IO server up and running.');
})

//---- stream server details -- //

const WebSocket = require('ws');

const videoStreamServer = http.createServer(function (request, response) {

    console.log(
        'Device connected to the video stream from: ' +
        request.socket.remoteAddress + ':' +
        request.socket.remotePort
    );

    // When data comes from the stream (FFmpeg) we'll pass this to the web socket
    request.on('data', function (data) {
        // Now that we have data let's pass it to the web socket server
        webSocketServer.broadcast(data);
    });

}).listen(3001); // Listen for streams on port 3001

const webSocketServer = new WebSocket.Server({
    server: videoStreamServer
});


// Broadcast the stream via websocket to connected clients
webSocketServer.broadcast = function (data) {
    webSocketServer.clients.forEach(function each(client) {
        if (client.readyState === WebSocket.OPEN) {
            client.send(data);
        }
    });
};


/*

var args = [
    "-i", config.backend.drone.VIDEO_ENDPOINT,
    "-r", "30",
    "-s", "960x720",
    "-codec:v", "mpeg1video",
    "-b", "800k",
    "-f", "mpegts",
    config.backend.SERVER_HOST + ':' + config.backend.VIDEO_STREAMING_SERVER_PORT
];

// Spawn an ffmpeg instance
var streamer = spawn('ffmpeg', args);
// Uncomment if you want to see ffmpeg stream info
//streamer.stderr.pipe(process.stderr);
streamer.on("exit", function (code) {
    console.log("Failure", code);
});
 */
/*
const webSocketServer = new WebSocket.Server({
    server: streamServer
  });

  */
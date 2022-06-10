const express = require("express");
const http = require('http');
const bodyParser = require('body-parser');
const app = express();

const io_server = http.createServer(app);
const video_server = http.createServer(app);

const { Server } = require("socket.io");
const Tello = require("./drone/tello");
const cv2 = require('opencv4nodejs');

const io_endpoint = new Server(io_server, {
    cors: {
        origin: "*",
        methods: ["GET", "POST"],
        credentials: false
    },
    allowEIO3: true
});

const video_endpoint = new Server(video_server, {
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

tello.setStatusSocket(io_endpoint.sockets, 'dronestate');
tello.setVideoEndpoint(video_endpoint);

io_endpoint.on('connection', socket => {
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
video_server.listen(config.backend.VIDEO_STREAMING_SERVER_PORT, () => {
    console.log('Socket IO server up and running.');
})
/*
const Vcap = new cv2.VideoCapture(config.backend.drone.VIDEO_ENDPOINT, cv2.CAP_FFMPEG);
Vcap.set(cv2.CAP_PROP_FRAME_WIDTH, 300);
Vcap.set(cv2.CAP_PROP_FRAME_HEIGHT, 300);

setInterval(() => {
    const frame = Vcap.read();
    const image = cv2.imencode('.jpg', frame).toString('base64');
    video_endpoint.emit('image', image);
}, 1000 / FPS);*/

//---- stream server details -- //



app.use(bodyParser.json());
app.use(
    bodyParser.urlencoded({
        extended: true,
    })
);

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://localhost:7777");
    //res.header("Access-Control-Allow-Origin", "*");
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept, X-CSRF-Token"
    );
    res.header("Access-Control-Allow-Methods", "OPTIONS, GET, POST");
    res.header("Access-Control-Allow-Credentials", "true");
    next();
});

app.listen(config.backend.DATA_PORT, () => {
    console.log(`Example app listening on port ${config.backend.DATA_PORT}`)
})

app.get("/api/info/get", (req, res) => {
    res.send(tello.getInfo());
});
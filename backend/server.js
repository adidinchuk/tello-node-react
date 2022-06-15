const express = require("express");
const http = require('http');
const bodyParser = require('body-parser');
const { Server } = require("socket.io");

const Drone = require("./drone/tello");
const config = require('../config')

const app = express();
const IOServer = http.createServer(app);
const videoServer = http.createServer(app);


const socketConfig = {
    cors: { origin: "*", methods: ["GET", "POST"], credentials: false },
    allowEIO3: true
};

const IOEndpoint = new Server(IOServer, socketConfig);
const videoEndpoint = new Server(videoServer, socketConfig);

drone = new Drone(
    config.backend.drone.COMMAND_PORT,
    config.backend.drone.STATUS_PORT,
    config.backend.drone.HOST,
    config.backend.drone.VIDEO_ENDPOINT,
    config.backend.SERVER_HOST + ':' + config.backend.VIDEO_STREAMING_SERVER_PORT
);

drone.setStatusSocket(IOEndpoint, 'dronestate');
drone.setVideoEndpoint(videoEndpoint);

IOServer.listen(config.backend.IO_SERVER_PORT, () => {
    console.log(`IO socket server up and running on port ${config.backend.IO_SERVER_PORT}...`);
})
videoServer.listen(config.backend.VIDEO_STREAMING_SERVER_PORT, () => {
    console.log(`Video socket server up and running on port ${config.backend.VIDEO_STREAMING_SERVER_PORT} ...`);
})

app.use(bodyParser.json());
app.use( bodyParser.urlencoded({ extended: true, }) );

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
    console.log(`Data API server up and running on port ${config.backend.DATA_PORT}...`)
})

app.get("/api/info/get", (req, res) => {
    res.send(drone.getInfo());
});
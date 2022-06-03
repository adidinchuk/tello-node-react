module.exports = {
    backend: {
        drone: {
            COMMAND_PORT: "8889",
            STATUS_PORT: "8890",
            VIDEO_ENDPOINT: "udp://0.0.0.0:11111",
            HOST: "192.168.10.1"
        },
        IO_SERVER_PORT: 6767,
        SERVER_HOST: 'http://192.168.0.17',
        VIDEO_STREAMING_SERVER_HOST: 'ws://192.168.0.17',
        VIDEO_STREAMING_SERVER_PORT : 3001
    },
    frontend : {
        
    }
};
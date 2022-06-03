
import io from 'socket.io-client';
import config from '../config';

const socket = io(config.backend.SERVER_HOST + ':' + config.backend.IO_SERVER_PORT, {
    withCredentials: false,
});

export default socket;
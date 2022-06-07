import socket from '../socket';
import { useEffect, useState } from 'react';

var Drone = (function () {

    var state = "";
    var socketState = false;

    var getState = function () {
        return state;    
    };

    var setState = function (data) {
        state = data;
    };

    var openSocket = function () {
        if (!socketState) {
            socket.on('dronestate', (data) => {
                state = data
            });
            socketState = true;
        }
    }

    function openDroneStateSocket() {
        const [dronestate, updateDronestate] = useState({});
        useEffect(() => {
            socket.on('dronestate', updateDronestate);
        }, []);
        return dronestate;

    }

    function openStatusSocket() {
        const [status, updateStatus] = useState(false);
        useEffect(() => {
            socket.on('status', updateStatus);
        }, []);
        return status;
    }

    var getSignalStrength = function () {
        return 0;
    }
    var getSpeed = function () {
        return 0;
    }

    return {
        getState: getState,
        setState: setState,
        openSocket: openSocket,
        getSignalStrength, getSignalStrength,
        getSpeed, getSpeed,
        openDroneStateSocket, openDroneStateSocket,
        openStatusSocket, openStatusSocket
    }

})();

export default Drone;
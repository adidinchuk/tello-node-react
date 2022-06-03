import socket from '../socket'
import { useEffect, useState } from 'react';

import Drone from '../Objects/Drone'


const DroneState = () => {
    const state = Drone.openStatusSocket();
    const dronestate = Drone.openDroneStateSocket();
    Drone.setState(dronestate);
    console.log(Drone.getState());
    return (

        <div>
            <div>
                <p>x : {Drone.getState().agx  != null ? Drone.getState().agx : 'N/A'} </p>
                <p>y : {Drone.getState().agy} </p>
                <p>z : {Drone.getState().agz} </p>
            </div>
            <p>State : {state} </p>
            <p>Height : {dronestate.h} </p>
            <p>State : {dronestate.bat} </p>
        </div>
    );
}

export default DroneState;
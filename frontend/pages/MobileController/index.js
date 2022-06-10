import config from '../../../config';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import { useEffect, useState } from 'react';
import socket from '../../socket';
import { Joystick } from 'react-joystick-component';
import Box from '@mui/material/Box'

import Drone from '../../objects/Drone'

function commandButton(command, data) {
    return function () {
        console.log(`Sending the command ${command}`);
        socket.emit('command', { command: command, data: data });
    };
}




const IndexPage = () => {

    const state = Drone.openDroneStateSocket();

    function takeoff() {
        console.log(state.tof >= 10);
        return function () {
            if (state.tof > 10) {
                socket.emit('command', { command: 'land' });
            } else {
                socket.emit('command', { command: 'takeoff' });
            }
        };

    }

    const [leftJoystickTarget, updateLeftJoystickTarget] = useState({ x: 0, y: 0 });
    const [rightJoystickTarget, updateRightJoystickTarget] = useState({ x: 0, y: 0 });

    useEffect(() => {
        sendCommand('rc', generateRCData());
    }, [leftJoystickTarget])

    useEffect(() => {
        sendCommand('rc', generateRCData());
    }, [rightJoystickTarget])

    function sendCommand(command, data) { socket.emit('command', { command: command, data: data }); }

    function handleLeftJoystickStop() { updateLeftJoystickTarget({ x: 0, y: 0 }); }

    function handleRightJoystickStop() { updateRightJoystickTarget({ x: 0, y: 0 }); }

    function generateRCData() {
        return {
            a: Math.round(rightJoystickTarget.x),
            b: Math.round(rightJoystickTarget.y),
            c: Math.round(leftJoystickTarget.y),
            d: Math.round(leftJoystickTarget.x)
        }
    }

    return (
        <Grid container justify="center" columns={{ xs: 2, sm: 4, md: 12 }} className="mobile-grid">
            <Grid item xs={12} sm={12} sx={{ height: '40px' }}>
                <Button variant="outlined" color="success" sx={{ width: '100%' }} onClick={takeoff()}>
                    LAND / LIFTOFF
                </Button>
            </Grid>
            <Grid item xs={0} sm={2} md={6}>
                <Box display="flex" justifyContent="center" alignItems="center">
                    <div className='mobile-joystick'>
                        <Joystick size={180} sticky={false} minDistance={40} throttle={400} baseImage="/joystickOrient.png" stickImage="/joystickHead.png" move={updateLeftJoystickTarget} stop={handleLeftJoystickStop} ></Joystick>
                    </div>
                </Box>
            </Grid>
            <Grid item xs={0} sm={2} md={6}>
                <Box display="flex" justifyContent="center" alignItems="center" >
                    <div className='mobile-joystick'>
                        <Joystick size={180} className="joystick" sticky={false} minDistance={20} throttle={400} stickImage="/joystickHead.png" baseImage="/joystickMove.png" move={updateRightJoystickTarget} stop={handleRightJoystickStop}></Joystick>
                    </div>
                </Box>
            </Grid>
            <Grid item xs={12} sm={12} md={12} sx={{ height: '40px' }}>
                <Button variant="outlined" color="error" sx={{ width: '100%' }} onClick={commandButton('emergency')}>
                    EMERGENCY
                </Button>
            </Grid>
        </Grid>
    );
}

export default IndexPage;
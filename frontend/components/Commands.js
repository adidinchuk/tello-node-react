import socket from '../socket';
import { Joystick } from 'react-joystick-component';
import { useEffect, useState, useRef } from 'react';
import { common } from '@mui/material/colors';
import Button from '@mui/material/Button';

function commandButton(command, data) {
    return function () {
        console.log(`Sending the command ${command}`);
        socket.emit('command', { command: command, data: data });
    };
}

const Commands = () => {

    const [leftJoystickTarget, updateLeftJoystickTarget] = useState({ x: 0, y: 0 });
    const [rightJoystickTarget, updateRightJoystickTarget] = useState({ x: 0, y: 0 }); 

    useEffect(() => {
        sendCommand('rc', generateRCData());       
    }, [leftJoystickTarget])

    useEffect(() => {
        sendCommand('rc', generateRCData());       
    }, [rightJoystickTarget])

    function sendCommand(command, data) {
        console.log(`Sending the command ${command}, ` + data.x + ': ' + data.y);
        socket.emit('command', { command: command, data: data });
    }

    function handleLeftJoystickStop(data) {
        updateLeftJoystickTarget({ x: 0, y: 0 });
       // sendCommand('rc', generateRCData());    
        //sendCommand('forward', 20 );        
    }

    function handleRightJoystickStop(data) {
        updateRightJoystickTarget({ x: 0, y: 0 });     
    }


    function generateRCData() {
        return {
            a: Math.round(rightJoystickTarget.x),
            b: Math.round(rightJoystickTarget.y),
            c: -Math.round(leftJoystickTarget.y), d: Math.round(leftJoystickTarget.x)
        }
    }
    

    return (
        <div>
            <Button variant="contained" onClick={commandButton('command')}>command</Button>
            <button onClick={commandButton('takeoff')}>liftoff</button>
            <button onClick={commandButton('land')}>land</button>
            <br />
            <button onClick={commandButton('down', 20)}>down</button>
            <button onClick={commandButton('up', 20)}>up</button>
            <br />
            <button onClick={commandButton('left', 20)}>left</button>
            <button onClick={commandButton('right', 20)}>right</button>
            <br />
            <button onClick={commandButton('forward', 20)}>forward</button>
            <button onClick={commandButton('back', 20)}>back</button>
            <br />
            <button onClick={commandButton('cw', 15)}>CW</button>
            <button onClick={commandButton('ccw', 15)}>CCW</button>
            <br />
            <button onClick={commandButton('streamon')}>streamon</button>
            <button onClick={commandButton('streamoff')}>streamoff</button>

            <Button variant="contained"  onClick={commandButton('emergency')}>emergency</Button>

            <button onClick={commandButton('go', { x: 100, y: 100, z: 0, speed: 40 })}>g</button>

            <Joystick size={125} sticky={false} minDistance={40} throttle={400} baseColor="#d3d3d3" stickColor="#b1a7a6" move={updateLeftJoystickTarget} stop={handleLeftJoystickStop} ></Joystick>
            <Joystick size={125} sticky={false} minDistance={20} throttle={400} baseColor="#FFEF82" stickColor="#EFD345" move={updateRightJoystickTarget} stop={handleRightJoystickStop}></Joystick>
        </div>
    );
}

export default Commands;
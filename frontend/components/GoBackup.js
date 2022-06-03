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

    const [goTarget, updateGoTarget] = useState({ x: 0, y: 0, z: 0, speed: 20 });
    const [goJoystickState, updateGoJoystickState] = useState(false);
    const [orientationTarget, updateOrientTarget] = useState(null);
    const [timeout, updateTimeout] = useState(undefined);

    const goTargetRef = useRef(goTarget);
    

    useEffect(() => {
        goTargetRef.current = goTarget;        
    }, [goTarget])

    var delay = 500;

    function sendCommand(command, data) {
        console.log(`Sending the command ${command}, ` + data.x + ': ' + data.y);
        socket.emit('command', { command: command, data: data });
    }

    function handleStop(data) {
        clearTimeout(timeout)
        
    }

    function handleGoStart(data) { 
        updateTimeout(setTimeout(() => {
            goLoop();
        }, 201));
    }

    function handleOrientationStart(data) {  }

    function goLoop() {
        var target = goTargetRef.current;
        //if (Math.abs(target.y) > 10 || Math.abs(target.x) > 10)
        sendCommand('rc', generateRCData(target));

        updateTimeout(setTimeout(() => {
            goLoop();
        }, delay));

    }



    function generateGoData(target) {
        console.log(target)
        var scalFactor =
            Math.abs(target.y) > Math.abs(target.x) ?
                (10) / Math.abs(target.y) : (10) / Math.abs(target.x);

        return {
            x: Math.round(scalFactor * target.y) * 0.2,
            y: -Math.round(scalFactor * target.x) * 0.2,
            z: 0, speed: 70
        }
    }

    function generateRCData(target) {
        console.log(target)
        var scalFactor =
            Math.abs(target.y) > Math.abs(target.x) ?
                (10) / Math.abs(target.y) : (10) / Math.abs(target.x);

        return {
            a: Math.round(scalFactor * target.y),
            b: -Math.round(scalFactor * target.x),
            c: 0, d: 0
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
            <Joystick size={125} sticky={false} minDistance={40}  throttle={200} baseColor="#d3d3d3" stickColor="#b1a7a6" move={updateGoTarget} stop={handleStop} start={handleGoStart}></Joystick>
            <Joystick size={100} sticky={false} minDistance={20} baseImage="https://t1.daumcdn.net/cfile/tistory/998F5E475EF0C1AB0A" stickImage="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Ft1.daumcdn.net%2Fcfile%2Ftistory%2F99F398475EF0C1AB31" throttle={500}  move={updateOrientTarget} stop={handleStop} start={handleOrientationStart}></Joystick>
        </div>
    );
}

export default Commands;
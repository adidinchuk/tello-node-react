import VideoStream from '../../components/VideoStream';
import config from '../../../config';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import { useEffect, useState } from 'react';
import socket from '../../socket';
import { Joystick } from 'react-joystick-component';
import StatusBar from '../../components/StatusBar';

const resolutionRatio = 1.78;
const padding = 24;
const videoOptions = {
};

const videoOverlayOptions = {};


const IndexPage = () => {

    const [leftJoystickTarget, updateLeftJoystickTarget] = useState({ x: 0, y: 0 });
    const [rightJoystickTarget, updateRightJoystickTarget] = useState({ x: 0, y: 0 });
    const [windowDimension, detectHW] = useState(null);





    function detectSize() {

        if (typeof window !== 'undefined')
            detectHW({ width: window.innerWidth, height: window.innerHeight, })
    }


    useEffect(() => {
        //console.log('here')
        // make sure your function is being called in client side only            
        // detect window screen width function
        if (windowDimension == null)
            detectSize();
        window.addEventListener('resize', detectSize)
        console.log(windowDimension);
        //console.log({winWidth: window.innerWidth, winHeight: window.innerHeight})
        return () => {
            window.removeEventListener('resize', detectSize)

        }

    }, [windowDimension])

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
                <div>
                    <Grid container spacing={0}>

                        
                            <div className='video'>
                                <VideoStream
                                    wrapperClassName="video-wrapper"
                                    height={windowDimension == null ? null : Math.min(windowDimension.height, (windowDimension.width- (2*padding)) / resolutionRatio) + "px"}
                                    width={windowDimension == null ? null : Math.min(windowDimension.width - (2*padding), (windowDimension.height * resolutionRatio)) + "px"}
                                    videoUrl={config.backend.VIDEO_STREAMING_SERVER_HOST + ':' + config.backend.VIDEO_STREAMING_SERVER_PORT}
                                    options={videoOptions}
                                    overlayOptions={videoOverlayOptions}
                                />
                            </div>
                      
                      
                    </Grid>
                    <StatusBar/>
                    </div>
               );
        /*
            return (
                <div>
                    <Grid container spacing={0}>
                        <Grid item xs={2}>
                            <div className='joystick'>
                                <Joystick sticky={false} minDistance={40} throttle={400} baseColor="#d3d3d3" stickColor="#b1a7a6" move={updateLeftJoystickTarget} stop={handleLeftJoystickStop} ></Joystick>
                            </div>
                        </Grid>
                        <Grid item xs={8}>
                            <div className='video'>
                                <VideoStream
                                    wrapperClassName="video-wrapper"
                                    height={windowDimension == null ? null : Math.min(windowDimension.height, ((windowDimension.width  * 8 / 12) / resolutionRatio)  - (2*padding)) + "px"}
                                    width={windowDimension == null ? null : Math.min((windowDimension.width * (8 / 12)) - (2*padding), (windowDimension.height * resolutionRatio)) + "px"}
                                    videoUrl={config.backend.VIDEO_STREAMING_SERVER_HOST + ':' + config.backend.VIDEO_STREAMING_SERVER_PORT}
                                    options={videoOptions}
                                    overlayOptions={videoOverlayOptions}
                                />
                            </div>
                        </Grid>
                        <Grid item xs={2}>
                            <div className='joystick'>
                                <Joystick className="joystick" sticky={false} minDistance={20} throttle={400} baseColor="#FFEF82" stickColor="#EFD345" move={updateRightJoystickTarget} stop={handleRightJoystickStop}></Joystick>
                            </div>

                        </Grid>
                    </Grid>
                </div>);
      */

}

export default IndexPage;
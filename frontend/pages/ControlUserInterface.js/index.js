import VideoStreamFrame from '../../components/VideoStreamFrame';
import config from '../../../config';
import Grid from '@mui/material/Grid';
import { useEffect, useState } from 'react';
import StatusBar from '../../components/StatusBar';
import io from 'socket.io-client';

const resolutionRatio = 1.33333;
const padding = 24;

const videoOverlayOptions = {};


const IndexPage = () => {

    const [windowDimension, detectHW] = useState(null);

    function detectSize() {
        if (typeof window !== 'undefined')
            detectHW({ width: window.innerWidth, height: window.innerHeight, })
    }

    useEffect(() => {
        if (windowDimension == null)
            detectSize();
        window.addEventListener('resize', detectSize)
        return () => {
            window.removeEventListener('resize', detectSize)
        }
    }, [windowDimension])

    return (
        <div>
            <Grid container spacing={0}>
                <div className='video'>

                    <VideoStreamFrame
                        wrapperClassName="video-wrapper"
                        height={windowDimension == null ? null : Math.min(windowDimension.height, (windowDimension.width - (2 * padding)) / resolutionRatio) + "px"}
                        width={windowDimension == null ? null : Math.min(windowDimension.width - (2 * padding), (windowDimension.height * resolutionRatio)) + "px"}                        
                        socket={io.connect(config.backend.SERVER_HOST + ':' + config.backend.VIDEO_STREAMING_SERVER_PORT, {
                            withCredentials: false,
                        })}
                    />
                </div>
            </Grid>
            <StatusBar />
        </div>
    );

}

export default IndexPage;
import VideoStream from '../../components/VideoStream';
import config from '../../../config';
import Grid from '@mui/material/Grid';
import { useEffect, useState } from 'react';
import StatusBar from '../../components/StatusBar';

const resolutionRatio = 1.78;
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
                    <VideoStream
                        wrapperClassName="video-wrapper"
                        height={windowDimension == null ? null : Math.min(windowDimension.height, (windowDimension.width - (2 * padding)) / resolutionRatio) + "px"}
                        width={windowDimension == null ? null : Math.min(windowDimension.width - (2 * padding), (windowDimension.height * resolutionRatio)) + "px"}
                        videoUrl={config.backend.VIDEO_STREAMING_SERVER_HOST + ':' + config.backend.VIDEO_STREAMING_SERVER_PORT}
                        options={{}}
                        overlayOptions={videoOverlayOptions}
                    />
                </div>
            </Grid>
            <StatusBar />
        </div>
    );

}

export default IndexPage;
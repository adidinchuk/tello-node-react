import VideoStreamFrame from '../../components/VideoStreamFrame';
import config from '../../../config';
import Grid from '@mui/material/Grid';
import StatusBar from '../../components/StatusBar';
import io from 'socket.io-client';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import NavigationIcon from '@mui/icons-material/Navigation';
import PersonIcon from '@mui/icons-material/Person';
import PeopleIcon from '@mui/icons-material/People';
import { useEffect, useState, useRef, useContext } from 'react';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import Paper from '@mui/material/Paper';
import Drone from '../../objects/Drone';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Divider from '@mui/material/Divider';
import Button from '@mui/material/Button';
import { SocketManager } from '../../components/SocketManager';

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
                        abs={windowDimension == null ? null : windowDimension.height}
                        height={windowDimension == null ? null : Math.min(windowDimension.height, (windowDimension.width - (2 * padding)) / resolutionRatio)}
                        width={windowDimension == null ? null : Math.min(windowDimension.width - (2 * padding), (windowDimension.height * resolutionRatio))}
                        socket={io.connect(config.backend.SERVER_HOST + ':' + config.backend.VIDEO_STREAMING_SERVER_PORT, {
                            withCredentials: false,
                        })}
                    />
                </div>
            </Grid>
           <SocketManager><StatusBar/></SocketManager>
        </div>
    );

}

export default IndexPage;
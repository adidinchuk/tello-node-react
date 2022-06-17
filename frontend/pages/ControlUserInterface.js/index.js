import VideoStreamFrame from '../../components/VideoStreamFrame';
import config from '../../../config';
import Grid from '@mui/material/Grid';
import { useEffect, useState } from 'react';
import StatusBar from '../../components/StatusBar';
import io from 'socket.io-client';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import NavigationIcon from '@mui/icons-material/Navigation';
import PersonIcon from '@mui/icons-material/Person';
import PeopleIcon from '@mui/icons-material/People';

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
const resolutionRatio = 1.33333;
const padding = 24;

const videoOverlayOptions = {};

const IndexPage = () => {

    const state = Drone.openDroneStateSocket();    
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

            <Card sx={{ minWidth: 275 }} className="float-FAB-div">
                <CardContent>


                    <Box sx={{ flexGrow: 1 }}>
                        <Grid container spacing={2}>
                            <Grid item xs={8}>
                                <FormControlLabel control={<Switch />} label="Follow" />
                            </Grid>
                            <Grid item xs={4}>
                                <PersonIcon sx={{ mr: 0 }} className="FAB-icons" />
                            </Grid>
                            <Grid item xs={8}>
                                <FormControlLabel control={<Switch />} label="Follow" />
                            </Grid>
                            <Grid item xs={4}>
                                <PeopleIcon sx={{ mr: 0 }} className="FAB-icons" />
                            </Grid>
                        </Grid>
                    </Box>
                    <Divider />

                    <div>
                        <Button className='FAB-button' variant="outlined" color="success">{'land'}</Button>

                    </div>


                </CardContent>
            </Card>


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
            <StatusBar />
        </div>
    );

}

export default IndexPage;
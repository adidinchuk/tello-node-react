
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Drone from '../objects/Drone'
import { useEffect, useState, useRef } from 'react';
import BatteryCharging90Icon from '@material-ui/icons/BatteryCharging90';
//import ThermostatIcon from '@material-ui/icons/Thermostat';
import ThermostatIcon from '@mui/icons-material/Thermostat';
import SignalWifi3BarIcon from '@mui/icons-material/SignalWifi3Bar';
import SpeedIcon from '@mui/icons-material/Speed';
import TimerIcon from '@mui/icons-material/Timer';
import HeightIcon from '@mui/icons-material/Height';
import Grid from '@mui/material/Grid';
import useSWR from 'swr'
import axios from 'axios';
import config from '../../config';

const StatusBar = () => {

  const state = Drone.openDroneStateSocket();
  const [droneInfo, updateDroneInfo] = useState({wifi: null, speed: null});

  const address = config.backend.SERVER_HOST + ':' + config.backend.DATA_PORT + '/api/info/get';
  const fetcher = async (url) => await axios.get(url).then((res) => {res.data, updateDroneInfo(res.data)});
  const { data, error } = useSWR(address, fetcher);


  return (
    <Box sx={{ flexGrow: 1 }} style={{ color: "gray", position: "fixed", bottom: 0, width: "100%" }}>
      <AppBar position="sticky" color="inherit" className="test">
        <Toolbar variant="regular">
          <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 12, sm: 12, md: 12 }}>

              <Grid item xs={2} sm={2} md={2} >
                <Typography variant="h6" color="inherit" component="div">
                  <BatteryCharging90Icon className="ui-icons" /> {state.bat != null ? state.bat + ' %' : 'N/A'}
                </Typography>
              </Grid>
              <Grid item xs={2} sm={2} md={2} >

                <Typography variant="h6" color="inherit" component="div">
                  <ThermostatIcon className="ui-icons" /> {state.temph != null ? state.temph + ' C' : 'N/A'}
                </Typography>
              </Grid>
              <Grid item xs={2} sm={2} md={2} >


                <Typography variant="h6" color="inherit" component="div">
                  <SignalWifi3BarIcon className="ui-icons" />  {droneInfo.wifi != null ? droneInfo.wifi + ' dB' : 'N/A'}
                </Typography>

              </Grid>
              <Grid item xs={2} sm={2} md={2} >


                <Typography variant="h6" color="inherit" component="div">
                  <SpeedIcon className="ui-icons" />  {droneInfo.speed != null ? droneInfo.speed + ' cm/s' : 'N/A'}
                </Typography>
              </Grid>
              <Grid item xs={2} sm={2} md={2} >



                <Typography variant="h6" color="inherit" component="div">
                  <TimerIcon className="ui-icons" />  {state.time != null ? state.time + ' s' : 'N/A'}
                </Typography>
              </Grid>
              <Grid item xs={2} sm={2} md={2} >


                <Typography variant="h6" color="inherit" component="div">
                  <HeightIcon className="ui-icons" />  {state.tof != undefined ? state.tof + ' cm' : 'N/A'}
                </Typography>
              </Grid>

            </Grid>
          </Box>






        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default StatusBar;




import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Drone from '../objects/Drone'
import { useEffect, useState, useRef, useContext } from 'react';
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
import { SocketContext } from './SocketManager';
import socket from '../socket';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

import Chip from '@mui/material/Chip';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import Paper from '@mui/material/Paper';
import NavigationIcon from '@mui/icons-material/Navigation';
import PersonIcon from '@mui/icons-material/Person';
import PeopleIcon from '@mui/icons-material/People';


import Divider from '@mui/material/Divider';
import Button from '@mui/material/Button';
import { ElectricalServices } from '@mui/icons-material';

const StatusBar = (props) => {
  const state = useContext(SocketContext).data;
  const landLiftoff = state.tof > 10 ? 'land' : 'liftoff';
  const [connectedState, updateConnectedState] = useState(false);
  let interval = null;

  function takeoff() {

    return function () {
      if (state.tof > 10) {
        socket.emit('command', { command: 'land' });
      } else {
        socket.emit('command', { command: 'takeoff' });
      }
    };
  }

  function emergency() {

    return function () {
      socket.emit('command', { command: 'emergency' });
    };
  }

  useEffect(() => {
   
    
    if (state.timestamp != undefined)
      updateConnectedState(true);

    interval = setTimeout(() => {
      updateConnectedState(false);
    }, 1500);

    return () => {
      clearTimeout(interval)
    }
  }, [state]);


  return (
    <div>
      <Card sx={{ minWidth: 275 }} className="float-FAB-div">
        <CardContent>
          <Chip
            label={connectedState ? 'CONNECTED' : 'NOT CONNECTED'}
            className="notification-chip"
            color={connectedState ? 'success' : 'error'} />
          <Divider />
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
            <Button className='FAB-button' variant="outlined" color="success" onClick={takeoff()} disabled={!connectedState}>{landLiftoff}</Button>
            <Button className='FAB-button' variant="outlined" color="error" onClick={emergency()} variant="contained" disabled={!connectedState}>{'emergency stop'}</Button>
          </div>

        </CardContent>
      </Card>
      <Box sx={{ flexGrow: 1 }} style={{ color: "gray", position: "fixed", bottom: 0, width: "100%" }}>
        <AppBar position="sticky" color="inherit" className="status-bar">
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
                    <SignalWifi3BarIcon className="ui-icons" />  {state.other != null ? state.other.wifi + ' dB' : 'N/A'}
                  </Typography>

                </Grid>
                <Grid item xs={2} sm={2} md={2} >


                  <Typography variant="h6" color="inherit" component="div">
                    <SpeedIcon className="ui-icons" />  {state.other != null ? state.other.speed + ' cm/s' : 'N/A'}
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
    </div>
  );
}

export default StatusBar;



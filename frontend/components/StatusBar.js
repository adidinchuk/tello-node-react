
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Drone from '../Objects/Drone'
import { useEffect, useState, useRef } from 'react';
import BatteryCharging90Icon from '@material-ui/icons/BatteryCharging90';
//import ThermostatIcon from '@material-ui/icons/Thermostat';
import ThermostatIcon from '@mui/icons-material/Thermostat';
import SignalWifi3BarIcon from '@mui/icons-material/SignalWifi3Bar';
import SpeedIcon from '@mui/icons-material/Speed';
import TimerIcon from '@mui/icons-material/Timer';
import HeightIcon from '@mui/icons-material/Height';
import Grid from '@mui/material/Grid';


const StatusBar = () => {

  const state = Drone.openDroneStateSocket();
  console.log(state)
  // const speed = getSpeed();
  // const signalStrength = getSignalStrength();

  const [droneSpeed, updateDroneSpeed] = useState(null);
  const [droneSignalStrength, updateDroneSignalStrength] = useState(null);




  return (
    <Box sx={{ flexGrow: 1 }} style={{ color: "gray", position: "fixed", bottom: 0, width: "100%" }}>
      <AppBar position="sticky" color="inherit" className="test">
        <Toolbar variant="regular">
          <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 12, sm: 12, md: 12 }}>

              <Grid item xs={2} sm={2} md={2} >
                <Typography variant="h6" color="inherit" component="div">
                  <BatteryCharging90Icon className="ui-icons" /> {state != null ? state.bat + ' %' : 'N/A'}
                </Typography>
              </Grid>
              <Grid item xs={2} sm={2} md={2} >

                <Typography variant="h6" color="inherit" component="div">
                  <ThermostatIcon className="ui-icons" /> {state != null ? state.temph + ' C' : 'N/A'}
                </Typography>
              </Grid>
              <Grid item xs={2} sm={2} md={2} >


                <Typography variant="h6" color="inherit" component="div">
                  <SignalWifi3BarIcon className="ui-icons" />  {droneSignalStrength != null ? droneSignalStrength + ' dB' : 'N/A'}
                </Typography>

              </Grid>
              <Grid item xs={2} sm={2} md={2} >


                <Typography variant="h6" color="inherit" component="div">
                  <SpeedIcon className="ui-icons" />  {droneSpeed != null ? droneSpeed + ' cm/s' : 'N/A'}
                </Typography>
              </Grid>
              <Grid item xs={2} sm={2} md={2} >



                <Typography variant="h6" color="inherit" component="div">
                  <TimerIcon className="ui-icons" />  {state != null ? state.time + ' s' : 'N/A'}
                </Typography>
              </Grid>
              <Grid item xs={2} sm={2} md={2} >


                <Typography variant="h6" color="inherit" component="div">
                  <HeightIcon className="ui-icons" />  {state != null ? state.tof + ' cm' : 'N/A'}
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



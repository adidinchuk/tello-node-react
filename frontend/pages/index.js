import Commands from '../components/Commands';
import DroneState from '../components/DroneState';
import VideoStream from '../components/VideoStream';
import ControlUserInterface from '../components/ControlUserInterface';
import config from '../../config';
import Link from 'next/link'


const videoOptions = {
};

const videoOverlayOptions = {};


const IndexPage = () => (
  <div className="wrapper">

      <DroneState />
      <Commands />
      <VideoStream
        wrapperClassName="video-wrapper"
        videoUrl={config.backend.VIDEO_STREAMING_SERVER_HOST + ':' + config.backend.VIDEO_STREAMING_SERVER_PORT}
        options={videoOptions}
        overlayOptions={videoOverlayOptions}
      />

  </div>
);

export default IndexPage;
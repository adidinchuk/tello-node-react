import React, { Component } from 'react';
import JSMpeg from '@cycjimmy/jsmpeg-player';
import { useEffect, useState, useRef } from 'react';

const VideoStreamFrame = (props) => {

    const [src, udpateSrc] = useState(null)

    props.socket.on('image', (image) => {
        // console.log('data', data);            
        udpateSrc(image);

    });

    return (

        <div
            className={props.wrapperClassName}
            style={{ height: props.height, width: props.width }}>
            <img src={`data:image/jpeg;base64,${src}`} style={{ height: props.height, width: props.width }}></img>
        </div>
    );


}

export default VideoStreamFrame;


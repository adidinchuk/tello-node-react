import React, { Component } from 'react';
import JSMpeg from '@cycjimmy/jsmpeg-player';
import { useEffect, useState, useRef } from 'react';

const VideoStreamFrame = (props) => {

    const [src, udpateSrc] = useState(null)

    props.socket.on('image', (image) => {
        // console.log('data', data);            
        udpateSrc(image);

    });

    let a = (props.height / props.abs) / 2;
    let b  = a + '%';

    return (
        <div>
            <img className='crosshair-image' src="http://pixelscommander.com/polygon/attitudeindicator/src//img/plane_mark.gif"
                style={{ width: props.width+ 'px', top: (props.height / props.abs) / .02 + '%'}} ></img>
               
            <div
                className={props.wrapperClassName}
                style={{ height: props.height + 'px', width: props.width + 'px' }}>
                <img src={`data:image/jpeg;base64,${src}`} style={{ height: props.height+ 'px', width: props.width+ 'px' }}></img>
            </div>
        </div>

    );


}

export default VideoStreamFrame;


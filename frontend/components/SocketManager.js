import socket from "../socket";
import React, { Component } from 'react';

export const SocketContext = React.createContext({
    data: { bat : null}
});

export const useWebsocket = () => React.useContext(SocketContext);

export class SocketManager extends React.Component {

    state = {
        data: { bat : null}
    }


    socket = null;

    constructor(props) {
        super(props);
        this.socket = socket;
      
        this.socket.on('dronestate', (payload) => {
            
            payload.timestamp = new Date();
           
            this.setState({
                data: payload
            });
        });
    }

    componentWillUnmount() {
        try {
            this.socket !== null && this.socket.disconnect();
        } catch (e) {
            // socket not connected
        }
    }

    render() {
        return (
            <SocketContext.Provider value={{
                data: this.state.data
            }}>
                {this.props.children}
            </SocketContext.Provider>
        );
    }

}
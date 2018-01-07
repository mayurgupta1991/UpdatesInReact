import React, { Component } from 'react';
import SimpleWebRTC from 'react-simplewebrtc';

export default class WebRtc extends Component {
    componentDidMount() {
        this.webrtc = new SimpleWebRTC({
            localVideoEl: this.localVideo,
            remoteVideosEl: "",
            autoRequestMedia: true,
            url : this.props.obj.signalmasterUrl
        });
        console.log("webrtc component mounted", this.webrtc);
    }

    render() {
        return (
            <div>
                <video ref={x => { this.localVideo = x }} />
            </div>
        );
    }
}



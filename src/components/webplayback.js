import React from "react";
import {CLIENT_ID} from '../config';
import List_playlists from "./list_playlists";

  

class WebPlayback extends React.Component{

    constructor(props){
        super(props);
        // console.log(this.props)

        this.state = {
            player: []
        }
    }

    componentDidMount(){

        const script = document.createElement("script");
        script.src = "https://sdk.scdn.co/spotify-player.js";
        script.async = true;
    
        document.body.appendChild(script);
    
        window.onSpotifyWebPlaybackSDKReady = () => {
    
            const player = new window.Spotify.Player({
                name: 'Web Playback SDK',
                getOAuthToken: cb => { cb(this.props.token); },
                volume: 0.5
            });

            console.log(player);
    
            this.setState({
                player : player
            })

    
            player.addListener('ready', ({ device_id }) => {
                console.log('Ready with Device ID', device_id);
            });
    
            player.addListener('not_ready', ({ device_id }) => {
                console.log('Device ID has gone offline', device_id);
            });
    
    
            player.connect();
    
        };
    }

    render(){
        return <>
           jhhbjhbhjgjhg
        </>;
    }
}

export default WebPlayback;
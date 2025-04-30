import React from "react";
import {CLIENT_ID} from '../config';
import List_playlists from "./list_playlists";
import SpotifyWebPlayer from "react-spotify-web-playback";
import { spotifyApi } from 'react-spotify-web-playback';

  

class WebPlayback extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            player: []
        }
    }

    componentDidMount(){        


    }

    render(){
        return(
            <>
                {this.props.music.offset}
                <SpotifyWebPlayer 
                token={this.props.token}
                uris={this.props.music.uris}
                offset={this.props.music.offset}
                play={(this.props.music.playStatus) ? this.props.music.playStatus : false} />
           </>)
        
    }
}

export default WebPlayback;
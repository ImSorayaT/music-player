import React from "react";
import {CLIENT_ID} from '../config';
import List_playlists from "./list_playlists";
import SpotifyWebPlayer from "react-spotify-web-playback";

  

class WebPlayback extends React.Component{

    constructor(props){
        super(props);
        console.log(this.props)

        this.state = {
            player: []
        }
    }

    componentDidMount(){        
        console.log(this.props.currentTrack);
    

    }

    render(){
        return(
            <>
                <SpotifyWebPlayer 
                token={this.props.token}
                uris={this.props.uris}
                offset={this.props.offset}
                play={(this.props.playStatus) ? this.props.playStatus : false} />
           </>)
        
    }
}

export default WebPlayback;
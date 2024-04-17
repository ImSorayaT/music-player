import React from "react";
import {CLIENT_ID} from '../config';
import List_playlists from "./list_playlists";
import WebPlayback from "./webplayback";

  

class LoggedIn extends React.Component{

    constructor(props){
        super(props);
        this.logout = this.logout.bind(this);
        this.changeTrackFunction = this.changeTrackFunction.bind(this);

        this.state = {
            currentTrack: '',
        }


    }

    changeTrackFunction(playlistTracks, offset){
        this.setState({
            'playlistTrack' : playlistTracks,
            'play' : true,
            'offset' : offset
        });
    }


    logout() {
        this.props.setToken("");
        window.localStorage.removeItem("token");
    };

    render(){
        console.log(this.state.playlistTrack);
        return <>
            <button onClick={this.logout}>Log out</button>
            <div id="playback-container">
                <WebPlayback 
                token={this.props.token} 
                playStatus={this.state.play}
                uris={this.state.playlistTrack}
                offset={this.state.offset}
                />
            </div>
            <List_playlists
                token={this.props.token} 
                currentTrack={this.state.currentTrack} 
                changeTrackFunction={this.changeTrackFunction}/>
        </>;
    }
}

export default LoggedIn;
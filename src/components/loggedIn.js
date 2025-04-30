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
            music: {
                'uris' : [],
                'play' : false,
                'offset' : ''
            }
        }


    }

    changeTrackFunction(playlistTracks, offset){
        this.setState(prevState => {
            let newState = Object.assign({}, prevState);
            newState.music = {
                uris : playlistTracks,
                play: true,
                offset: offset
            };

            return newState
        });
    }


    logout() {
        this.props.setToken("");
        window.localStorage.removeItem("token");
    };

    render(){
        return <>
            <button onClick={this.logout}>Log out</button>
            <div id="playback-container">
                <WebPlayback 
                token={this.props.token}
                music={this.state.music}
                />
            </div>
            <List_playlists
                token={this.props.token} 
                changeTrackFunction={this.changeTrackFunction}/>
        </>;
    }
}

export default LoggedIn;
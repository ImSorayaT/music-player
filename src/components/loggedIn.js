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
            <div className={'py-2 bg-[#333] mb-8 px-10'}>
                <button onClick={this.logout}>Log out</button>
            </div>

            <div className={'flex flex-row-reverse justify-between gap-[40px] px-10'}>
                <div id="playback-container" className={'w-[420px]'}>
                    <WebPlayback
                    token={this.props.token}
                    music={this.state.music}
                    />
                </div>
                <List_playlists
                    token={this.props.token}
                    changeTrackFunction={this.changeTrackFunction}/>
            </div>
        </>;
    }
}

export default LoggedIn;
import React from "react";
import {CLIENT_ID} from '../config';
import List_playlists from "./list_playlists";
import WebPlayback from "./webplayback";

  

class LoggedIn extends React.Component{

    constructor(props){
        super(props);
        this.logout = this.logout.bind(this);
    }


    logout() {
        this.props.setToken("");
        window.localStorage.removeItem("token");
    };

    render(){
        return <>
            <button onClick={this.logout}>Log out</button>
            <WebPlayback token={this.props.token}/>
            <List_playlists token={this.props.token} />
        </>;
    }
}

export default LoggedIn;
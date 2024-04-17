import React from "react";
import {CLIENT_ID} from '../config';

const authEndpoint = "https://accounts.spotify.com/authorize";
const redirectUri = "http://localhost:3000/";
const scopes = [
    "streaming",
    "user-read-email",
    "user-read-private",
    "playlist-read-private",
    "user-read-playback-state",
    "user-modify-playback-state",
    "user-read-playback-state"
];


export const loginUrl = `${authEndpoint}?client_id=${CLIENT_ID}&response_type=token&redirect_uri=${redirectUri}&scope=${scopes.join(
    "%20"
  )}`;
  

class Login extends React.Component{
    render(){
        return <a href={loginUrl}>Log in to spotify</a>;
    }
}

export default Login;
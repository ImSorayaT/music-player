import React from "react";
import {CLIENT_ID} from '../config';
import { useEffect, useState } from 'react';
  

class List_playlist_items extends React.Component{
    constructor(props){
        super(props);
        console.log(this.props)

        this.state = {
            tracks: []
        }
    }

    componentDidMount(){
       
        
        var authParams = {
            headers: {
              'Authorization': 'Bearer ' + this.props.token
            }
        }

       let results = [];

        fetch('https://api.spotify.com/v1/playlists/'+this.props.playlist_id+'/tracks', authParams)
        .then(result => result.json())
        .then(data => {
            console.log(data);
            if(!data.status){
                this.setState({
                    tracks : data.items
                })
            }
        });
        
    }

    render(){
        return (
            <>
                {this.state.tracks === undefined ? 'something wrong with the request. Check logs' : 
                    <ul>
                        {this.state.tracks.map((track, index) => {

                            return(
                                <li key={index}>
                                    {track.track.name}
                                            
                                </li>
                            )
                        })
                        }
                    </ul>
                }
            </>
        )
    }
}

export default List_playlist_items;
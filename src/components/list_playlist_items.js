import React from "react";
import {CLIENT_ID} from '../config';
import { useEffect, useState } from 'react';
import SpotifyWebPlayer from "react-spotify-web-playback";
import {millisToMinutesAndSeconds} from '../hooks/tracks'

  

class ListPlaylistItems extends React.Component{
    constructor(props){
        super(props);
        // console.log(this.props)
        this.changeTrackFunction = this.props.changeTrackFunction.bind(this);

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
            if(!data.status){
                let playlistTracks = [];
                // console.log(data.items);
                
                data.items.forEach((item, index) => {
                    playlistTracks.push(item.track.uri);
                });

                this.setState({
                    tracks : data.items,
                    playlistTracks : playlistTracks
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
                                <li key={index} className="px-2 py-4 flex gap-4 border-b">
                                    <span className="block basis-[70px] shrink-0">
                                        <button  onClick = { () => {
                                            this.changeTrackFunction(this.state.playlistTracks, index);
                                        }}>
                                            Play
                                        </button>
                                        {index + 1}
                                    </span> 
                                    <span className="block basis-[50%]">{track.track.name}</span>
                                    <span className="block basis-full">{track.track.artists[0].name}</span>
                                    <span className="block basis-auto">{ millisToMinutesAndSeconds(track.track.duration_ms)}</span>

                                            
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

export default ListPlaylistItems;
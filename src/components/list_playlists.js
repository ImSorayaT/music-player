import React from "react";
import {CLIENT_ID} from '../config';
import { useEffect, useState } from 'react';
import ListPlaylistItems from './list_playlist_items';

class List_playlists extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            result: [],
        }

        
    }

    componentDidMount(){
        var authParams = {
            headers: {
              'Authorization': 'Bearer ' + this.props.token
            }
        }

       

        fetch('https://api.spotify.com/v1/me/playlists', authParams)
        .then(result => result.json())
        .then(data => {

            let results = null;

            if(!data['error']){
                
               results = data.items
            }else{
                
                results = data['error']
            }

            this.setState({
                result : results
            })
        });
        
    }

    render(){        
        return (
            <div className="w-full bg-black/20 overflow-hidden backdrop-blur-3xl p-6  h-[90vh] rounded-md">
                <div className="w-full overflow-scroll h-screen">
                    {this.state.result.status ? this.state.result.message : 
                        <ul className={'list-none space-y-12'}>
                            {this.state.result.map(
                                (playlist, index) => {
                                    return(
                                        <li key={index}>
                                            <div className="flex gap-6 mb-2">
                                                <img className="w-[80px] aspect-square" src={playlist.images[0].url} alt='kmklmm' />
                                                <div>
                                                    <h2 className={'text-2xl'}>{playlist.name}</h2>
                                                    {playlist.tracks.total  } Tracks | {playlist.owner.display_name}
                                                </div>
                                            </div>
                                            <div className="ml-[100px] pl-1">
                                                <ListPlaylistItems playlist_id={playlist.id} 
                                                token={this.props.token} 
                                                changeTrackFunction={this.props.changeTrackFunction} />
                                            </div>
                                        </li>
                                    )
                                }
                            )}
                        </ul>
                    }
                </div>
            </div>
        );
    }
}

export default List_playlists;
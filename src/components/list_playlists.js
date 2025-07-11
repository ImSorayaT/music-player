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

        // console.log(this.state.result);
        
        return (
            <div>
                {this.state.result.status ? this.state.result.message : 
                    <ul className={'list-none space-y-5'}>
                        {this.state.result.map(
                            (playlist, index) => {
                                return(
                                    <li key={index}>
                                        <h2 className={'text-2xl'}>{playlist.name}</h2>
                                        <ListPlaylistItems playlist_id={playlist.id} 
                                            token={this.props.token} 
                                            changeTrackFunction={this.props.changeTrackFunction} />
                                    </li>
                                )
                            }
                        )}
                    </ul>
                }
            </div>
        );
    }
}

export default List_playlists;
import React, { Component } from "react";
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import Table from 'react-bootstrap/Table'


class MusicTable extends Component {
    constructor(props) {
        super(props);
        this.state = {
            songs: []
        }
    }
    componentDidMount(){
        this.getSongList();
    }

    async getSongList(){
        let response = await axios.get('http://127.0.0.1:8000/music/');
        this.setState({
            songs: response.data
        });
    }

    async deleteSong(songID){
        let response = await axios.delete('http://127.0.0.1:8000/music/' + songID);
        console.log(response);
        window.location.reload();
    }

    render(){
        return(
            <div className="row justify-content-center">
            {/* <hr/> */}
            <h2>All Songs:</h2>
            <table className="striped bordered hover variant=dark">
                <thead>
                    <th>Title</th>
                    <th>Artist</th>
                    <th>Album</th>
                    <th>Release Date</th>
                    <th>Genre</th>
                    <th>Liked:</th>
                </thead>
                {this.state.songs.map((song)=>{
                    return(
                        <tr>
                            <td>{song.title}</td>
                            <td>{song.artist}</td>
                            <td>{song.album}</td>
                            <td>{song.release_date}</td>
                            <td>{song.genre}</td>
                            <td>{song.liked}</td>
                            <td></td> 
                        </tr>  
                    );
                })}
            </table>
            </div>
         );
    }

}

export default MusicTable;
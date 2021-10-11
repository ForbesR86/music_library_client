import React, { Component } from 'react';
class SongForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            artist: '',
            album: '',
            release_date: '',
            genre: '',
            liked: false,
         }
    }

    handleChange = (event) => {

        this.setState({
            [event.target.name]: event.target.value
        });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.newSongData(this.state)
    }


    render() { 
        return ( 
            
            <form onSubmit={this.handleSubmit}>
                <label for="Title">Title:</label>
                <input name="title" onChange={this.handleChange} value={this.state.title} class="form-control" placeholder="Title"/>

                <label for="Artist">Artist:</label>
                <input name="artist" onChange={this.handleChange} value={this.state.artist} class="form-control" placeholder="Artist"/>

                <label for="Album">Album:</label>
                <input name="album" onChange={this.handleChange} value={this.state.album} class="form-control" placeholder="Album"/>

                <label for="release_date">Release Date:</label>
                <input name="release_date" type="date" onChange={this.handleChange} value={this.state.release_date} placeholder="release_date" />

                <div class="form-group">
                <label for="exampleSelect1" class="form-label mt-4">Genre:</label>
                    <select class="form-select" id="genre">
                        <option>Rock</option>
                        <option>Pop</option>
                        <option>Hip hop</option>
                        <option>Country</option>
                        <option>Jazz</option>
                        <option>Metal</option>
                        <option>Electronic</option>
                        <option>Classical</option>
                        <option>Punk</option>
                        <option>Other</option>
                    </select>
    </div>
                <label>Favorite Song?</label>
                <input name="liked" onChange={this.handleChange} value={this.state.liked} />
                <br></br>
                <button type="submit" class="btn btn-primary btn-lg">Add New Song</button>
            </form>
         );
    }
}
 
export default SongForm;
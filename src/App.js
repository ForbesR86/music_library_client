import axios from 'axios';
import React, {Component} from 'react';
import { BrowserRouter as Switch, Route, Router} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './bootstrap.min.css'
import history from './components/History/History'



import Titlebar from './components/Header/Header'
import Menu from './components/Menu/Menu'
import MusicTable from './components/MusicTable/MusicTable'
import SongForm from './components/SongForm/SongForm'
import EditSong from './components/EditSong/EditSong'
import Footer from './components/Footer/Footer'


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      songs: [],
      isLoading: true,
      singlesong:[]
    };
  };

  async componentDidMount() {
    
    axios.get('http://127.0.0.1:8000/music/')
      .then(res => {
        const musiclist = res.data;
        this.setState({
          songs: musiclist,
          isLoading: false
        })
      });
  }

  EditSong = (songId)=> {
    console.log(songId)
    this.GetSingleSong(songId)
  }

  GetSingleSong =(songId)=> {
    const baseURL = 'http://127.0.0.1:8000/music/' + songId + '/'
    console.log(baseURL)
    
    axios.get(baseURL)
      .then(res => {
        const musiclist = res.data;
        this.setState({
          singlesong: musiclist,
          isLoading: false
        })
      });
  }

  AddNewSong =(newSong)=> {
    console.log(newSong)
    const newSongFormatted = {
      title: newSong.title,
      artist: newSong.artist,
      album: newSong.album,
      release_date: newSong.release_date,
      genre: newSong.genre,
      liked: newSong.liked
    }
    console.log(newSongFormatted)
    axios.post('http://127.0.0.1:8000/music/', newSongFormatted)
        .then(res => console.log(res.data));
    this.setState({
        isLoading: true
    })
    history.push('/')

    }

  deleteSong =(songId)=> {
    console.log("we made the deleteSong request")
    console.log(songId)
	  axios.delete('http://127.0.0.1:8000/music/' + songId + '/')
	    .then(res => console.log(res.data));
    this.setState({
      isLoading: true
    })
    history.push('/')
    }


  

  render() {
    const mlist = this.state.songs;
    // const song = this.state.singlesong;
    const songid = this.state.singlesong.id;
    const { isLoading, songs } = this.state;
    //console.log(song)
    console.log(isLoading)
    return (
      
        <><div className="container-fluid">
          <Titlebar />
          <Menu />
          
          <div className="row row-spacer">
            <div className="col-md-2">
            
            </div>

            <div className="col-md-8">
            <Router history={history}>
            <Switch>                
             
             <Route
              exact path='/SongForm'
              render={() => <SongForm newSongData={this.AddNewSong} />}
             />
             <Route
              exact path='/music/:songid'
              render={() => <EditSong songId={songid} newSongData={this.NewSong} />}
             />    
             <Route
              exact path='/'
              render={() => <MusicTable songData={mlist} deleteSong={this.deleteSong} editSong={this.EditSong} key={this.state.songs.title}/>}
             />

            </Switch>
            </Router>
            {/* <MusicTable songData={this.state.songs}/> */}
            </div>

            <div className="col-md-2">
            
            </div>


          </div><Footer />
        </div></>
      
    );
  }
}
export default App;

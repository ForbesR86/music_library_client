import axios from 'axios';
import React, {Component} from 'react';
import { BrowserRouter as Switch, Route} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './bootstrap.min.css'



import Titlebar from './components/Header/Header'
import Menu from './components/Menu/Menu'
import MusicTable from './components/MusicTable/MusicTable'
import SongForm from './components/SongForm/SongForm'
import Footer from './components/Footer/Footer'


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      songs: [],
      isLoading: true
    };
  };

  componentDidMount() {
    document.body.style.backgroundColor = "#282c34"
    axios.get('http://127.0.0.1:8000/music/')
      .then(res => {
        const musiclist = res.data;
        this.setState({
          songs: musiclist,
          isLoading: false
        })
        console.log(musiclist)
        console.log(this.state.songs)
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
        isLoading: false
    })
    }

  render() {
    const mlist = this.state.songs;
    return (
        <><div className="container-fluid">
          <Titlebar />
          <Menu />
          
          <div className="row row-spacer">
            <div className="col-md-2">
            
            </div>

            <div className="col-md-8">
            <Switch>                
             
             <Route
              exact path='/SongForm'
              render={() => <SongForm newSongData={this.AddNewSong} />}
             />    
             <Route
              exact path='/'
              render={() => <MusicTable songData={mlist} />}
             />

            </Switch>
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

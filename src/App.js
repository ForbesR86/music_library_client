import axios from 'axios';
import React, {Component} from 'react';
import { BrowserRouter as Switch, Route, Router} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './bootstrap.min.css'
import createHistory from 'history/createBrowserHistory';




import Titlebar from './components/Header/Header'
import Menu from './components/Menu/Menu'
import MusicTable from './components/MusicTable/MusicTable'
import SongForm from './components/SongForm/SongForm'
import EditSong from './components/EditSong/EditSong'
import Footer from './components/Footer/Footer'

const history = createHistory();
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      songs: [],
      isLoading: true,
      singlesong:[]
    };

  };

  componentDidMount() {
    this.getMusicLibrary();
  }

  async getMusicLibrary() {
    await axios
      .get('http://127.0.0.1:8000/music/')
      .then(res => {
              const musiclist = res.data;
              this.setState({
                songs: musiclist,
                isLoading: false
              })
      })
      .catch(function(error) {
        console.log(error);
      });

    // this.setState({ songs: musiclist });
  }

  componentDidUpdate(prevProps) {
    if (this.state.isLoading !== false) {
      this.getMusicLibrary();
      }
    
    }


  // componentDidMount() {
    
  //   axios.get('http://127.0.0.1:8000/music/')
  //     .then(res => {
  //       const musiclist = res.data;
  //       this.setState({
  //         songs: musiclist,
  //         isLoading: false
  //       })
  //     })
  //     .catch(error => {
  //       this.setState({ errorMessage: error.message });
  //       console.error('There was an error!', error);
  //     })
  // }

  EditSingleSong = (songId)=> {
    console.log(songId)
    console.log(songId.id + 'title: ' + songId.title)
    const putLocation = 'http://127.0.0.1:8000/music/' + songId.id + '/'
    axios.put(putLocation, songId)
        .then(response => this.setState({ isLoading: true }))
        .catch(error => {
          this.setState({ errorMessage: error.message });
          console.error('There was an error!', error);
        });
    
        history.push('/');
        history.go('/');
  }

  // GetSingleSong =(songId)=> {
  //   const baseURL = 'http://127.0.0.1:8000/music/' + songId + '/'
  //   console.log(baseURL)
    
  //   axios.get(baseURL)
  //     .then(res => {
  //       const musiclist = res.data;
  //       this.setState({
  //         singlesong: musiclist,
  //         isLoading: false
  //       })
  //     });
  // }

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
    history.push('/');
    history.go('/');

    }

  deleteSong =(songId)=> {
    console.log('Delete song requested for songId' + songId)
	  axios.delete('http://127.0.0.1:8000/music/' + songId + '/')
	    .then(res => console.log(res.data));
    this.setState({
      isLoading: true
    })
    history.push('/')
    }

    


  

  render() {
    // const songid = this.state.singlesong.id;
    const mlist = this.state.songs;
    return (
      
        <><div className="container-fluid">
          <Titlebar />
          <Menu />
          
          <div className="row row-spacer">
            <div className="col-md-2">
            
            </div>

            <div className="col-md-8">
            <Router history={history} forceRefresh={true}>
            <Switch >                
             <Route exact path="/" render={() => <MusicTable songData={mlist} deleteSong={this.deleteSong} key={this.state.songs.title}/>}/>
             <Route
              exact path='/SongForm'
              render={() => <SongForm newSongData={this.AddNewSong} />}
             />
             <Route
              exact path='/music/:songid'
              render={() => <EditSong newSongData={this.EditSingleSong} />}
             />    
             

            </Switch>
            </Router>
            {/* <MusicTable songData={this.state.songs}/> */}
            </div>

            <div className="col-md-2">
            
            </div>


          </div><Footer />
        </div></>
      
    )
  }
}

export default App;

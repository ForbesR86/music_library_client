import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header/Header'
import Menu from './components/Menu/Menu'
import MusicTable from './components/MusicTable/MusicTable'
import Footer from './components/Footer/Footer'
function App() {
  return (
        <div className="container-fluid">
          <Header/>
          <Menu/>
            <div className="row row-spacer">
              <div className="col-md-2">
                1
              </div>

              <div className="col-md-8">
          <MusicTable/>
              </div>

              <div className="col-md-2">
                3
               </div>


              </div>
          <Footer/>
        </div>
      
  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import 'shaka-player/dist/controls.css';
import Service from './components/Service';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
    <Navbar/>
     <Service/>
     <Footer/>
    </div>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import Welcome from './components/Welcome'
import NavBar from './components/NavBar';
import { Button, Nav } from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css"
import HeaderComponent from './components/headerNav';
import ImageSlider from './components/ImageSlider';
import Items from './components/items'
import Footer from './components/footer';
import Details from './components/details';
import { Routes,Route } from 'react-router-dom';

function App(props) {
  return (
<>
<HeaderComponent/>

<NavBar/>
{/* <Routes>
      <Route path="/" element={<Items />}/>
      <Route path='/Hdd' element={<Details/>} />
    </Routes> */}
<ImageSlider/>
<Items/>
<Footer/>

</>
  );
}

export default App;

import './App.css';
import Header from './components/Header';
import NavBar from './components/NavBar';
import Body from './components/Body';
import SimpleSlider from './components/Carousel';
import Plants from './components/Plants';
import Contact from './components/Contact';
import Footer from './components/Footer';
import MenuListComposition from './components/MenuButton';
import Slideshow from './components/Slider';
import PlantCarousel from './components/PlantCarousel';
import { Flip } from '@mui/icons-material';
import FlipCard from './components/Flip';
import ToggleComponent from './components/Flip';
import CardComponent from './components/Flip';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import Routing from './components/Routing';
import Side from './components/Sidebar';
import ResponsiveDrawer from './components/Sidebar';
import AuthProvider from './components/context/AdminContext';

function App() {
  return (
    <div className="App">
      {/* <ToggleComponent></ToggleComponent> */}
      {/* <Header></Header>
      <NavBar></NavBar>
      <Slideshow></Slideshow>
      <Body></Body> */}
      {/* <PlantCarousel></PlantCarousel> */}
      {/* <Contact></Contact>
      <Footer></Footer> */}
      <AuthProvider>
        <BrowserRouter>
          <Routing/>
          {/* <ResponsiveDrawer/> */}
        </BrowserRouter>
      </AuthProvider>
      {/* <Routing/> */}
    </div>
  );
}

export default App;

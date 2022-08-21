import React from 'react';
import '../index.css';
import Slider from './slider';
import Footer from './Routes/Home/Footer';
import Header from './Routes/Home/Header';
import BodyHome from './Routes/Home/BodyHome';
import BodyMulti from './Routes/Multi/BodyMulti';
import BodyLeagues from './Routes/Leagues/BodyLeagues';
import BodyCountries from './Routes/Countries/BodyCountries';
import Loadingpage from './ser/Loadingpage';
import { Routes, Route } from "react-router-dom";

const mockImagenes = [
  './images/slider/imagen1.jpg',
  './images/slider/imagen2.jpg',
  './images/slider/imagen3.jpg',
]

function Home() {
  return(
    <div className="relative bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
          <Header/>
          <BodyHome/>
        </div>
      </div>
      <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
        <Slider imagenes={mockImagenes} clasxs="transition-opacity delay-150 ease-in-out h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"/>
      </div>
    </div>
  );
}

function Multimedia() {
  return(
    <div className="relative bg-white overflow-hidden">
      <Header/>
      <BodyMulti/>
    </div>
  );
}

function Leagues() {
  return(
    <div className="relative bg-white overflow-hidden">
      <Header/>
      <BodyLeagues/>
    </div>
  );
}

function Predic() {
  return(
    <div className="relative bg-white overflow-hidden">
      <Header/>
      <BodyLeagues/>
    </div>
  );
}

function Countries() {
  return(
    <div className="relative bg-white overflow-hidden">
      <Header/>
      <BodyCountries/>
    </div>
  );
}

function Frontend() {
    const [loading, setLoading] = React.useState(false);
    
    const cambiarEstado = () =>{
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
      }, 1000)
    }
    React.useEffect(() => cambiarEstado(),[])
    if(loading){
      return (
        <>
        <Loadingpage/>
        </>
      )
    }else{
      return (
          <div>
            <Routes>
              <Route path="/" element={<Home/>} />
              <Route path="/videos" element={<Multimedia/>} />
              <Route path="/leagues" element={<Leagues/>} />
              <Route path="/predic" element={<Predic/>} />
              <Route path="/countries" element={<Countries/>} />
            </Routes>
            <Footer/>
          </div>
      );
    }
}

export default Frontend; 

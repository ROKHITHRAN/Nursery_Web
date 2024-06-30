import React from "react";
import Header from "./Header";
import NavBar from "./NavBar";
import PlantCarousel from "./PlantCarousel";
import Contact from "./Contact";
import Footer from "./Footer";
import Plants from "./Plants";
import Carousel from "react-multi-carousel";
import Slideshow from "./Slider";
import Body from "./Body";
const Website = ()=>{
    return(
    <div>
        <Header/>
        <NavBar/>
        <Slideshow/>
        <Body/>
        <PlantCarousel/>
        <Contact/>
        <Footer/>
    </div>
    )
}
export default Website;
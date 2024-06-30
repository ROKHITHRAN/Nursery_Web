import React, { useRef, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../assets/css/Carou.css"
import img1 from "../assets/images/bk.jpg";
import img2 from "../assets/images/backGround-3.jpg";
import img3 from "../assets/images/backGround-4.jpg";
export default function SimpleSlider() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [autoplay, setAutoplay] = useState(true);
    const sliderRef = useRef();
  
    const toggleAutoplay = () => {
      setAutoplay(!autoplay);
    };
  
    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      speed: 2000,
      autoplaySpeed: 5000,
      beforeChange: (current, next) => {
        setCurrentSlide(next);
        if (autoplay) {
          setAutoplay(false); // Pause autoplay when changing slides
          clearTimeout(autoPlayTimeout); // Clear any existing timeout
        }
      },
      afterChange: () => {
        if (!autoplay) {
          setAutoplay(true); // Resume autoplay after changing slides
          autoPlay();
        }
      }
    };
  
    let autoPlayTimeout;
  
    const autoPlay = () => {
      if (autoplay) {
        autoPlayTimeout = setTimeout(() => {
          if (sliderRef.current) {
            sliderRef.current.slickNext(); // Go to the next slide
          }
        }, 10000); // 5 seconds delay
      }
};
  return (
            <Slider {...settings}>
                <div className="box">
                    <img src={img1} className="img"></img>
                </div>
                <div className="box">
                    <img src={img2} className="img"></img>
                </div>
                <div className="box">
                    <img src={img3} className="img"></img>
                </div>
            </Slider>
  );
}
import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import '../assets/css/Slider.css';
const spanStyle = {
  padding: '20px',
  background: '#efefef',
  color: '#000000'
}

const divStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundSize: 'cover',
  zIndex:1
}
const slideImages = [
  {
    url: 'https://wallpapercave.com/wp/wp9081772.jpg',
    caption: 'Slide 1'
  },
  {
    url: 'https://images.hdqwalls.com/download/cherry-blossom-plant-4k-fc-1920x1080.jpg',
    caption: 'Slide 2'
  },
  {
    url: 'https://www.wallpapers13.com/wp-content/uploads/2019/05/Garden-plants-Blossoming-on-Purple-Aster-Flowers-summer-4k-Ultra-HD-Wallpaper-for-Desktop-Laptop-Tablet-Mobile-Phones-And-TV-3840x2400-840x525.jpg',
    caption: 'Slide 3'
  },
];

const Slideshow = () => {
    return (
      <div className="slide-container">
        <Slide>
          {slideImages.map((slideImage, index) => (
          <div key={index} className='container1' style={{ ...divStyle, backgroundImage: `url(${slideImage.url})` }}>
          </div>
        ))}
        </Slide>
      </div>
    )
}
export default Slideshow;
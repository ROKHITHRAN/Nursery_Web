import { Card, CardActionArea, CardContent, CardMedia, Typography } from "@mui/material";
import React, { useEffect } from "react";
import Carousel from "react-multi-carousel";
import 'react-multi-carousel/lib/styles.css';
import '../assets/css/PlantCarousel.css';
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
  const PlantCarousel=()=>{
    const navigate = useNavigate();
    const handleNav = (url) => {
      return (e) => {
          e.preventDefault();
          navigate(url);
      };
  };
  
    return(
    <div id="Plants">
        <Carousel responsive={responsive} className="plantCarousel_container">
            <div className="card">
            <Card sx={{ width: 345 ,height:400}} className="plant">
              <div onClick={handleNav("/Flowers")} className="main_card">
                      <CardActionArea className="front">
                          <CardMedia
                          component="img"
                          height="345"
                          image="https://tse4.mm.bing.net/th?id=OIP.emNxXirM-FvB5W_GpjK-MwHaFg&pid=Api&P=0&h=180"
                          alt="flowers"
                          />
                          <CardContent className="content">
                          <Typography gutterBottom variant="h5" component="div">
                              FLOWERS
                          </Typography>
                          {/* <Typography variant="body2" color="text.secondary">
                              Lizards are a widespread group of squamate reptiles, with over 6,000
                              species, ranging across all continents except Antarctica
                          </Typography> */}
                          </CardContent>
                      </CardActionArea>
                    </div>
                    </Card>
            </div>
            <div className="card">
            <Card sx={{ width: 345 ,height:400}} className="plant">
              <div onClick={handleNav("/Fruits")}>
                      <CardActionArea>
                          <CardMedia
                          component="img"
                          height="345"
                          image="https://www.thespruce.com/thmb/IU44qHcgeBvfNPKcSxmSzJhhZP8=/5700x3794/filters:no_upscale():max_bytes(150000):strip_icc()/dwarf-fruit-trees-4588521-07-ebfded6071cb4a0aba4291d241962133.jpg"
                          alt="flowers"
                          />
                          <CardContent className="content">
                          <Typography gutterBottom variant="h5" component="div">
                              FRUITS
                          </Typography>
                          {/* <Typography variant="body2" color="text.secondary">
                              Lizards are a widespread group of squamate reptiles, with over 6,000
                              species, ranging across all continents except Antarctica
                          </Typography> */}
                          </CardContent>
                      </CardActionArea>
                      </div>
                    </Card>
            </div>
            <div className="card" onClick={handleNav("/Bonsai")}>
            <Card sx={{ width: 345 ,height:400}} className="plant">
              <div>
                      <CardActionArea>
                          <CardMedia
                          component="img"
                          height="345"
                          image="https://www.thespruce.com/thmb/0AJv8AfVaT09o4oLhofX_WR_d-Y=/3024x3022/filters:no_upscale():max_bytes(150000):strip_icc()/Bonsai-Juniper-Tree_GettyImages-1191078639-c86fffdd513648b6b2ee0d658710bc7d.jpg"
                          alt="flowers"
                          />
                          <CardContent className="content">
                          <Typography gutterBottom variant="h5" component="div">
                              BONSAI
                          </Typography>
                          {/* <Typography variant="body2" color="text.secondary">
                              Lizards are a widespread group of squamate reptiles, with over 6,000
                              species, ranging across all continents except Antarctica
                          </Typography> */}
                          </CardContent>
                      </CardActionArea>
                      </div>
                    </Card>
            </div>
            <div className="card">
              <Card sx={{ width: 345 ,height:400}} className="plant">
                <div>
                        <CardActionArea>
                            <CardMedia
                            component="img"
                            height="345"
                            image="https://www.mlive.com/resizer/WERWqdO_loyzGtNp-nWjmCw179Y=/1200x0/advancelocal-adapter-image-uploads.s3.amazonaws.com/image.mlive.com/home/mlive-media/width2048/img/home_and_garden_impact/photo/img-0587jpg-5dacb9853bc521bd.jpg"
                            alt="flowers"
                            />
                            <CardContent className="content">
                            <Typography gutterBottom variant="h5" component="div">
                                CLIMBERS
                            </Typography>
                            {/* <Typography variant="body2" color="text.secondary">
                                Lizards are a widespread group of squamate reptiles, with over 6,000
                                species, ranging across all continents except Antarctica
                            </Typography> */}
                            </CardContent>
                        </CardActionArea>
                        </div>
                    </Card>
            </div>
            <div className="card">
            <Card sx={{ width: 345 ,height:400}} className="plant">
                <div>
                        <CardActionArea>
                            <CardMedia
                            component="img"
                            height="345"
                            image="https://c8.alamy.com/comp/PKX0GJ/croton-plant-that-grows-in-kenya-africa-PKX0GJ.jpg"
                            alt="flowers"
                            />
                            <CardContent className="content">
                            <Typography gutterBottom variant="h5" component="div">
                                CROTANS
                            </Typography>
                            {/* <Typography variant="body2" color="text.secondary">
                                Lizards are a widespread group of squamate reptiles, with over 6,000
                                species, ranging across all continents except Antarctica
                            </Typography> */}
                            </CardContent>
                        </CardActionArea>
                        </div>
                    </Card>
                    </div>
            <div className="card">
            <Card sx={{ width: 345 ,height:400}} className="plant">
                <div>
                        <CardActionArea>
                            <CardMedia
                            component="img"
                            height="345"
                            image="https://i.pinimg.com/originals/df/ab/fd/dfabfd97126a7649ee6d1677960fe883.jpg"
                            alt="flowers"
                            />
                            <CardContent className="content">
                            <Typography gutterBottom variant="h5" component="div">
                                PALMS
                            </Typography>
                            {/* <Typography variant="body2" color="text.secondary">
                                Lizards are a widespread group of squamate reptiles, with over 6,000
                                species, ranging across all continents except Antarctica
                            </Typography> */}
                            </CardContent>
                        </CardActionArea>
                        </div>
                    </Card>
            </div>
        </Carousel>
        </div>
    )
  }
  export default PlantCarousel;
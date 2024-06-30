import { Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material';
import React, { useState } from 'react';
import ReactCardFlip from 'react-card-flip';

const CardComponent = () => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleClick = (e) => {
    e.preventDefault();
    setIsFlipped(!isFlipped);
  };

  return (
    <ReactCardFlip isFlipped={isFlipped} flipDirection="vertical">
      <div onClick={handleClick}>
      <Card sx={{ width: 345 ,height:400}}>
                    <CardActionArea>
                        <CardMedia
                        component="img"
                        height="300"
                        image="https://tse4.mm.bing.net/th?id=OIP.emNxXirM-FvB5W_GpjK-MwHaFg&pid=Api&P=0&h=180"
                        alt="flowers"
                        />
                        <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            FLOWERS
                        </Typography>
                        {/* <Typography variant="body2" color="text.secondary">
                            Lizards are a widespread group of squamate reptiles, with over 6,000
                            species, ranging across all continents except Antarctica
                        </Typography> */}
                        </CardContent>
                    </CardActionArea>
                    </Card>
      </div>
      <div onClick={handleClick}>
      <Card sx={{ width: 345 ,height:400}}>
                    <CardActionArea>
                        <CardMedia
                        component="img"
                        height="300"
                        image="https://www.thespruce.com/thmb/IU44qHcgeBvfNPKcSxmSzJhhZP8=/5700x3794/filters:no_upscale():max_bytes(150000):strip_icc()/dwarf-fruit-trees-4588521-07-ebfded6071cb4a0aba4291d241962133.jpg"
                        alt="Fruits"
                        />
                        <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            FRUITS
                        </Typography>
                        {/* <Typography variant="body2" color="text.secondary">
                            Lizards are a widespread group of squamate reptiles, with over 6,000
                            species, ranging across all continents except Antarctica
                        </Typography> */}
                        </CardContent>
                    </CardActionArea>
                    </Card>
      </div>
    </ReactCardFlip>
  );
};

export default CardComponent;

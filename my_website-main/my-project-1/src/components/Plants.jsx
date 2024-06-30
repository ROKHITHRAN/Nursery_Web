import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import "../assets/css/Plants.css"
const Plants = ()=>{
    return (
        <div className='plant_container' id='Plants'>
            <ul className='list'>
                <li className='plants'>
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
                </li>
                <li className='plants'>
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
                </li>
                <li className='plants'>
                <Card sx={{ width: 345 ,height:400}}>
                    <CardActionArea>
                        <CardMedia
                        component="img"
                        height="300"
                        image="https://www.thespruce.com/thmb/0AJv8AfVaT09o4oLhofX_WR_d-Y=/3024x3022/filters:no_upscale():max_bytes(150000):strip_icc()/Bonsai-Juniper-Tree_GettyImages-1191078639-c86fffdd513648b6b2ee0d658710bc7d.jpg"
                        alt="Fruits"
                        />
                        <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            BONSAI
                        </Typography>
                        {/* <Typography variant="body2" color="text.secondary">
                            Lizards are a widespread group of squamate reptiles, with over 6,000
                            species, ranging across all continents except Antarctica
                        </Typography> */}
                        </CardContent>
                    </CardActionArea>
                    </Card>
                </li>
            </ul>
            <ul className='list_2'>
                <li className='climbers'>
                    <Card sx={{ width: 345 ,height:400}}>
                    <CardActionArea>
                        <CardMedia
                        component="img"
                        height="300"
                        image="https://www.mlive.com/resizer/WERWqdO_loyzGtNp-nWjmCw179Y=/1200x0/advancelocal-adapter-image-uploads.s3.amazonaws.com/image.mlive.com/home/mlive-media/width2048/img/home_and_garden_impact/photo/img-0587jpg-5dacb9853bc521bd.jpg"
                        alt="flowers"
                        />
                        <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            CLIMBERS
                        </Typography>
                        {/* <Typography variant="body2" color="text.secondary">
                            Lizards are a widespread group of squamate reptiles, with over 6,000
                            species, ranging across all continents except Antarctica
                        </Typography> */}
                        </CardContent>
                    </CardActionArea>
                    </Card>
                </li>
                <li className='plants'>
                <Card sx={{ width: 345 ,height:400}}>
                    <CardActionArea>
                        <CardMedia
                        component="img"
                        height="300"
                        image="https://c8.alamy.com/comp/PKX0GJ/croton-plant-that-grows-in-kenya-africa-PKX0GJ.jpg"
                        alt="Fruits"
                        />
                        <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            CROTANS
                        </Typography>
                        {/* <Typography variant="body2" color="text.secondary">
                            Lizards are a widespread group of squamate reptiles, with over 6,000
                            species, ranging across all continents except Antarctica
                        </Typography> */}
                        </CardContent>
                    </CardActionArea>
                    </Card>
                </li>
                <li className='plants'>
                <Card sx={{ width: 345 ,height:400}}>
                    <CardActionArea>
                        <CardMedia
                        component="img"
                        height="300"
                        image="https://i.pinimg.com/originals/df/ab/fd/dfabfd97126a7649ee6d1677960fe883.jpg"
                        alt="Fruits"
                        />
                        <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            PALMS
                        </Typography>
                        {/* <Typography variant="body2" color="text.secondary">
                            Lizards are a widespread group of squamate reptiles, with over 6,000
                            species, ranging across all continents except Antarctica
                        </Typography> */}
                        </CardContent>
                    </CardActionArea>
                    </Card>
                </li>
            </ul>

        </div>
      );
}
export default Plants;
import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { useEffect } from 'react';
import axios from 'axios';
import { useState } from 'react';
import { Card, CardActionArea, CardContent, CardMedia } from '@mui/material';
import '../assets/css/Sidebar.css'
import { Link, useLocation } from 'react-router-dom';
import Header from './Header';
import logo from "../assets/images/logo.png"

const drawerWidth = 240;
function ResponsiveDrawer(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [isClosing, setIsClosing] = React.useState(false);
  const[isClick,setIsClick] = useState(false);
  const handleDrawerClose = () => {
    setIsClosing(true);
    setMobileOpen(false);
  };
  
  const handleDrawerTransitionEnd = () => {
    setIsClosing(false);
  };

  const handleDrawerToggle = () => {
    if (!isClosing) {
      setMobileOpen(!mobileOpen);
    }
  };
  const location = useLocation();
  const curr = location.pathname;
  console.log(curr);
  const[lin,setLin] = useState("");
  const handleClick = (val)=>{
    setLin(val);
    setIsClick(true);
  }
  console.log(lin);
  const drawer = (
    <div style={{backgroundColor:"rgb(161, 225, 65)",opacity:"1",height:"100%"}}>
      <Toolbar />
      <Divider />
      <List>
          <Link to='/' style={{ textDecoration: 'none', color: 'black' }}>
            <ListItem disablePadding>
              <ListItemButton style={{marginTop:"25px"}}>
                <ListItemText primary="HOME"/>
              </ListItemButton>
            </ListItem>
          </Link>
          <ListItem disablePadding onClick={()=>{handleClick("Flowers")}}>
            <ListItemButton style={{marginTop:"25px"}}>
              <ListItemText primary="FLOWERS" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding onClick={()=>{handleClick("Fruits")}}>
            <ListItemButton style={{marginTop:"25px"}}>
              <ListItemText primary="FRUITS" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding onClick={()=>{handleClick("Bonsai")}}>
            <ListItemButton style={{marginTop:"25px"}}>
              <ListItemText primary="BONSAI" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton style={{marginTop:"25px"}}>
              <ListItemText primary="CLIMBERS" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton style={{marginTop:"25px"}}>
              <ListItemText primary="CROTANS" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton style={{marginTop:"25px"}}>
              <ListItemText primary="PALM" />
            </ListItemButton>
          </ListItem>
        {/* {['HOME', 'FLOWERS', 'FRUITS', 'BONSAI','CLIMBERS','CROTANS','PALM'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton style={{marginTop:"25px"}}>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))} */}
      </List>
    </div>
  );
  const[plant,setPlant] = useState([]);
  const[des,setDes] = useState([]);
  useEffect(
    ()=>{
        const f = async()=>{
          if(!isClick)
          {

              try{
                  const response = await axios.get("http://localhost:3030"+curr)
                  console.log(curr);
                  setPlant(response.data.urls)
                  setDes(response.data.description);
                  // console.log(plant);
                  // console.log(response.data.urls);
              }
              catch(e)
              {
                  console.log(e);
              }
            }
            else
            {
                try{
                    const response = await axios.get("http://localhost:3030/"+lin)
                    setPlant(response.data.urls)
                    setDes(response.data.description);
                    // console.log(plant);
                    // console.log(response.data.urls);
                }
                catch(e)
                {
                    console.log(e);
                }
          }
        }
    f();
    },[lin]
  )
  // const[plant,setPlant] = useState([]);
  // const[des,setDes] = useState([]);
  // useEffect(
  //   ()=>{
  //       const f = async()=>{
  //           try{
  //               const response = await axios.get("http://localhost:3030/Flowers")
  //               setPlant(response.data.urls)
  //               setDes(response.data.description);
  //               // console.log(plant);
  //               // console.log(response.data.urls);
  //           }
  //           catch(e)
  //           {
  //               console.log(e);
  //           }
            
  //       }
  //   f();
  //   },[]
  // )
  const container = window !== undefined ? () => window().document.body : undefined;
    // console.log(plant);
    // console.log(des);
  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
        
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
          backgroundColor:"rgb(161, 225, 65)",
          alignContent:"center"
        }}
      >

        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ 
              mr: 2, 
              display: { sm: 'none' },
              color:"black"
            }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onTransitionEnd={handleDrawerTransitionEnd}
          onClose={handleDrawerClose}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, 
        width: { sm: `calc(100% - ${drawerWidth}px)` },
        backgroundColor:"rgb(228, 255, 188)"}}
      >
        <Toolbar />
        <div className='cards' style={{backgroundColor:"rgb(228, 255, 188)"}}>
        {plant.map((itm,index)=>(
          <div key={index}>
            <Card sx={{ width: 345 ,height:400}}>
              <CardActionArea>
                <CardMedia component='img' height='345' image={itm}/>
                <CardContent>{des.at(index)}</CardContent>
            {/* <img src={itm}></img> */}
              </CardActionArea>
            </Card>
          </div>
        ))}
        </div>

      </Box>
    </Box>
  );
}

ResponsiveDrawer.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * Remove this when copying and pasting into your project.
   */
  window: PropTypes.func,
};

export default ResponsiveDrawer;

import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Link, useLocation } from 'react-router-dom';
import { UseFectch } from './hooks/UseFetch';
import '../assets/css/Sidebar.css';
import { Card, CardActionArea, CardContent, CardMedia } from '@mui/material';

const drawerWidth = 240;

function ResponsiveDrawer(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const [isClick, setIsClick] = useState(false);
  const [lin, setLin] = useState("");

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

  const handleClick = (val) => {
    setLin(val);
    setIsClick(true);
    setMobileOpen(false); // Close the sidebar when an item is clicked
  };

  const plants = UseFectch(isClick ? lin : curr);
  console.log(lin);

  const drawer = (
    <div style={{ backgroundColor: "rgb(161, 225, 65)", opacity: "1", height: "100%" }}>
      <Toolbar />
      <Divider />
      <List>
        <Link to='/' style={{ textDecoration: 'none', color: 'black' }}>
          <ListItem disablePadding>
            <ListItemButton style={{ marginTop: "25px" }} onClick={handleDrawerClose}>
              <ListItemText primary="HOME" />
            </ListItemButton>
          </ListItem>
        </Link>
        <ListItem disablePadding onClick={() => { handleClick("Flowers") }}>
          <ListItemButton style={{ marginTop: "25px" }}>
            <ListItemText primary="FLOWERS" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding onClick={() => { handleClick("Fruits") }}>
          <ListItemButton style={{ marginTop: "25px" }}>
            <ListItemText primary="FRUITS" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding onClick={() => { handleClick("Bonsai") }}>
          <ListItemButton style={{ marginTop: "25px" }}>
            <ListItemText primary="BONSAI" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding onClick={() => { handleClick("Climbers") }}>
          <ListItemButton style={{ marginTop: "25px" }}>
            <ListItemText primary="CLIMBERS" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding onClick={() => { handleClick("Crotans") }}>
          <ListItemButton style={{ marginTop: "25px" }}>
            <ListItemText primary="CROTANS" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding onClick={() => { handleClick("Palm") }}>
          <ListItemButton style={{ marginTop: "25px" }}>
            <ListItemText primary="PALM" />
          </ListItemButton>
        </ListItem>
      </List>
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
          backgroundColor: "rgb(161, 225, 65)",
          alignContent: "center"
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
              color: "black"
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
        sx={{
          flexGrow: 1, p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          backgroundColor: "rgb(228, 255, 188)"
        }}
      >
        <Toolbar />
        <div className='cards' style={{ backgroundColor: "rgb(228, 255, 188)" }}>
          {plants.map((flower) => (
            <div key={flower.id}>
              <Card sx={{ width: 345, height: 400 }}>
                <CardActionArea>
                  <CardMedia
                    component='img'
                    height='345'
                    image={flower.image} // Ensure your document has an imageUrl field
                    alt={flower.name} // Ensure your document has a name field
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {flower.name} {/* Ensure your document has a name field */}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {flower.description} {/* Ensure your document has a description field */}
                    </Typography>
                  </CardContent>
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
  window: PropTypes.func,
};

export default ResponsiveDrawer;

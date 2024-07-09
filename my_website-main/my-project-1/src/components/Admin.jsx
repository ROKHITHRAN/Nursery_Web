import React, { useContext, useState } from 'react';
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
import { Card, CardActionArea, CardActions, CardContent, CardMedia, Button } from '@mui/material';
import { Link, useLocation } from 'react-router-dom';
import { UseFectch } from './hooks/UseFetch.jsx';
import { UseFireStore } from './hooks/UseFireStore';
import AddPopUp from './AddPopUp';
import '../assets/css/Sidebar.css';

const drawerWidth = 240;

function ResponsiveDrawer(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const [isClick, setIsClick] = useState(false);
  const [lin, setLin] = useState("");
  const [isAdd, setIsAdd] = useState(false);
  const location = useLocation();
  const curr = location.pathname;
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

  const handleClick = (val) => {
    setLin(val);
    setIsClick(true);
    setMobileOpen(false);
  };

  const handleAddClick = () => {
    setIsAdd(true);
  };

  const handleAddClose = () => {
    setIsAdd(false);
  };

  const { AddDocument,DeleteDocument } = UseFireStore(isClick ? lin : curr);
  const handleDelete = async (id) => {
    try {
        await DeleteDocument(id);
    } catch (error) {
      console.error('Error deleting document:', error);
      // Handle error
    }
  };

  const plants = UseFectch(isClick ? lin : curr);
  const toAddLink = (isClick ? lin : curr);
  const drawer = (
    <div style={{ backgroundColor: "rgb(161, 225, 65)", opacity: "1", height: "100%" }}>
      <Toolbar />
      <Divider />
      <List>
        <Link to='/' style={{ textDecoration: 'none', color: 'black' }}>
          <ListItem disablePadding>
            <ListItemButton style={{ marginTop: "25px" }}>
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
            <Button size="small" color="secondary" onClick={() => handleDelete(flower.id)}>Delete</Button>
              <Card sx={{ width: 345, height: 400, marginBottom: '20px' }}>
                <CardActionArea>
                  <CardMedia
                    component='img'
                    height='345'
                    image={flower.image}
                    alt={flower.name}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {flower.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {flower.description}
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Button size="small" color="secondary" onClick={() => handleDelete(flower.id)}>Delete</Button>
                </CardActions>
              </Card>
            </div>
          ))}
          <Card sx={{ width: 345, height: 400 }}>
            <CardActionArea onClick={handleAddClick}>
              <CardMedia
                component='img'
                alt='Image'
                height='345'
                image="data:image/png;base64,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"
                title='Image Title'
              />
              <CardContent>
                <Typography gutterBottom variant='h5' component='div'>
                  Add New Item
                </Typography>
                <Typography variant='body2' color='text.secondary'>
                  Click to add a new item.
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
          {isAdd && <AddPopUp onClose={handleAddClose} toAddLink={toAddLink}/>}
        </div>
      </Box>
    </Box>
  );
}

ResponsiveDrawer.propTypes = {
  window: PropTypes.func,
};

export default ResponsiveDrawer;

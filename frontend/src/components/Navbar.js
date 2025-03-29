import React from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <AppBar position="static">
    <Toolbar>
      {/* <IconButton edge="start" color="inherit" aria-label="menu">
        <MenuIcon />
      </IconButton> */}
      <Typography variant="h4">★&nbsp;</Typography>
      <Typography variant="h6" sx={{ flexGrow: 1 }}>
        EMS
      </Typography>
      <Button color="inherit" component={Link} to="/" sx={{ fontSize: '1rem' }}>
        Home
      </Button>
      <Button color="inherit" component={Link} to="/employees" sx={{ fontSize: '1rem' }}>
        Employee List
      </Button>
      <Button color="inherit" component={Link} to="/add" sx={{ fontSize: '1rem' }}>
        Add Employee
      </Button>
      <Button color="inherit" component={Link} to="/about" sx={{ fontSize: '1rem' }}>
        About Us
      </Button>
      <Button color="inherit" component={Link} to="/contact" sx={{ fontSize: '1rem' }}>
        Contact Us
      </Button>
     
    </Toolbar>
  </AppBar>
);

export default Navbar;

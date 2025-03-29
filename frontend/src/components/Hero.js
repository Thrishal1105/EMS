import React from 'react';
import { Box, Typography } from '@mui/material';

const Hero = () => (
  <Box sx={{
    height: '60vh',
    backgroundImage: 'url(/ems/ems.png)', // Updated image path
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'white',
    textAlign: 'center',
    p: 3,
    color:'black'
  }}>
    <Typography variant="h2" gutterBottom>
      Welcome to the Employee Management System
    </Typography>
    <Typography variant="h5" sx={{fontSize: '1.3rem', fontWeight: '500', mb: 2, fontStyle: 'italic'}}>
      Streamline your employee management process with ease.
    </Typography>
    <Box sx={{ mt: 4 }}>
      <Typography variant="body1" sx={{ fontSize: '1.1rem', lineHeight: '1.6', mb: 2 }}>
        Our Employee Management System (EMS) is a comprehensive solution designed to revolutionize your HR processes. 
      </Typography>
      <Typography variant="body1" sx={{ fontSize: '1.1rem', lineHeight: '1.6', mb: 3 }}>
        We empower you to efficiently manage employee data, meticulously track performance, and seamlessly streamline workflows, all in one integrated platform.
      </Typography>
    </Box>
  </Box>
);

export default Hero;
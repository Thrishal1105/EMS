import React from 'react';
import { Box, Typography, Link, Grid, /* Avatar */ } from '@mui/material';

const Footer = () => {
  return (
    <Box sx={{ bgcolor: 'primary.main', color: 'white', p: 3, mt: 4 }}>
      <Grid container spacing={2} justifyContent="center">
        <Grid item xs={12} sm={4}>
          <Typography variant="h6" align="center" gutterBottom>
            Contact Us
          </Typography>
          <Typography variant="body2" align="center">
            Email: <Link href="mailto:info@example.com" color="inherit">info@example.com</Link>
          </Typography>
          <Typography variant="body2" align="center">
            Phone: (123) 456-7890
          </Typography>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Typography variant="h6" align="center" gutterBottom>
            Navigation
          </Typography>
          <Typography variant="body2" align="center">
            <Link href="/" color="inherit" underline="none">
              Home
            </Link>{' '}
            |{' '}
            <Link href="/about" color="inherit" underline="none">
              About
            </Link>{' '}
            |{' '}
            <Link href="/contact" color="inherit" underline="none">
              Contact
            </Link>
          </Typography>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Typography variant="h6" align="center" gutterBottom>
            Follow Us
          </Typography>
          <Typography variant="body2" align="center">
            <Link href="#" color="inherit" underline="none">
              Facebook
            </Link>{' '}
            |{' '}
            <Link href="#" color="inherit" underline="none">
              Twitter
            </Link>{' '}
            |{' '}
            <Link href="#" color="inherit" underline="none">
              LinkedIn
            </Link>
          </Typography>
        </Grid>
        {/* Remove Our Team Section */}
        {/* <Grid item xs={12} sm={8} sx={{ bgcolor: 'rgba(255, 255, 255, 0.1)', p: 2, borderRadius: 2 }}>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Avatar
              alt="Company Team"
              src="/images/team.jpg"
              sx={{ width: 80, height: 80, mr: 2 }}
            />
            <Box>
              <Typography variant="h6" gutterBottom>
                Meet Our Expert Team
              </Typography>
              <Typography variant="body2">
                We are a team of dedicated professionals passionate about providing the best employee management solutions.
              </Typography>
            </Box>
          </Box>
        </Grid> */}
      </Grid>
      <Typography variant="body1" align="center" sx={{ mt: 2 }}>
        © 2023 Employee Management System
      </Typography>
    </Box>
  );
};

export default Footer; 
import React from 'react';
import { Box, Typography } from '@mui/material';

const About = () => (
  <Box sx={{ p: 3 }}>
    <Typography
      variant="h4"
      gutterBottom
      align="center"
      fontWeight="bold"
      sx={{ mb: 3 }}
    >
      About Employee Management System
    </Typography>
    <Typography variant="body1" sx={{ fontFamily: 'Roboto, sans-serif', fontSize: '1.1rem' }}>
      The Employee Management System is designed to streamline the process of managing employee records.
      It provides features such as adding, updating, and deleting employee information, as well as viewing
      detailed employee profiles.
    </Typography>
    <Typography variant="body1" mt={2} sx={{ fontFamily: 'Roboto, sans-serif', fontSize: '1.1rem' }}>
      Our system helps organizations maintain accurate records, improve operational efficiency, and make data-driven decisions.
      With our user-friendly interface and comprehensive features, managing your workforce has never been easier.
    </Typography>
    <Typography variant="h6" mt={3} gutterBottom sx={{ fontFamily: 'Roboto, sans-serif', fontSize: '1.2rem' }}>Key Features</Typography>
    <Typography variant="body1" sx={{ fontFamily: 'Roboto, sans-serif', fontSize: '1.1rem' }}>
      - Add new employees with detailed information
    </Typography>
    <Typography variant="body1" sx={{ fontFamily: 'Roboto, sans-serif', fontSize: '1.1rem' }}>
      - Update existing employee records
    </Typography>
    <Typography variant="body1" sx={{ fontFamily: 'Roboto, sans-serif', fontSize: '1.1rem' }}>
      - Delete employee records
    </Typography>
    <Typography variant="body1" sx={{ fontFamily: 'Roboto, sans-serif', fontSize: '1.1rem' }}>
      - View detailed employee profiles
    </Typography>
    <Typography variant="body1" mt={2} sx={{ fontFamily: 'Roboto, sans-serif', fontSize: '1.1rem' }}>
      Our system is designed to be scalable and customizable to meet the unique needs of your organization.
      We offer a range of support services to ensure you get the most out of our platform.
    </Typography>
    <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
      <img src="/images/ems.png" alt="Employee Management System Interface" style={{ maxWidth: '30%', height: 'auto' }} />
    </Box>
    
    {/* <Typography variant="body1" mt={2} sx={{ fontFamily: 'Roboto, sans-serif', fontSize: '1.1rem' }}>
      <img src="/images/employee-management-2.png" alt="Employee Management System Data Analysis" style={{ maxWidth: '100%', height: 'auto' }} />
    </Typography> */}
  </Box>
);

export default About; 
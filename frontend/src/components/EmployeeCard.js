import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

const EmployeeCard = ({ employee }) => (
  <Card sx={{ maxWidth: 345, m: 2 }}>
    <CardMedia
      component="img"
      height="140"
      image="/path/to/employee/image.jpg"
      alt={employee.name}
    />
    <CardContent>
      <Typography gutterBottom variant="h5" component="div">
        {employee.name}
      </Typography>
      <Typography variant="body2" color="text.secondary">
        {employee.department} - ${employee.salary.toLocaleString()}
      </Typography>
    </CardContent>
  </Card>
);

export default EmployeeCard; 
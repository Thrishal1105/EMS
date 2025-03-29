import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import employeeService from '../services/employeeService';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';

const EmployeeForm = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const isEditMode = Boolean(id);
  
  // Form state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    department: '',
    salary: ''
  });
  
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [validationErrors, setValidationErrors] = useState({});
  
  // Fetch employee data if in edit mode
  useEffect(() => {
    if (isEditMode) {
      const fetchEmployeeData = async () => {
        try {
          setLoading(true);
          const response = await employeeService.getEmployeeById(id);
      
          if (response.data) {
            setFormData({
              name: response.data.name,
              email: response.data.email,
              department: response.data.department,
              salary: response.data.salary
            });
            setError(null);
          }
        } catch (error) {
          setError('Failed to fetch employee data. Please try again later.');
          console.error('Error fetching employee data:', error);
        } finally {
          setLoading(false);
        }
      };
      fetchEmployeeData();
    }
  }, [id, isEditMode, employeeService, setFormData, setError, setLoading]);
  
  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    
    // Clear validation error for this field when user types
    if (validationErrors[name]) {
      setValidationErrors({
        ...validationErrors,
        [name]: null
      });
    }
  };
  
  // Validate form data
  const validateForm = () => {
    const errors = {};
    
    if (!formData.name.trim()) {
      errors.name = 'Name is required';
    }
    
    if (!formData.email.trim()) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = 'Email is invalid';
    }
    
    if (!formData.department) {
      errors.department = 'Department is required';
    }
    
    if (!formData.salary) {
      errors.salary = 'Salary is required';
    } else if (isNaN(formData.salary) || Number(formData.salary) <= 0) {
      errors.salary = 'Salary must be a positive number';
    }
    
    setValidationErrors(errors);
    return Object.keys(errors).length === 0;
  };
  
  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validate form
    if (!validateForm()) {
      return;
    }
    
    try {
      setLoading(true);
      
      // Format data
      const employeeData = {
        ...formData,
        salary: Number(formData.salary)
      };
      
      if (isEditMode) {
        // Update existing employee
        await employeeService.updateEmployee(id, employeeData);
      } else {
        // Create new employee
        await employeeService.createEmployee(employeeData);
      }
      
      // Redirect to employee list
      navigate('/');
      
    } catch (error) {
      setError(`Failed to ${isEditMode ? 'update' : 'create'} employee. Please try again later.`);
      console.error(`Error ${isEditMode ? 'updating' : 'creating'} employee:`, error);
    } finally {
      setLoading(false);
    }
  };
  
  return (
    <Box sx={{ maxWidth: 600, mx: 'auto', mt: 4 }}>
      <Typography 
        variant="h4" 
        component="h1" 
        gutterBottom
        sx={{ 
          textAlign: 'center', 
          fontWeight: 'bold' 
        }}
      >
        {isEditMode ? 'Edit Employee' : 'Add New Employee'}
      </Typography>
      
      {/* Error Message */}
      {error && (
        <Typography variant="body1" color="error" gutterBottom>
          {error}
        </Typography>
      )}
      
      {/* Loading Indicator */}
      {loading && (
        <Box sx={{ display: 'flex', justifyContent: 'center', my: 3 }}>
          <CircularProgress />
        </Box>
      )}
      
      {/* Employee Form */}
      <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
        <TextField
          margin="normal"
          required
          fullWidth
          id="name"
          label="Name"
          name="name"
          autoComplete="name"
          autoFocus
          value={formData.name}
          onChange={handleChange}
          error={!!validationErrors.name}
          helperText={validationErrors.name}
        />
        <TextField
          margin="normal"
          required
          fullWidth
          id="email"
          label="Email"
          name="email"
          autoComplete="email"
          value={formData.email}
          onChange={handleChange}
          error={!!validationErrors.email}
          helperText={validationErrors.email}
        />
        <FormControl fullWidth margin="normal" error={!!validationErrors.department}>
          <InputLabel>Department</InputLabel>
          <Select
            id="department"
            name="department"
            value={formData.department}
            onChange={handleChange}
            label="Department"
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value="Engineering">Engineering</MenuItem>
            <MenuItem value="HR">HR</MenuItem>
            <MenuItem value="Marketing">Marketing</MenuItem>
            <MenuItem value="Finance">Finance</MenuItem>
          </Select>
        </FormControl>
        <TextField
          margin="normal"
          required
          fullWidth
          id="salary"
          label="Salary"
          name="salary"
          type="number"
          value={formData.salary}
          onChange={handleChange}
          error={!!validationErrors.salary}
          helperText={validationErrors.salary}
        />
        <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 3 }}>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            disabled={loading}
          >
            {isEditMode ? 'Update' : 'Create'} Employee
          </Button>
          <Button
            variant="outlined"
            color="secondary"
            onClick={() => navigate('/')}
            disabled={loading}
          >
            Cancel
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default EmployeeForm;
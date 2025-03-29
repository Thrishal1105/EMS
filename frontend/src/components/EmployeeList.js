import React, { useState, useEffect } from 'react';
import employeeService from '../services/employeeService';
import {
  Typography,
  CircularProgress,
  TextField,
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { useNavigate } from 'react-router-dom';

const EmployeeList = () => {
  const [employees, setEmployees] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const [open, setOpen] = useState(false);
  const [deleteId, setDeleteId] = useState(null);

  useEffect(() => {
    fetchEmployees();
  }, []);

  const fetchEmployees = async () => {
    try {
      setLoading(true);
      const response = await employeeService.getAllEmployees();
      setEmployees(response.data);
      setError(null);
    } catch (error) {
      setError('Failed to fetch employees. Please try again later.');
      console.error('Error fetching employees:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleOpen = (id) => {
    setOpen(true);
    setDeleteId(id);
  };

  const handleClose = () => {
    setOpen(false);
    setDeleteId(null);
  };

  const handleDelete = async () => {
    try {
      await employeeService.deleteEmployee(deleteId);
      setEmployees(employees.filter((employee) => employee.id !== deleteId));
      handleClose();
    } catch (error) {
      console.error('Error deleting employee:', error);
      setError('Failed to delete employee. Please try again later.');
      handleClose();
    }
  };

  const filteredEmployees = employees.filter((employee) => {
    const searchStr = searchTerm.toLowerCase();
    return (
      employee.name.toLowerCase().includes(searchStr) ||
      employee.salary.toString().includes(searchStr) ||
      employee.department.toLowerCase().includes(searchStr)
    );
  });

  if (error) {
    return <Typography color="error">{error}</Typography>;
  }

  return (
    <Box sx={{ p: 3 }}>
      <Typography
        variant="h4"
        align="center"
        fontWeight="bold"
        gutterBottom
        sx={{ mb: 3, fontWeight: 600 }}
      >
        Employee List
      </Typography>
      <Box sx={{ display: 'flex', justifyContent: 'center', mb: 3 }}>
        <TextField
          label="Search by Name, Amount, or Department"
          variant="outlined"
          size="small"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          sx={{ width: '50%' }}
        />
      </Box>
      {loading ? (
        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
          <CircularProgress />
        </Box>
      ) : (
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="employee table">
            <TableHead sx={{ backgroundColor: '#3f51b5', color: 'white' }}>
              <TableRow>
                <TableCell sx={{ border: '1px solid rgba(100, 100, 100, 1)', fontWeight: 'bold', color: '#ffff' }}>Name</TableCell>
                <TableCell align="left" sx={{ border: '1px solid rgba(100, 100, 100, 1)', width: '20%', fontWeight: 'bold', color: '#ffff' }}>Email</TableCell>
                <TableCell align="center" sx={{ border: '1px solid rgba(100, 100, 100, 1)', fontWeight: 'bold', color: '#ffff' }}>Department</TableCell>
                <TableCell align="center" sx={{ border: '1px solid rgba(100, 100, 100, 1)', fontWeight: 'bold', color: '#ffff' }}>Salary</TableCell>
                <TableCell align="center" sx={{ border: '1px solid rgba(100, 100, 100, 1)', fontWeight: 'bold', color: '#ffff' }}>Update</TableCell>
                <TableCell align="center" sx={{ border: '1px solid rgba(100, 100, 100, 1)', fontWeight: 'bold', color: '#ffff' }}>Delete</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {filteredEmployees.map((employee) => (
                <TableRow
                  key={employee.id}
                >
                  <TableCell component="th" scope="row" sx={{ border: '1px solid rgba(100, 100, 100, 1)', fontWeight: 500 }}>
                    {employee.name}
                  </TableCell>
                  <TableCell align="left" sx={{ border: '1px solid rgba(100, 100, 100, 1)', fontWeight: 500 }}>{employee.email}</TableCell>
                  <TableCell align="center" sx={{ border: '1px solid rgba(100, 100, 100, 1)', fontWeight: 500 }}>{employee.department}</TableCell>
                  <TableCell align="center" sx={{ border: '1px solid rgba(100, 100, 100, 1)', fontWeight: 500 }}>{employee.salary}</TableCell>
                  <TableCell align="center" sx={{ border: '1px solid rgba(100, 100, 100, 1)' }}>
                    <Button
                      variant="contained"
                      color="secondary"
                      onClick={() => navigate(`/edit/${employee.id}`)}
                      startIcon={<EditIcon />}
                      size="small"
                    >
                      Update
                    </Button>
                  </TableCell>
                  <TableCell align="center" sx={{ border: '1px solid rgba(100, 100, 100, 1)' }}>
                    <Button
                      variant="contained"
                      color="error"
                      onClick={() => handleOpen(employee.id)}
                      startIcon={<DeleteIcon />}
                      size="small"
                    >
                      Delete
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}

      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Confirm Delete"}
        </DialogTitle>
        <DialogContent>
          <Typography>
            Are you sure you want to delete this employee?
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleDelete} color="error" autoFocus>
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default EmployeeList; 
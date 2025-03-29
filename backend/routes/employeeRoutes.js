const express = require('express');
const router = express.Router();
const {
  getAllEmployees,
  getEmployeeById,
  createEmployee,
  updateEmployee,
  deleteEmployee,
  searchEmployees
} = require('../controllers/employeeController');

// GET all employees
router.get('/', getAllEmployees);

// GET search employees
router.get('/search', searchEmployees);

// GET employee by ID
router.get('/:id', getEmployeeById);

// POST new employee
router.post('/', createEmployee);

// PUT update employee
router.put('/:id', updateEmployee);

// DELETE employee
router.delete('/:id', deleteEmployee);

module.exports = router; 
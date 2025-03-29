const { pool } = require('../config/db');

class Employee {
  // Get all employees
  static async getAll() {
    try {
      const [rows] = await pool.query('SELECT * FROM employees');
      return rows;
    } catch (error) {
      throw error;
    }
  }

  // Get employee by ID
  static async getById(id) {
    try {
      const [rows] = await pool.query('SELECT * FROM employees WHERE id = ?', [id]);
      return rows[0];
    } catch (error) {
      throw error;
    }
  }

  // Create new employee
  static async create(employee) {
    try {
      const { name, email, department, salary } = employee;
      const [result] = await pool.query(
        'INSERT INTO employees (name, email, department, salary) VALUES (?, ?, ?, ?)',
        [name, email, department, salary]
      );
      return result.insertId;
    } catch (error) {
      throw error;
    }
  }

  // Update employee
  static async update(id, employee) {
    try {
      const { name, email, department, salary } = employee;
      const [result] = await pool.query(
        'UPDATE employees SET name = ?, email = ?, department = ?, salary = ? WHERE id = ?',
        [name, email, department, salary, id]
      );
      return result.affectedRows;
    } catch (error) {
      throw error;
    }
  }

  // Delete employee
  static async delete(id) {
    try {
      const [result] = await pool.query('DELETE FROM employees WHERE id = ?', [id]);
      return result.affectedRows;
    } catch (error) {
      throw error;
    }
  }

  // Search employees
  static async search(query) {
    try {
      const { name, department, minSalary, maxSalary } = query;
      let sql = 'SELECT * FROM employees WHERE 1=1';
      const params = [];

      if (name) {
        sql += ' AND name LIKE ?';
        params.push(`%${name}%`);
      }

      if (department) {
        sql += ' AND department = ?';
        params.push(department);
      }

      if (minSalary) {
        sql += ' AND salary >= ?';
        params.push(minSalary);
      }

      if (maxSalary) {
        sql += ' AND salary <= ?';
        params.push(maxSalary);
      }

      const [rows] = await pool.query(sql, params);
      return rows;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = Employee; 
-- Create database
CREATE DATABASE IF NOT EXISTS employee_management;

-- Use database
USE employee_management;

-- Create employees table
CREATE TABLE IF NOT EXISTS employees (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  email VARCHAR(100) NOT NULL UNIQUE,
  department VARCHAR(50) NOT NULL,
  salary DECIMAL(10, 2) NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Insert sample data
INSERT INTO employees (name, email, department, salary) VALUES
('John Doe', 'john.doe@example.com', 'Engineering', 75000.00),
('Jane Smith', 'jane.smith@example.com', 'HR', 65000.00),
('Bob Johnson', 'bob.johnson@example.com', 'Marketing', 70000.00),
('Sara Williams', 'sara.williams@example.com', 'Engineering', 85000.00),
('Mike Brown', 'mike.brown@example.com', 'Finance', 90000.00),
('Emily Davis', 'emily.davis@example.com', 'HR', 62000.00),
('Alex Wilson', 'alex.wilson@example.com', 'Engineering', 78000.00),
('Lisa Taylor', 'lisa.taylor@example.com', 'Marketing', 72000.00),
('David Miller', 'david.miller@example.com', 'Finance', 95000.00),
('Olivia Moore', 'olivia.moore@example.com', 'HR', 67000.00); 
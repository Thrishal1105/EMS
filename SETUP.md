# Employee Management System Setup Guide

## Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher)
- MySQL (v5.7 or higher)

## Database Setup

1. Log into MySQL:
   ```
   mysql -u root -p
   ```

2. Import the database schema:
   ```
   mysql -u root -p < backend/database.sql
   ```

   Alternatively, you can copy the contents of `backend/database.sql` and paste them directly into the MySQL console.

## Backend Setup

1. Navigate to the backend directory:
   ```
   cd backend
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Configure environment variables:
   - Edit the `.env` file with your MySQL credentials if different from the defaults

4. Start the backend server:
   ```
   npm run dev
   ```

   The server should start on http://localhost:5000

## Frontend Setup

1. Open a new terminal window and navigate to the frontend directory:
   ```
   cd frontend
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Start the frontend application:
   ```
   npm start
   ```

   The application should open in your browser at http://localhost:3000

## Using the Application

1. View the list of employees on the homepage
2. Use the search form to filter employees by name, department, or salary range
3. Click "Add New Employee" to create a new employee record
4. Use the "Edit" and "Delete" buttons to modify or remove employees

## Troubleshooting

- If you encounter database connection issues, check your MySQL credentials in the `.env` file
- If the API requests fail, make sure both the backend and frontend servers are running
- For CORS issues, verify that the backend CORS middleware is properly configured

## Additional Resources

- MySQL Documentation: https://dev.mysql.com/doc/
- Express.js Documentation: https://expressjs.com/
- React Documentation: https://reactjs.org/docs/getting-started.html 
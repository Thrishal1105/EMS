# Employee Management System

## Overview

The **Employee Management System** is a web-based application designed to manage employee records efficiently. It allows users to **add, update, delete, and search** employee details using a **MySQL database**. This system is built using **Node.js, Express.js, React.js, and MySQL**, following a RESTful API architecture.

## Features

✅ Employee Registration – Add new employees (Name, Email, Department, Salary, etc.).\
✅ View Employee List – Display employee details in a table format.\
✅ Edit Employee Details – Modify details like salary or department.\
✅ Delete Employees – Remove employees from the database.\
✅ Search & Filter – Search employees by name, department, or salary range.

## Tech Stack

- **Frontend:** React.js (HTML, CSS, JavaScript)
- **Backend:** Node.js with Express.js
- **Database:** MySQL
- **Other:** Axios for API calls, CORS for handling cross-origin requests

## Folder Structure

```
employee-management/
│── backend/               # Backend (Node.js + Express.js)
│   │── controllers/       # API controllers
│   │── models/            # Database models
│   │── routes/            # API routes
│   │── config/            # Database connection setup
│   │── server.js          # Main backend server file
│   └── package.json       # Backend dependencies
│
│── frontend/              # Frontend (React.js)
│   │── src/
│   │   │── components/    # React components
│   │   │── pages/         # Page components
│   │   │── services/      # API calls
│   │   │── App.js         # Main React component
│   │── public/
│   │── package.json       # Frontend dependencies
│   └── .env               # Environment variables
│
└── README.md              # Project documentation
```

## Database Schema (MySQL)

## API Endpoints (Backend)

| Method | Endpoint             | Description             |
| ------ | -------------------- | ----------------------- |
| GET    | `/api/employees`     | Fetch all employees     |
| GET    | `/api/employees/:id` | Fetch employee by ID    |
| POST   | `/api/employees`     | Add a new employee      |
| PUT    | `/api/employees/:id` | Update employee details |
| DELETE | `/api/employees/:id` | Remove an employee      |

## Installation & Setup

### Prerequisites

- Node.js & npm
- MySQL database

### Steps

1. **Clone the repository**

2. **Set up the database**

   - Import the provided SQL schema into MySQL.
   - Update database credentials in `server.js`.

3. **Install backend dependencies**

4. **Run the backend server**

5. **Install frontend dependencies**

6. **Run the frontend**

## Deployment

### Deploy Backend (Node.js + MySQL)

1. **Use a cloud provider like Render, Vercel, or AWS for backend deployment.**
2. **Host the MySQL database** using services like AWS RDS, PlanetScale, or ClearDB (Heroku Add-on).
3. **Update `.env` file** with the hosted database credentials.
4. **Deploy on a cloud platform** like:

### Deploy Frontend (React.js)

1. **Build the React app**
2. **Deploy on a hosting platform** like:
   - Vercel: `vercel deploy`
   - Netlify: Drag and drop the `build` folder
   - GitHub Pages: Use `gh-pages` package to deploy
3. **Update the backend API URL** in the frontend application (`.env` or API config file).

## Usage

- Open `http://localhost:3000` in your browser.
- Use the UI to add, update, delete, and search employees.
- Backend API runs on `http://localhost:5000`.

## Future Enhancements

- Role-based authentication (Admin/User roles)
- Export employee data as CSV/Excel
- Department-wise salary analytics

## Contributing

Contributions are welcome! Feel free to open an issue or submit a pull request.

## License

This project is licensed under the MIT License.

---

Developed by [Your Name](https://github.com/your-github). 🚀


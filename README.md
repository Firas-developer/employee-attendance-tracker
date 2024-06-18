# Employee Attendance Tracker
# Project Overview
The Employee Attendance Tracker is a comprehensive web application designed to streamline attendance management and work progress tracking for employees. It includes authentication using Firebase, frontend development with React, backend services using Node.js and Express.js with MongoDB, and integrates email notifications for daily reports to managers. An admin panel allows for centralized record management and reporting.

Technical Requirements
Authentication

Technology: Firebase
Features:
Secure login for employees and administrators.
Role-based access control (employee vs. admin).
Frontend

Technology: React
Features:
UI for employees to mark daily attendance (Present/Absent).
Form for submitting daily work progress with task details.
Responsive design for desktop and mobile.
Backend

Technology: Node.js, Express.js
Database: MongoDB
Features:
APIs for attendance marking and work progress submissions.
Automated email system for daily reports to managers.
Admin panel for managing records and generating reports.
Email Integration

Features:
Send daily reports to managers with attendance and work summary.
Admin Features

Functionality:
View, search, and manage employee records.
Download records in CSV or PDF formats.
Hosting

Considerations: Choose hosting platforms based on scalability and budget.
Deployment: Deploy both frontend and backend components.
Security

Implementation:
HTTPS for secure communication.
Data encryption and secure storage practices.

# Employee Attendance Tracker Documentation
# Installation Guide
Prerequisites
Before installing the Employee Attendance Tracker, ensure you have the following prerequisites installed:

Node.js: Ensure Node.js is installed on your system. You can download it from nodejs.org.
MongoDB: Install MongoDB and ensure it's running locally or accessible from your server. Visit mongodb.com for installation instructions.
Steps to Install
Clone the Repository

bash
Copy code
git clone <repository-url>
cd employee-attendance-tracker
Install Dependencies

Navigate to the backend and frontend directories separately and install dependencies.

bash
Copy code

# Install backend dependencies
cd backend
npm install

# Install frontend dependencies
cd ../frontend
npm install
Set Up Firebase

Create a Firebase project at firebase.google.com.
Configure Firebase Authentication (Email/Password) and get your Firebase config credentials.
Configure Environment Variables

Create a .env file in the backend directory and add the following:

env
Copy code
PORT=5000
MONGODB_URI=<your-mongodb-uri>
FIREBASE_API_KEY=<your-firebase-api-key>
FIREBASE_AUTH_DOMAIN=<your-firebase-auth-domain>
FIREBASE_PROJECT_ID=<your-firebase-project-id>
Replace <your-mongodb-uri> with your MongoDB connection string and <your-firebase-credentials> with your Firebase credentials.

Initialize MongoDB

Ensure MongoDB is running. If it's on a different server, update the MONGODB_URI accordingly.

Start the Application

bash
Copy code
# Start backend server (from the backend directory)
npm start

# Start frontend development server (from the frontend directory)
npm start
Access the Application

Open your browser and go to http://localhost:3000 to access the Employee Attendance Tracker application.

Operational Manual
Employee Usage
Login: Employees can log in using their registered email and password.
Attendance: Employees mark their attendance daily as 'Present' or 'Absent'.
Work Progress: Employees submit daily work progress including tasks completed.
Admin Usage
Login: Admins log in using their credentials.
Viewing Records: Admins can view all employee attendance records and work progress reports.
Downloading Reports: Admins can download records in CSV or PDF formats for further analysis.
API Documentation
Authentication
POST /api/auth/register: Register a new employee or admin.
Body: { email, password, role }
POST /api/auth/login: Login with existing credentials.
Body: { email, password }
Returns: JWT token for authentication.
Attendance
GET /api/attendance: Get all attendance records.
POST /api/attendance/mark: Mark attendance for the current day.
Body: { employeeId, status } (status: 'present' or 'absent')
Work Progress
GET /api/work: Get all work progress reports.
POST /api/work/submit: Submit daily work progress.
Body: { employeeId, tasks } (tasks: array of task objects)
Admin Operations
GET /api/admin/employees: Get all employees.
GET /api/admin/employee/
: Get employee details by ID.
POST /api/admin/employee: Create a new employee.
Body: { email, password, role }
PUT /api/admin/employee/
: Update employee details.
Body: { email, password, role }
DELETE /api/admin/employee/
: Delete an employee by ID.

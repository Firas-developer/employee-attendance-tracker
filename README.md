Employee Attendance Tracker Installation Guide
This guide will walk you through the steps required to set up and run the Employee Attendance Tracker project locally on your machine.

Prerequisites
Before you begin, ensure you have the following installed:

Node.js and npm (Node Package Manager): Download and install Node.js
MongoDB: Download and install MongoDB
Setup Instructions
1. Clone the Repository
Clone the Employee Attendance Tracker repository to your local machine:

bash
Copy code
git clone <repository_url>
2. Frontend Setup
Navigate to the frontend directory:

bash
Copy code
cd employee-attendance-tracker/frontend
Install dependencies:

bash
Copy code
npm install
Create a .env file in the frontend directory with the following content:

plaintext
Copy code
REACT_APP_API_BASE_URL=http://localhost:5000/api
3. Backend Setup
Navigate to the backend directory:

bash
Copy code
cd ../backend
Install dependencies:

bash
Copy code
npm install
Create a .env file in the backend directory with the following content:

plaintext
Copy code
PORT=5000
MONGODB_URI=<mongodb_connection_string>
FIREBASE_API_KEY=<your_firebase_api_key>
FIREBASE_AUTH_DOMAIN=<your_firebase_auth_domain>
FIREBASE_PROJECT_ID=<your_firebase_project_id>
FIREBASE_STORAGE_BUCKET=<your_firebase_storage_bucket>
FIREBASE_MESSAGING_SENDER_ID=<your_firebase_messaging_sender_id>
FIREBASE_APP_ID=<your_firebase_app_id>
FIREBASE_MEASUREMENT_ID=<your_firebase_measurement_id>
Replace <mongodb_connection_string> with your MongoDB connection string.

Replace <your_firebase_...> placeholders with your Firebase project details.

4. Database Setup
Make sure MongoDB is running on your machine.

5. Start the Application
Frontend
In the frontend directory, start the frontend server:

bash
Copy code
npm start
The frontend should now be accessible at http://localhost:3000.

Backend
In the backend directory, start the backend server:

bash
Copy code
npm start
The backend API should now be accessible at http://localhost:5000/api.

Testing
To run tests, execute the following commands:

Frontend
bash
Copy code
cd frontend
npm test
Backend
bash
Copy code
cd backend
npm test

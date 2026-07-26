# 🎓 Student Management System (MERN Stack)

A full-stack **Student Management System** built with the MERN stack.  
This application allows users to register, login securely, manage students, manage courses, and access a role-based dashboard.

---

## 🚀 Features

### 🔐 Authentication
- User Registration
- User Login
- JWT Based Authentication
- Password Hashing using bcrypt
- Protected Routes
- Role Based Access (Admin / Student)

---

### 👨‍🎓 Student Management
- Add Students
- View Students
- Update Student Information
- Delete Students
- Display Latest Students

---

### 📚 Course Management
- Add Courses
- View Courses
- Update Courses
- Delete Courses
- Display Latest Courses

---

### 📊 Dashboard
- Dynamic Statistics
- Total Students Count
- Total Courses Count
- Total Admin Count
- Student Chart
- Course Chart
- Latest Students Table
- Latest Courses Table
- Recent Activity

---

## 🛠️ Technologies Used

### Frontend
- React.js
- React Router DOM
- Axios
- React Icons
- CSS3

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT Authentication
- bcryptjs

---

## 📂 Project Structure
Student-Management-System
│
├── frontend
│ ├── src
│ │ ├── components
│ │ ├── pages
│ │ ├── api
│ │ └── router
│ └── package.json
│
├── backend
│ ├── config
│ ├── controllers
│ ├── middleware
│ ├── models
│ ├── routes
│ ├── server.js
│ └── package.json
│
└── README.md


---

# ⚙️ Installation & Setup

## Backend Setup

Go to backend folder:

```bash
cd backend

Install dependencies:

npm install

Create .env file:

PORT=5000

MONGO_URI=your_mongodb_connection_string

JWT_SECRET=your_secret_key

Run backend:

npm run dev

Backend server will start:

http://localhost:5000

## Frontend Setup
Open another terminal:

cd frontend

Install dependencies:

npm install

Start React application:

npm run dev

Frontend will run:

http://localhost:5173

##🔒 Security
JWT Token Authentication
Protected API Routes
Password Encryption using bcrypt
Environment Variables for Sensitive Data
Authentication Middleware
Error Handling Middleware

##📊 Dashboard Features
Modern Dark Dashboard UI
Responsive Design
Dynamic Student Count
Dynamic Course Count
Admin Count
Student Chart
Course Chart
Latest Students Table
Latest Courses Table
Recent Activity Section
Real-time Date and Time

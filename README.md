# 🎓 Student Management System

A modern and secure **Student Management System** built using the **MERN Stack**. This full-stack web application provides user authentication, role-based access, student management, course management, and an interactive dashboard with dynamic statistics and charts.

---

## 📌 Overview

The **Student Management System** is designed to simplify the management of students and courses through a centralized web-based platform.

The system provides:

* 🔐 Secure authentication
* 👨‍🎓 Complete student management
* 📚 Course management
* 👥 Role-based access control
* 📊 Interactive dashboard
* 📈 Dynamic statistics and charts
* 🕒 Recent activity tracking
* 📱 Responsive and modern UI

---

## ✨ Features

### 🔐 Authentication & Authorization

* ✅ User Registration
* ✅ User Login
* ✅ JWT-Based Authentication
* ✅ Password Hashing using `bcryptjs`
* ✅ Protected Routes
* ✅ Authentication Middleware
* ✅ Role-Based Access Control

  * 👑 Admin
  * 👨‍🎓 Student

---

### 👨‍🎓 Student Management

* ➕ Add New Students
* 👀 View All Students
* ✏️ Update Student Information
* 🗑️ Delete Students
* 📋 Display Latest Students
* 🔍 Manage Student Records

---

### 📚 Course Management

* ➕ Add New Courses
* 👀 View All Courses
* ✏️ Update Course Information
* 🗑️ Delete Courses
* 📋 Display Latest Courses
* 📚 Manage Course Records

---

### 📊 Dashboard

The dashboard provides a complete overview of the system through:

* 👨‍🎓 Total Students Count
* 📚 Total Courses Count
* 👑 Total Admin Count
* 📈 Student Statistics Chart
* 📊 Course Statistics Chart
* 🧾 Latest Students Table
* 📋 Latest Courses Table
* 🔔 Recent Activity
* 🕒 Real-Time Date and Time
* 🌙 Modern Dark Dashboard UI

---

## 🛠️ Technologies Used

### Frontend

* ⚛️ React.js
* 🛣️ React Router DOM
* 🔗 Axios
* 🎨 CSS3
* 🔤 React Icons

### Backend

* 🟢 Node.js
* 🚂 Express.js
* 🍃 MongoDB
* 🧩 Mongoose
* 🔐 JSON Web Token (JWT)
* 🔒 bcryptjs

### Development Tools

* Git
* GitHub
* VS Code
* Postman

---

## 🏗️ System Architecture

```text
┌──────────────────────┐
│      Frontend        │
│       React.js       │
└──────────┬───────────┘
           │
           │ REST API
           ▼
┌──────────────────────┐
│       Backend        │
│   Node.js + Express  │
└──────────┬───────────┘
           │
           │ Mongoose
           ▼
┌──────────────────────┐
│       Database       │
│       MongoDB        │
└──────────────────────┘
```

---

## 📂 Project Structure

```text
Student-Management-System/
│
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── api/
│   │   ├── router/
│   │   ├── assets/
│   │   └── App.jsx
│   │
│   └── package.json
│
├── backend/
│   ├── config/
│   │   └── db.js
│   │
│   ├── controllers/
│   │
│   ├── middleware/
│   │   ├── authMiddleware.js
│   │   └── errorMiddleware.js
│   │
│   ├── models/
│   │
│   ├── routes/
│   │
│   ├── server.js
│   ├── .env
│   └── package.json
│
└── README.md
```

---

# ⚙️ Installation & Setup

## 1️⃣ Clone the Repository

```bash
git clone https://github.com/your-username/Student-Management-System.git
```

Navigate into the project:

```bash
cd Student-Management-System
```

---

# 🔙 Backend Setup

Navigate to the backend folder:

```bash
cd backend
```

Install dependencies:

```bash
npm install
```

### Create a `.env` file

Create a `.env` file inside the `backend` folder:

```env
PORT=5000

MONGO_URI=your_mongodb_connection_string

JWT_SECRET=your_secret_key
```

### Start the Backend Server

For development:

```bash
npm run dev
```

The backend server will run on:

```text
http://localhost:5000
```

---

# 🎨 Frontend Setup

Open another terminal and navigate to the frontend folder:

```bash
cd frontend
```

Install dependencies:

```bash
npm install
```

Start the React development server:

```bash
npm run dev
```

The frontend application will run on:

```text
http://localhost:5173
```

---

# 🔒 Security Features

The application includes several security mechanisms:

* 🔐 JWT Token Authentication
* 🛡️ Protected API Routes
* 🔑 Password Hashing using `bcryptjs`
* 🔒 Environment Variables for Sensitive Information
* 👥 Role-Based Authorization
* 🧱 Authentication Middleware
* ⚠️ Error Handling Middleware

> ⚠️ Never upload your `.env` file or expose sensitive credentials on GitHub.

---

# 🔌 API Modules

The backend provides RESTful APIs for:

### Authentication

```text
POST    /api/auth/register
POST    /api/auth/login
```

### Students

```text
GET     /api/students
POST    /api/students
PUT     /api/students/:id
DELETE  /api/students/:id
```

### Courses

```text
GET     /api/courses
POST    /api/courses
PUT     /api/courses/:id
DELETE  /api/courses/:id
```

---

# 📊 Dashboard Highlights

The dashboard provides real-time insights into the system:

| Feature              | Description                                      |
| -------------------- | ------------------------------------------------ |
| 👨‍🎓 Total Students | Displays the total number of registered students |
| 📚 Total Courses     | Displays the total number of available courses   |
| 👑 Total Admins      | Shows the number of administrators               |
| 📈 Student Chart     | Visualizes student-related statistics            |
| 📊 Course Chart      | Displays course statistics                       |
| 🧾 Latest Students   | Shows recently added students                    |
| 📋 Latest Courses    | Shows recently added courses                     |
| 🔔 Recent Activity   | Displays recent system activities                |

---





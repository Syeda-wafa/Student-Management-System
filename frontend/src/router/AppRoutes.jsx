import { Routes, Route } from "react-router-dom";

import MainLayout from "../layouts/MainLayout";

import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import Dashboard from "../pages/Dashboard/Dashboard";
import Students from "../pages/Students/Students";
import Courses from "../pages/Courses/Courses";
import EditCourse from "../pages/EditCourse/EditCourse";
import Profile from "../pages/Profile/Profile";
import NotFound from "../pages/NotFound/NotFound";

import ProtectedRoute from "../routes/ProtectedRoute";

function AppRoutes() {
  return (
    <Routes>
      {/* Public Layout */}
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/courses" element={<Courses />} />
      </Route>

      {/* Public Routes */}
      <Route path="/login" element={<Login />} />

      <Route path="/register" element={<Register />} />

      {/* Dashboard (Admin + Student) */}
      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        }
      />

      {/* Student Only */}
      <Route
        path="/profile"
        element={
          <ProtectedRoute>
            <Profile />
          </ProtectedRoute>
        }
      />

      {/* Admin Only */}
      <Route
        path="/students"
        element={
          <ProtectedRoute role="admin">
            <Students />
          </ProtectedRoute>
        }
      />

      <Route
        path="/courses"
        element={
          <ProtectedRoute role="admin">
            <Courses />
          </ProtectedRoute>
        }
      />

      <Route
        path="/edit-course/:id"
        element={
          <ProtectedRoute role="admin">
            <EditCourse />
          </ProtectedRoute>
        }
      />

      {/* 404 */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default AppRoutes;

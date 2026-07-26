import "./Sidebar.css";

import { NavLink, useNavigate } from "react-router-dom";

import {
  FaHome,
  FaBookOpen,
  FaPlusCircle,
  FaUser,
  FaUsers,
  FaSignOutAlt,
} from "react-icons/fa";

function Sidebar({ sidebarOpen, setSidebarOpen }) {
  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem("user"));

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");

    navigate("/login");
  };

  return (
    <aside className={sidebarOpen ? "sidebar active" : "sidebar"}>
      <div className="sidebar-logo">
        <h2>StudentMS</h2>
      </div>

      <nav className="sidebar-menu">
        {/* Dashboard */}
        <NavLink to="/dashboard">
          <FaHome />
          <span>Dashboard</span>
        </NavLink>

        {/* Students - Admin Only */}
        {user?.role === "admin" && (
          <NavLink to="/students">
            <FaUsers />
            <span>Students</span>
          </NavLink>
        )}

        {/* Courses - Admin + Student */}
        <NavLink to="/courses">
          <FaBookOpen />
          <span>Courses</span>
        </NavLink>

        {/* Profile - Admin + Student */}
        <NavLink to="/profile">
          <FaUser />
          <span>Profile</span>
        </NavLink>
      </nav>

      <button className="logout-btn" onClick={handleLogout}>
        <FaSignOutAlt />
        <span>Logout</span>
      </button>
    </aside>
  );
}

export default Sidebar;

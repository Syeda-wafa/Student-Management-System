import "./Navbar.css";

import { Link, NavLink } from "react-router-dom";

import { FaGraduationCap, FaBars } from "react-icons/fa";

function Navbar() {
  return (
    <header className="navbar">
      <div className="container navbar-container">
        <Link to="/" className="logo">
          <FaGraduationCap className="logo-icon" />

          <span>StudentMS</span>
        </Link>

        <div className="auth-buttons">
          <Link to="/login" className="login-btn">
            Login
          </Link>

          <Link to="/register" className="register-btn">
            Register
          </Link>
        </div>

        <button className="menu-btn">
          <FaBars />
        </button>
      </div>
    </header>
  );
}

export default Navbar;

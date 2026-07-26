import "./Footer.css";

import { Link } from "react-router-dom";

import {
  FaGraduationCap,
  FaGithub,
  FaLinkedin,
  FaInstagram,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="footer-logo">
          <div className="logo">
            <FaGraduationCap />

            <span>StudentMS</span>
          </div>

          <p>A modern Student Management System built with the MERN Stack.</p>
        </div>

        <div className="footer-links">
          <h3>Quick Links</h3>

          <Link to="/">Home</Link>

          <Link to="/courses">Courses</Link>

          <Link to="/login">Login</Link>

          <Link to="/register">Register</Link>
        </div>

        <div className="footer-social">
          <h3>Follow Us</h3>

          <div className="social-icons">
            <a href="#">
              <FaGithub />
            </a>

            <a href="#">
              <FaLinkedin />
            </a>

            <a href="#">
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        © 2026 StudentMS. All Rights Reserved.
      </div>
    </footer>
  );
}

export default Footer;

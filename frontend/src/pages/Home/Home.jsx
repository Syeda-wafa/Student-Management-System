import "./Home.css";

import { Link } from "react-router-dom";

import {
  FaArrowRight,
  FaBookOpen,
  FaUserGraduate,
  FaChalkboardTeacher,
  FaShieldAlt,
  FaBolt,
  FaChartLine,
  FaMobileAlt,
  FaStar,
} from "react-icons/fa";

import Footer from "../../components/Footer/Footer";

function Home() {
  return (
    <>
      <section className="home">
        <div className="container hero">
          <div className="hero-left">
            <span className="badge">🎓 Modern Student Management</span>

            <h1>
              Learn Better
              <span> Manage Smarter.</span>
            </h1>

            <p>
              Manage students, organize courses, and track learning progress
              with a modern dashboard built using MERN Stack.
            </p>

            <div className="hero-buttons">
              <Link to="/register" className="primary-btn">
                Get Started
                <FaArrowRight />
              </Link>

              <Link to="/courses" className="secondary-btn">
                Explore Courses
              </Link>
            </div>
          </div>

          <div className="hero-right">
            <div className="hero-card">
              <FaUserGraduate />

              <h3>500+</h3>

              <p>Students</p>
            </div>

            <div className="hero-card">
              <FaBookOpen />

              <h3>50+</h3>

              <p>Courses</p>
            </div>

            <div className="hero-card">
              <FaChalkboardTeacher />

              <h3>20+</h3>

              <p>Teachers</p>
            </div>
          </div>
        </div>
      </section>

      <section className="features">
        <div className="container">
          <div className="section-title">
            <h2>Why Choose StudentMS?</h2>

            <p>
              Everything you need to manage students and courses in one modern
              platform.
            </p>
          </div>

          <div className="feature-grid">
            <div className="feature-card">
              <FaBookOpen />

              <h3>Course Management</h3>

              <p>Create, update and organize your courses easily.</p>
            </div>

            <div className="feature-card">
              <FaShieldAlt />

              <h3>Secure Authentication</h3>

              <p>JWT based login system with protected routes.</p>
            </div>

            <div className="feature-card">
              <FaBolt />

              <h3>Fast Performance</h3>

              <p>Built with React and Node.js for speed.</p>
            </div>

            <div className="feature-card">
              <FaChartLine />

              <h3>Analytics</h3>

              <p>Monitor courses and student activity.</p>
            </div>

            <div className="feature-card">
              <FaChalkboardTeacher />

              <h3>Teacher Friendly</h3>

              <p>Manage learning content with ease.</p>
            </div>

            <div className="feature-card">
              <FaMobileAlt />

              <h3>Responsive Design</h3>

              <p>Works perfectly on desktop, tablet and mobile.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="about">
        <div className="container about-container">
          <div className="about-left">
            <span className="about-tag">About StudentMS</span>

            <h2>A Complete Platform for Student & Course Management</h2>

            <p>
              StudentMS is built to simplify educational management. From
              authentication to course management, everything is organized in
              one secure dashboard.
            </p>

            <p>
              This project is developed using the MERN Stack with modern UI, JWT
              authentication, responsive design, and powerful CRUD
              functionality.
            </p>
          </div>

          <div className="about-right">
            <div className="about-box">
              <h3>100%</h3>

              <span>Responsive</span>
            </div>

            <div className="about-box">
              <h3>JWT</h3>

              <span>Authentication</span>
            </div>

            <div className="about-box">
              <h3>CRUD</h3>

              <span>Operations</span>
            </div>

            <div className="about-box">
              <h3>MERN</h3>

              <span>Full Stack</span>
            </div>
          </div>
        </div>
      </section>

      <section className="testimonials">
        <div className="container">
          <div className="section-title">
            <h2>What Our Students Say</h2>

            <p>Hear what students think about StudentMS.</p>
          </div>

          <div className="testimonial-grid">
            <div className="testimonial-card">
              <div className="stars">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>

              <p>
                "StudentMS made managing courses incredibly easy. The interface
                is clean and modern."
              </p>

              <h3>Ali Ahmed</h3>

              <span>MERN Stack Student</span>
            </div>

            <div className="testimonial-card">
              <div className="stars">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>

              <p>
                "Authentication and dashboard experience feels smooth and
                professional."
              </p>

              <h3>Sarah Khan</h3>

              <span>Frontend Developer</span>
            </div>

            <div className="testimonial-card">
              <div className="stars">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>

              <p>
                "Perfect MERN project for learning CRUD, JWT authentication and
                MongoDB."
              </p>

              <h3>Hamza Ali</h3>

              <span>Backend Developer</span>
            </div>
          </div>
        </div>
      </section>

      <section className="cta">
        <div className="container cta-container">
          <h2>Ready to Start Your Learning Journey?</h2>

          <p>
            Join StudentMS today and manage your courses smarter than ever
            before.
          </p>

          <Link to="/register" className="cta-btn">
            Get Started Now
          </Link>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default Home;

import "./Login.css";

import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

import toast from "react-hot-toast";
import API from "../../api/axios";

import {
  FaEnvelope,
  FaLock,
  FaEye,
  FaEyeSlash,
  FaUserGraduate,
} from "react-icons/fa";

function Login() {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);

  const [showPassword, setShowPassword] = useState(false);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      const res = await API.post("/auth/login", formData);

      localStorage.setItem("token", res.data.token);

      localStorage.setItem("user", JSON.stringify(res.data.user));

      toast.success(res.data.message);

      navigate("/dashboard");
    } catch (error) {
      toast.error(error.response?.data?.message || "Login Failed");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      navigate("/dashboard");
    }
  }, [navigate]);

  return (
    <section className="login">
      <div className="login-container">
        <div className="login-left">
          <FaUserGraduate className="login-icon" />

          <h1>Welcome Back!</h1>

          <p>
            Login to access your dashboard, manage courses and continue
            learning.
          </p>

          <div className="login-features">
            <span>✔ Secure Authentication</span>
            <span>✔ JWT Protected Routes</span>
            <span>✔ Modern Dashboard</span>
          </div>
        </div>

        <div className="login-right">
          <form className="login-form" onSubmit={handleSubmit}>
            <h2>Login</h2>

            <div className="input-box">
              <FaEnvelope />

              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="input-box">
              <FaLock />

              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Enter your password"
                value={formData.password}
                onChange={handleChange}
                required
              />

              <button
                type="button"
                className="eye-btn"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>

            <div className="login-options">
              <label>
                <input type="checkbox" />
                Remember Me
              </label>

              <Link to="#">Forgot Password?</Link>
            </div>

            <button type="submit" className="login-submit" disabled={loading}>
              {loading ? "Logging In..." : "Login"}
            </button>

            <p className="register-link">
              Don't have an account? <Link to="/register">Register</Link>
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Login;

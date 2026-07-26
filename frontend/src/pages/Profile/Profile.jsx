import "./Profile.css";

import { useEffect, useState } from "react";

import Sidebar from "../../components/Sidebar/Sidebar";
import DashboardTopbar from "../../components/DashboardTopbar/DashboardTopbar";

import API from "../../api/axios";

import toast from "react-hot-toast";

import {
  FaUserCircle,
  FaEnvelope,
  FaUserTag,
  FaUser,
  FaSave,
  FaLock,
  FaTimes,
} from "react-icons/fa";

function Profile() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const [loading, setLoading] = useState(true);

  const [saving, setSaving] = useState(false);

  const [showPasswordModal, setShowPasswordModal] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    role: "",
  });

  const [passwordData, setPasswordData] = useState({
    oldPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  useEffect(() => {
    fetchProfile();
  }, []);

  const fetchProfile = async () => {
    try {
      const res = await API.get("/auth/profile");

      setFormData({
        name: res.data.user.name,

        email: res.data.user.email,

        role: res.data.user.role,
      });
    } catch (error) {
      toast.error("Failed to load profile");
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,

      [e.target.name]: e.target.value,
    });
  };

  const handleUpdate = async (e) => {
    e.preventDefault();

    try {
      setSaving(true);

      const res = await API.put("/auth/profile", {
        name: formData.name,

        email: formData.email,
      });

      toast.success(res.data.message);

      const oldUser = JSON.parse(localStorage.getItem("user"));

      localStorage.setItem(
        "user",
        JSON.stringify({
          ...oldUser,

          name: res.data.user.name,

          email: res.data.user.email,
        }),
      );
    } catch (error) {
      toast.error(error.response?.data?.message || "Update Failed");
    } finally {
      setSaving(false);
    }
  };

  const handlePasswordChange = async (e) => {
    e.preventDefault();

    if (
      !passwordData.oldPassword ||
      !passwordData.newPassword ||
      !passwordData.confirmPassword
    ) {
      return toast.error("Please fill all fields");
    }

    if (passwordData.newPassword !== passwordData.confirmPassword) {
      return toast.error("Passwords do not match");
    }

    try {
      setSaving(true);

      const res = await API.put("/auth/change-password", {
        oldPassword: passwordData.oldPassword,

        newPassword: passwordData.newPassword,
      });

      toast.success(res.data.message);

      setPasswordData({
        oldPassword: "",
        newPassword: "",
        confirmPassword: "",
      });

      setShowPasswordModal(false);
    } catch (error) {
      toast.error(error.response?.data?.message || "Password Update Failed");
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return <h2 style={{ color: "white" }}>Loading...</h2>;
  }

  return (
    <div className="profile-page">
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

      <main className="profile-content">
        <DashboardTopbar toggleSidebar={() => setSidebarOpen(!sidebarOpen)} />

        <div className="profile-card">
          <FaUserCircle className="profile-avatar" />

          <h2>Update Profile</h2>

          <form onSubmit={handleUpdate}>
            <div className="input-group">
              <label>
                <FaUser />
                Name
              </label>

              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
              />
            </div>

            <div className="input-group">
              <label>
                <FaEnvelope />
                Email
              </label>

              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
            </div>

            <div className="input-group">
              <label>
                <FaUserTag />
                Role
              </label>

              <input value={formData.role} disabled />
            </div>

            <div className="profile-buttons">
              <button className="save-profile-btn">
                <FaSave />

                {saving ? "Updating..." : "Update Profile"}
              </button>

              <button type="button" className="cancel-btn">
                Cancel
              </button>
            </div>
          </form>

          <button
            className="password-open-btn"
            onClick={() => setShowPasswordModal(true)}
          >
            <FaLock />
            Change Password
          </button>
        </div>

        {showPasswordModal && (
          <div className="modal-overlay">
            <div className="password-modal">
              <h2>Change Password</h2>

              <form onSubmit={handlePasswordChange}>
                <input
                  type="password"
                  placeholder="Current Password"
                  value={passwordData.oldPassword}
                  onChange={(e) =>
                    setPasswordData({
                      ...passwordData,
                      oldPassword: e.target.value,
                    })
                  }
                />

                <input
                  type="password"
                  placeholder="New Password"
                  value={passwordData.newPassword}
                  onChange={(e) =>
                    setPasswordData({
                      ...passwordData,
                      newPassword: e.target.value,
                    })
                  }
                />

                <input
                  type="password"
                  placeholder="Confirm Password"
                  value={passwordData.confirmPassword}
                  onChange={(e) =>
                    setPasswordData({
                      ...passwordData,
                      confirmPassword: e.target.value,
                    })
                  }
                />

                <div className="profile-buttons">
                  <button className="save-profile-btn">
                    <FaSave />

                    {saving ? "Updating..." : "Change Password"}
                  </button>

                  <button
                    type="button"
                    className="cancel-btn"
                    onClick={() => setShowPasswordModal(false)}
                  >
                    <FaTimes />
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}

export default Profile;

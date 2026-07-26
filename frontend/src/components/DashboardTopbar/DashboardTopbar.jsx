import "./DashboardTopbar.css";

import { useState } from "react";
import { FaSearch, FaUserCircle } from "react-icons/fa";

function DashboardTopbar() {
  const [search, setSearch] = useState("");

  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <header className="dashboard-topbar">
      <div className="topbar-left">
        <h2>Dashboard</h2>
      </div>

      <div className="topbar-right">
        <div className="search-box">
          <FaSearch />

          <input
            type="text"
            placeholder="Search..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        <div className="profile-box">
          <FaUserCircle className="profile-icon" />

          <div>
            <h4>{user?.name || "Guest"}</h4>
            <span>{user?.role || "Admin"}</span>
          </div>
        </div>
      </div>
    </header>
  );
}

export default DashboardTopbar;

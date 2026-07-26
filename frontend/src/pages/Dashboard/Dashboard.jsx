import "./Dashboard.css";

import { useState, useEffect } from "react";

import API from "../../api/axios";

import Sidebar from "../../components/Sidebar/Sidebar";
import DashboardTopbar from "../../components/DashboardTopbar/DashboardTopbar";
import StudentChart from "../../components/Charts/Charts";
import CoursePieChart from "../../components/Charts/CoursePieChart";
import LatestStudents from "../../components/LatestStudents/LatestStudents";
import LatestCourses from "../../components/LatestCourses/LatestCourses";

import {
  FaUsers,
  FaBookOpen,
  FaChalkboardTeacher,
  FaCalendarAlt,
  FaClock,
} from "react-icons/fa";

function Dashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const [students, setStudents] = useState([]);
  const [courses, setCourses] = useState([]);

  const [activities, setActivities] = useState([]);

  const [currentTime, setCurrentTime] = useState(new Date());

  const [admins, setAdmins] = useState([]);

  const user = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    fetchDashboard();
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const fetchDashboard = async () => {
    try {
      const [studentRes, courseRes, userRes] = await Promise.all([
        API.get("/students"),
        API.get("/courses"),
        API.get("/users"),
      ]);

      setStudents(studentRes.data.students || []);

      setCourses(courseRes.data.courses || []);

      const adminUsers = (userRes.data.users || []).filter(
        (user) => user.role === "admin",
      );

      setAdmins(adminUsers);

      const latestStudents = (studentRes.data.students || [])
        .slice(-2)
        .reverse()
        .map((student) => ({
          id: student._id,
          text: `👨‍🎓 ${student.name} registered`,
        }));

      const latestCourses = (courseRes.data.courses || [])
        .slice(-2)
        .reverse()
        .map((course) => ({
          id: course._id,
          text: `📚 ${course.title} course added`,
        }));

      setActivities([...latestStudents, ...latestCourses]);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="dashboard">
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

      <main className="dashboard-content">
        <DashboardTopbar toggleSidebar={() => setSidebarOpen(!sidebarOpen)} />

        {/* Welcome Section */}
        <section className="welcome-section">
          <h1>Welcome Back 👋</h1>

          <p>Manage students, courses and your profile from one place.</p>
        </section>

        {/* Date */}

        <section className="date-time-card">
          <div className="date-box">
            <FaCalendarAlt />

            <div>
              <h3>Today's Date</h3>

              <p>
                {currentTime.toLocaleDateString("en-US", {
                  weekday: "long",
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </p>
            </div>
          </div>

          <div className="time-box">
            <FaClock />

            <div>
              <h3>Current Time</h3>

              <p>{currentTime.toLocaleTimeString()}</p>
            </div>
          </div>
        </section>

        {/* Statistics */}
        <section className="stats-section">
          <div className="stat-card">
            <div className="stat-icon icon-students">
              <FaUsers />
            </div>

            <div className="stat-info">
              <h2>{students.length}</h2>
              <p>Total Students</p>
            </div>
          </div>

          <div className="stat-card">
            <div className="stat-icon icon-courses">
              <FaBookOpen />
            </div>

            <div className="stat-info">
              <h2>{courses.length}</h2>
              <p>Total Courses</p>
            </div>
          </div>

          {user.role === "admin" && (
            <div className="stat-card">
              <div className="stat-icon icon-teachers">
                <FaChalkboardTeacher />
              </div>

              <div className="stat-info">
                <h2>{admins.length}</h2>

                <p>Total Admin</p>
              </div>
            </div>
          )}
        </section>

        {/* Charts / LatestStudents/course */}

        <section className="charts-section">
          <StudentChart students={students} />

          <CoursePieChart courses={courses} />
        </section>

        <section className="latest-section">
          <LatestStudents students={students} />

          <LatestCourses courses={courses} />
        </section>

        <section className="dashboard-bottom">
          {/* Progress Card */}

          <div className="progress-card">
            <h2>Learning Progress</h2>

            <div className="progress-item">
              <span>React</span>

              <span>90%</span>
            </div>

            <div className="progress-bar">
              <div className="progress-fill react"></div>
            </div>

            <div className="progress-item">
              <span>Node.js</span>

              <span>75%</span>
            </div>

            <div className="progress-bar">
              <div className="progress-fill node"></div>
            </div>

            <div className="progress-item">
              <span>MongoDB</span>

              <span>65%</span>
            </div>

            <div className="progress-bar">
              <div className="progress-fill mongo"></div>
            </div>
          </div>

          {/* Recent Activity */}

          <div className="activity-card">
            <h2>Recent Activity</h2>

            <ul>
              {activities.length > 0 ? (
                activities.map((activity) => (
                  <li key={activity.id}>{activity.text}</li>
                ))
              ) : (
                <li>No recent activity</li>
              )}
            </ul>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Dashboard;

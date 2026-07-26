import "./EditCourse.css";

import Sidebar from "../../components/Sidebar/Sidebar";
import DashboardTopbar from "../../components/DashboardTopbar/DashboardTopbar";

import { FaSave, FaTrash, FaArrowLeft, FaImage } from "react-icons/fa";

import { Link } from "react-router-dom";

function EditCourse() {
  return (
    <div className="edit-course-page">
      <Sidebar />

      <main className="edit-course-content">
        <DashboardTopbar />

        <div className="page-header">
          <div>
            <h1>Edit Course</h1>
            <p>Update your course information.</p>
          </div>

          <Link to="/courses" className="back-btn">
            <FaArrowLeft />
            Back
          </Link>
        </div>

        <form className="course-form">
          <div className="form-group">
            <label>Course Name</label>

            <input type="text" defaultValue="React Masterclass" />
          </div>

          <div className="form-group">
            <label>Instructor</label>

            <input type="text" defaultValue="John Doe" />
          </div>

          <div className="form-group">
            <label>Duration</label>

            <input type="text" defaultValue="8 Weeks" />
          </div>

          <div className="form-group">
            <label>Students Limit</label>

            <input type="number" defaultValue="120" />
          </div>

          <div className="form-group full-width">
            <label>Description</label>

            <textarea
              rows="6"
              defaultValue="Learn React from beginner to advanced level with projects."
            ></textarea>
          </div>

          <div className="form-group full-width">
            <label>Course Image</label>

            <div className="image-preview">
              <img
                src="https://via.placeholder.com/700x300?text=Course+Image"
                alt="course"
              />
            </div>

            <div className="upload-box">
              <FaImage />

              <p>Upload New Image</p>

              <input type="file" />
            </div>
          </div>

          <div className="button-group">
            <button className="update-btn">
              <FaSave />
              Update Course
            </button>

            <button type="button" className="delete-btn">
              <FaTrash />
              Delete
            </button>
          </div>
        </form>
      </main>
    </div>
  );
}

export default EditCourse;

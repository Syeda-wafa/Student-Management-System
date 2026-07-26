import "./LatestCourses.css";

import { useState } from "react";

function LatestCourses({ courses }) {
  const [showAll, setShowAll] = useState(false);

  const displayedCourses = showAll ? courses : courses.slice(0, 5);

  return (
    <div className="course-table-card">
      <div className="table-header">
        <h2>Latest Courses</h2>

        <button onClick={() => setShowAll(!showAll)}>
          {showAll ? "Show Less" : "View All"}
        </button>
      </div>

      <table>
        <thead>
          <tr>
            <th>Course Name</th>
            <th>Category</th>
            <th>Duration</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody>
          {displayedCourses.length === 0 ? (
            <tr>
              <td colSpan="4" style={{ textAlign: "center" }}>
                No Courses Found
              </td>
            </tr>
          ) : (
            displayedCourses.map((course) => (
              <tr key={course._id}>
                <td>{course.title}</td>

                <td>{course.category || "N/A"}</td>

                <td>{course.duration || "N/A"}</td>

                <td>
                  <span className="active">Active</span>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}

export default LatestCourses;

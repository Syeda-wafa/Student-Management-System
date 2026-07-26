import "./LatestStudents.css";

import { useState } from "react";

function LatestStudents({ students }) {
  const [showAll, setShowAll] = useState(false);

  const displayedStudents = showAll ? students : students.slice(0, 5);

  return (
    <div className="student-table-card">
      <div className="table-header">
        <h2>Latest Students</h2>

        <button onClick={() => setShowAll(!showAll)}>
          {showAll ? "Show Less" : "View All"}
        </button>
      </div>

      <table>
        <thead>
          <tr>
            <th>Name</th>

            <th>Course</th>

            <th>Email</th>

            <th>Status</th>
          </tr>
        </thead>

        <tbody>
          {displayedStudents.length === 0 ? (
            <tr>
              <td colSpan="4" style={{ textAlign: "center" }}>
                No Students Found
              </td>
            </tr>
          ) : (
            displayedStudents.map((student) => (
              <tr key={student._id}>
                <td>{student.name}</td>

                <td>{student.course || "N/A"}</td>

                <td>{student.email}</td>

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

export default LatestStudents;

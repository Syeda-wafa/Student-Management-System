import "./Students.css";

import { useEffect, useState } from "react";
import toast from "react-hot-toast";

import Sidebar from "../../components/Sidebar/Sidebar";
import DashboardTopbar from "../../components/DashboardTopbar/DashboardTopbar";
import AddStudentModal from "../../components/AddStudentModal/AddStudentModal";

import { FaSearch, FaPlus, FaEdit, FaTrash } from "react-icons/fa";

import API from "../../api/axios";

function Students() {
  const user = JSON.parse(localStorage.getItem("user"));

  const [students, setStudents] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);

  const [sidebarOpen, setSidebarOpen] = useState(false);

  const [currentPage, setCurrentPage] = useState(1);

  const studentsPerPage = 5;

  useEffect(() => {
    fetchStudents();
  }, []);

  const fetchStudents = async () => {
    try {
      const res = await API.get("/students");

      setStudents(res.data.students);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const filteredStudents = students.filter((student) =>
    student.name.toLowerCase().includes(search.toLowerCase()),
  );

  const indexOfLastStudent = currentPage * studentsPerPage;

  const indexOfFirstStudent = indexOfLastStudent - studentsPerPage;

  const currentStudents = filteredStudents.slice(
    indexOfFirstStudent,
    indexOfLastStudent,
  );

  const totalPages = Math.ceil(filteredStudents.length / studentsPerPage);

  const [showModal, setShowModal] = useState(false);

  const [selectedStudent, setSelectedStudent] = useState(null);

  const deleteStudent = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this student?",
    );

    if (!confirmDelete) return;

    try {
      const res = await API.delete(`/students/${id}`);

      toast.success(res.data.message);

      // Remove from table instantly
      setStudents((prevStudents) =>
        prevStudents.filter((student) => student._id !== id),
      );
    } catch (error) {
      toast.error(error.response?.data?.message || "Delete Failed");
    }
  };

  return (
    <div className="students-page">
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

      <main className="students-content">
        <DashboardTopbar toggleSidebar={() => setSidebarOpen(!sidebarOpen)} />

        <div className="students-header">
          <div>
            <h1>Students</h1>

            <p>Manage all registered students.</p>
          </div>

          {user?.role === "admin" && (
            <button
              className="add-student-btn"
              onClick={() => setShowModal(true)}
            >
              <FaPlus />
              Add Student
            </button>
          )}
        </div>

        <div className="search-box-student">
          <FaSearch />

          <input
            type="text"
            placeholder="Search Student..."
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
              setCurrentPage(1);
            }}
          />
        </div>

        {loading ? (
          <h2>Loading...</h2>
        ) : filteredStudents.length === 0 ? (
          <h2>No Students Found</h2>
        ) : (
          <div className="student-table">
            <table>
              <thead>
                <tr>
                  <th>Name</th>

                  <th>Email</th>

                  <th>Age</th>

                  <th>Course</th>

                  <th>Phone</th>

                  {user?.role === "admin" && <th>Actions</th>}
                </tr>
              </thead>

              <tbody>
                {currentStudents.map((student) => (
                  <tr key={student._id}>
                    <td>{student.name}</td>

                    <td>{student.email}</td>

                    <td>{student.age}</td>

                    <td>{student.course}</td>

                    <td>{student.phone}</td>

                    {user?.role === "admin" && (
                      <td>
                        <button
                          className="edit-btn"
                          title="Edit"
                          onClick={() => {
                            setSelectedStudent(student);
                            setShowModal(true);
                          }}
                        >
                          <FaEdit />
                        </button>

                        <button
                          className="delete-btn"
                          title="Delete"
                          onClick={() => deleteStudent(student._id)}
                        >
                          <FaTrash />
                        </button>
                      </td>
                    )}
                  </tr>
                ))}
              </tbody>
            </table>

            <div className="pagination">
              <button
                disabled={currentPage === 1}
                onClick={() => setCurrentPage(currentPage - 1)}
              >
                Previous
              </button>

              <span>
                Page {currentPage} of {totalPages || 1}
              </span>

              <button
                disabled={currentPage === totalPages || totalPages === 0}
                onClick={() => setCurrentPage(currentPage + 1)}
              >
                Next
              </button>
            </div>
          </div>
        )}

        <AddStudentModal
          show={showModal}
          onClose={() => {
            setShowModal(false);
            setSelectedStudent(null);
          }}
          selectedStudent={selectedStudent}
          students={students}
          setStudents={setStudents}
        />
      </main>
    </div>
  );
}

export default Students;

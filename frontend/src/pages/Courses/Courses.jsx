import "./Courses.css";

import { useEffect, useState } from "react";
import toast from "react-hot-toast";

import Sidebar from "../../components/Sidebar/Sidebar";
import DashboardTopbar from "../../components/DashboardTopbar/DashboardTopbar";
import AddCourseModal from "../../components/AddCourseModal/AddCourseModal";

import { FaSearch, FaPlus, FaEdit, FaTrash } from "react-icons/fa";

import API from "../../api/axios";

function Courses() {
  const user = JSON.parse(localStorage.getItem("user"));

  const [courses, setCourses] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);

  const coursesPerPage = 5;

  useEffect(() => {
    fetchCourses();
  }, []);

  const fetchCourses = async () => {
    try {
      const res = await API.get("/courses");
      setCourses(res.data.courses);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const filteredCourses = courses.filter((course) =>
    course.title?.toLowerCase().includes(search.toLowerCase()),
  );

  const indexOfLastCourse = currentPage * coursesPerPage;
  const indexOfFirstCourse = indexOfLastCourse - coursesPerPage;
  const currentCourses = filteredCourses.slice(
    indexOfFirstCourse,
    indexOfLastCourse,
  );

  const totalPages = Math.ceil(filteredCourses.length / coursesPerPage);

  const deleteCourse = async (id) => {
    const confirmDelete = window.confirm("Delete this course?");

    if (!confirmDelete) return;

    try {
      const res = await API.delete(`/courses/${id}`);
      toast.success(res.data.message);
      setCourses((prev) => prev.filter((course) => course._id !== id));
    } catch (error) {
      toast.error(error.response?.data?.message || "Delete Failed");
    }
  };

  return (
    <div className="courses-page">
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

      <main className="courses-content">
        <DashboardTopbar toggleSidebar={() => setSidebarOpen(!sidebarOpen)} />

        <div className="courses-header">
          <div>
            <h1>Courses</h1>
            <p>Manage all available courses.</p>
          </div>

          {user?.role === "admin" && (
            <button
              className="add-course-btn"
              onClick={() => setShowModal(true)}
            >
              <FaPlus />
              Add Course
            </button>
          )}
        </div>

        <div className="course-search">
          <FaSearch />
          <input
            type="text"
            placeholder="Search Course..."
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
              setCurrentPage(1);
            }}
          />
        </div>

        {loading ? (
          <h2>Loading...</h2>
        ) : filteredCourses.length === 0 ? (
          <h2>No Courses Found</h2>
        ) : (
          <div className="course-table">
            <table>
              <thead>
                <tr>
                  <th>Course</th>
                  <th>Instructor</th>
                  <th>Duration</th>
                  <th>Category</th>
                  <th>Description</th>
                  {user?.role === "admin" && <th>Actions</th>}
                </tr>
              </thead>

              <tbody>
                {currentCourses.map((course) => (
                  <tr key={course._id}>
                    <td>{course.title}</td>
                    <td>{course.instructor}</td>
                    <td>{course.duration}</td>
                    <td>{course.category}</td>
                    <td>{course.description}</td>

                    {user?.role === "admin" && (
                      <td>
                        <div className="action-buttons">
                          <button
                            className="edit-btn"
                            title="Edit"
                            onClick={() => {
                              setSelectedCourse(course);
                              setShowModal(true);
                            }}
                          >
                            <FaEdit />
                          </button>

                          <button
                            className="delete-btn"
                            title="Delete"
                            onClick={() => deleteCourse(course._id)}
                          >
                            <FaTrash />
                          </button>
                        </div>
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

        {user?.role === "admin" && (
          <AddCourseModal
            show={showModal}
            onClose={() => {
              setShowModal(false);
              setSelectedCourse(null);
            }}
            selectedCourse={selectedCourse}
            courses={courses}
            setCourses={setCourses}
          />
        )}
      </main>
    </div>
  );
}

export default Courses;

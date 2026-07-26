import "./AddCourseModal.css";

import { useState, useEffect } from "react";

import toast from "react-hot-toast";

import API from "../../api/axios";

function AddCourseModal({
  show,
  onClose,
  selectedCourse,
  courses,
  setCourses,
}) {
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    title: "",
    instructor: "",
    duration: "",
    category: "",
    description: "",
  });

  useEffect(() => {
    if (selectedCourse) {
      setFormData({
        title: selectedCourse.title || "",
        instructor: selectedCourse.instructor || "",
        duration: selectedCourse.duration || "",
        category: selectedCourse.category || "",
        description: selectedCourse.description || "",
      });
    } else {
      setFormData({
        courseName: "",
        instructor: "",
        duration: "",
        students: "",
      });
    }
  }, [selectedCourse, show]);

  if (!show) return null;

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log("Course Data:", formData);

    try {
      setLoading(true);

      let res;

      if (selectedCourse) {
        res = await API.put(`/courses/${selectedCourse._id}`, formData);

        setCourses(
          courses.map((course) =>
            course._id === selectedCourse._id ? res.data.course : course,
          ),
        );
      } else {
        res = await API.post("/courses", formData);

        setCourses([...courses, res.data.course]);
      }

      toast.success(res.data.message);

      onClose();
    } catch (error) {
      toast.error(error.response?.data?.message || "Operation Failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="modal-overlay">
      <div className="course-modal">
        <h2>{selectedCourse ? "Edit Course" : "Add Course"}</h2>

        <form onSubmit={handleSubmit}>
          <input
            name="title"
            placeholder="Course Title"
            value={formData.title}
            onChange={handleChange}
            required
          />

          <input
            name="instructor"
            placeholder="Instructor"
            value={formData.instructor}
            onChange={handleChange}
            required
          />

          <input
            name="duration"
            placeholder="Duration"
            value={formData.duration}
            onChange={handleChange}
            required
          />

          <input
            name="category"
            placeholder="Category"
            value={formData.category}
            onChange={handleChange}
            required
          />

          <textarea
            name="description"
            placeholder="Description"
            value={formData.description}
            onChange={handleChange}
            required
          />

          <div className="modal-buttons">
            <button type="button" className="cancel-btn" onClick={onClose}>
              Cancel
            </button>

            <button type="submit" className="save-btn">
              {loading
                ? "Saving..."
                : selectedCourse
                  ? "Update Course"
                  : "Save Course"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddCourseModal;

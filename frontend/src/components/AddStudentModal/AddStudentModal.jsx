import "./AddStudentModal.css";

import { useState, useEffect } from "react";
import toast from "react-hot-toast";
import API from "../../api/axios";

function AddStudentModal({
  show,
  onClose,
  selectedStudent,
  students,
  setStudents,
}) {
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    age: "",
    course: "",
    phone: "",
  });

  useEffect(() => {
    if (selectedStudent) {
      setFormData({
        name: selectedStudent.name,
        email: selectedStudent.email,
        age: selectedStudent.age,
        course: selectedStudent.course,
        phone: selectedStudent.phone,
      });
    } else {
      setFormData({
        name: "",
        email: "",
        age: "",
        course: "",
        phone: "",
      });
    }
  }, [selectedStudent, show]);

  if (!show) return null;

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

      let res;

      if (selectedStudent) {
        res = await API.put(`/students/${selectedStudent._id}`, formData);

        setStudents(
          students.map((student) =>
            student._id === selectedStudent._id ? res.data.student : student,
          ),
        );
      } else {
        res = await API.post("/students", formData);

        setStudents([...students, res.data.student]);
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
      <div className="student-modal">
        <h2>{selectedStudent ? "Edit Student" : "Add Student"}</h2>

        <form onSubmit={handleSubmit}>
          <input
            name="name"
            placeholder="Student Name"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <input
            name="email"
            type="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <input
            name="age"
            type="number"
            placeholder="Age"
            value={formData.age}
            onChange={handleChange}
            required
          />

          <input
            name="course"
            placeholder="Course"
            value={formData.course}
            onChange={handleChange}
            required
          />

          <input
            name="phone"
            placeholder="Phone"
            value={formData.phone}
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
                : selectedStudent
                  ? "Update Student"
                  : "Save Student"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddStudentModal;

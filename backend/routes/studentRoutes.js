const express = require("express");

const router = express.Router();

const protect = require("../middleware/authMiddleware");
const authorize = require("../middleware/roleMiddleware");

const {
  addStudent,
  getStudents,
  getStudentById,
  updateStudent,
  deleteStudent,
} = require("../controllers/studentController");

// Add Student (Admin Only)
router.post("/", protect, authorize("admin"), addStudent);

// Get All Students (Logged In Users)
router.get("/", protect, getStudents);

// Get Student By ID (Logged In Users)
router.get("/:id", protect, getStudentById);

// Update Student (Admin Only)
router.put("/:id", protect, authorize("admin"), updateStudent);

// Delete Student (Admin Only)
router.delete("/:id", protect, authorize("admin"), deleteStudent);

module.exports = router;
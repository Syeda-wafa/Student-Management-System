const express = require("express");

const router = express.Router();

const protect = require("../middleware/authMiddleware");
const authorize = require("../middleware/roleMiddleware");

const {
  addCourse,
  getCourses,
  getCourseById,
  updateCourse,
  deleteCourse,
} = require("../controllers/courseController");

// Add Course (Admin Only)
router.post("/", protect, authorize("admin"), addCourse);

// Get All Courses (Logged In Users)
router.get("/", protect, getCourses);

// Get Course By ID (Logged In Users)
router.get("/:id", protect, getCourseById);

// Update Course (Admin Only)
router.put("/:id", protect, authorize("admin"), updateCourse);

// Delete Course (Admin Only)
router.delete("/:id", protect, authorize("admin"), deleteCourse);

module.exports = router;
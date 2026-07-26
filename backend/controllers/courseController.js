const Course = require("../models/Course");

// Add Course
const addCourse = async (req, res) => {
  try {

    const {
      title,
      instructor,
      duration,
      category,
      description,
    } = req.body;

    if (
      !title ||
      !instructor ||
      !duration ||
      !category ||
      !description
    ) {
      return res.status(400).json({
        success: false,
        message: "Please fill all fields",
      });
    }

    const course = await Course.create({
      title,
      instructor,
      duration,
      category,
      description,
    });

    res.status(201).json({
      success: true,
      message: "Course Added Successfully",
      course,
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }
};

// Get All Courses
const getCourses = async (req, res) => {
  try {
    const courses = await Course.find().sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      count: courses.length,
      courses,
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Get Course By ID
const getCourseById = async (req, res) => {
  try {
    const course = await Course.findById(req.params.id);

    if (!course) {
      return res.status(404).json({
        success: false,
        message: "Course not found",
      });
    }

    res.status(200).json({
      success: true,
      course,
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Update Course
const updateCourse = async (req, res) => {
  try {
    const {
      title,
      instructor,
      duration,
      category,
      description,
    } = req.body;

    if (
      !title ||
      !instructor ||
      !duration ||
      !category ||
      !description
    ) {
      return res.status(400).json({
        success: false,
        message: "Please fill all fields",
      });
    }

    const course = await Course.findById(req.params.id);

    if (!course) {
      return res.status(404).json({
        success: false,
        message: "Course not found",
      });
    }

    course.title = title;
    course.instructor = instructor;
    course.duration = duration;
    course.category = category;
    course.description = description;

    await course.save();

    res.status(200).json({
      success: true,
      message: "Course Updated Successfully",
      course,
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Delete Course
const deleteCourse = async (req, res) => {
  try {
    const course = await Course.findById(req.params.id);

    if (!course) {
      return res.status(404).json({
        success: false,
        message: "Course not found",
      });
    }

    await Course.findByIdAndDelete(req.params.id);

    res.status(200).json({
      success: true,
      message: "Course Deleted Successfully",
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  addCourse,
  getCourses,
  getCourseById,
  updateCourse,
  deleteCourse,
};
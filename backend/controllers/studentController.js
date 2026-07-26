const Student = require("../models/Student");

// Add Student
const addStudent = async (req, res) => {
  try {
    const { name, email, age, course, phone, status } = req.body;

    if (!name || !email || !age || !course || !phone) {
      return res.status(400).json({
        success: false,
        message: "Please fill all fields",
      });
    }

    const existingStudent = await Student.findOne({ email });

    if (existingStudent) {
      return res.status(400).json({
        success: false,
        message: "Student already exists",
      });
    }

   const student = await Student.create({
  name,
  email,
  age,
  course,
  phone,
  status,
});

    res.status(201).json({
      success: true,
      message: "Student Added Successfully",
      student,
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Get All Students
const getStudents = async (req, res) => {
  try {
    const students = await Student.find();

    res.status(200).json({
      success: true,
      count: students.length,
      students,
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Get Student By ID
const getStudentById = async (req, res) => {
  try {

    const student = await Student.findById(req.params.id);

    if (!student) {
      return res.status(404).json({
        success: false,
        message: "Student not found",
      });
    }

    res.status(200).json({
      success: true,
      student,
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Update Student
const updateStudent = async (req, res) => {
  try {
    const { name, email, age, course, phone, status } = req.body;

    if (!name || !email || !age || !course || !phone) {
      return res.status(400).json({
        success: false,
        message: "Please fill all fields",
      });
    }

    const student = await Student.findById(req.params.id);

    if (!student) {
      return res.status(404).json({
        success: false,
        message: "Student not found",
      });
    }

    student.name = name;
    student.email = email;
    student.age = age;
    student.course = course;
    student.phone = phone;
    student.status = status;

    await student.save();

    res.status(200).json({
      success: true,
      message: "Student Updated Successfully",
      student,
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Delete Student
const deleteStudent = async (req, res) => {
  try {
    const student = await Student.findById(req.params.id);

    if (!student) {
      return res.status(404).json({
        success: false,
        message: "Student not found",
      });
    }

    await Student.findByIdAndDelete(req.params.id);

    res.status(200).json({
      success: true,
      message: "Student Deleted Successfully",
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  addStudent,
  getStudents,
  getStudentById,
  updateStudent,
  deleteStudent,
};
const express = require("express");

const router = express.Router();

const User = require("../models/User");

const protect = require("../middleware/authMiddleware");


// Get All Users
router.get("/", protect, async (req, res) => {

  try {

    const users = await User.find()
      .select("-password");


    res.status(200).json({
      success: true,
      users,
    });


  } catch (error) {

    res.status(500).json({
      success:false,
      message:error.message,
    });

  }

});


module.exports = router;
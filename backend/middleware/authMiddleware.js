const jwt = require("jsonwebtoken");

const protect = async (req, res, next) => {
  let token;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      // Get Token
      token = req.headers.authorization.split(" ")[1];

      // Verify Token
      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      // Save User Info
      req.user = decoded;

      // 👇 Temporary Debug
      console.log("Decoded User:", req.user);

      next();
    } catch (error) {
      return res.status(401).json({
        success: false,
        message: "Invalid Token",
      });
    }
  }

  if (!token) {
    return res.status(401).json({
      success: false,
      message: "Access Denied. No Token Provided",
    });
  }
};

module.exports = protect;
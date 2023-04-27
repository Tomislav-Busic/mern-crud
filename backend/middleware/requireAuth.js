const jwt = require("jsonwebtoken");

const requireAuth = (req, res, next) => {
  // Read token off cookies
  // Decode the token
  // Find user using decoded sub
  // Atach user to req
  // Continue on

  console.log("In middleware");
  next();
};

module.exports = requireAuth;

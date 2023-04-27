const jwt = require("jsonwebtoken");

const requireAuth = (req, res, next) => {
  // Read token off cookies
  const token = req.cookie.Authorization;
  // Decode the token
  const decoded = jwt.verify(token, "shhhhh");
  // Find user using decoded sub
  // Atach user to req
  // Continue on

  console.log("In middleware");
  next();
};

module.exports = requireAuth;

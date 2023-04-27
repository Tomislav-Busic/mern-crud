const jwt = require("jsonwebtoken");

const requireAuth = (req, res, next) => {
  console.log("In middleware");
  next();
};

module.exports = requireAuth;

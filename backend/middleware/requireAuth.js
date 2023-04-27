const jwt = require("jsonwebtoken");
const User = require("../models/user");

const requireAuth = async (req, res, next) => {
  try {
    // Read token off cookies
    const token = req.cookie.Authorization;

    // Decode the token
    const decoded = jwt.verify(token, process.env.SECRET_JWT);

    // Find user using decoded sub
    const user = await User.findById(decoded.sub);

    // Atach user to req
    // Continue on

    console.log("In middleware");
    next();
  } catch (error) {
    res.sendStatus(401);
  }
};

module.exports = requireAuth;

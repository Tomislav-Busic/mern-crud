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

    // Attach user to req
    req.user = user;

    // Continue on
    next();
  } catch (error) {
    res.sendStatus(401);
  }
};

module.exports = requireAuth;

const User = require("../models/user");

const signup = async (req, res) => {
  // Get the email and pasword from req body
  const { email, password } = req.body;

  // Create a user with req data
  await User.create({ email, password });

  res.status(201).json({ data: req.body });
};

const login = (req, res) => {};

const logout = (req, res) => {};

module.exports = { signup, login, logout };

const User = require("../models/user");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

const signup = async (req, res) => {
  try {
    // Get the email and pasword from req body
    const { email, password } = req.body;

    // Hash password
    const hashedPassword = bcrypt.hashSync(password, 8);

    // Create a user with req data
    await User.create({ email, password: hashedPassword });

    // Response
    res.status(201).json({ data: req.body });
  } catch (error) {
    console.log(error);
    res.sendStatus(400);
  }
};

const login = async (req, res) => {
  const { email, password } = req.body;

  // Check for user email
  const user = await User.findOne({ email });

  if (user && bcrypt.compare(password, user.password)) {
    res.status(200).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      token: generateToken(user._id),
    });
  } else {
    res.status(400);
    throw new Error("Invalid credentials");
  }
};

const logout = (req, res) => {};

// Generate JWT
const generateToken = (id) => {
  return jwt.sign({ id }, process.env.SECRET_JWT, {
    expiresIn: "30d",
  });
};

module.exports = { signup, login, logout };

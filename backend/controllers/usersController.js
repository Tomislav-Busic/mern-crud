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
  // Get the email and password off req body
  const { email, password } = req.body;

  // Find the user with requested email
  const user = await User.findOne({ email });
  if (!user) return res.sendStatus(401);

  // Compare send in password with found user password hash
  const passwordMatch = await bcrypt.compare(password, user.password);
  if (!passwordMatch) return res.sendStatus(401);

  // Create a jwt token (better version down)
  const exp = Date.now() + 1000 * 60 * 60 * 24 * 30;
  const token = jwt.sign({ sub: user._id, exp }, process.env.SECRET_JWT);

  // Set the cookie
  res.cookie("Authorization", token, {
    expires: new Date(exp),
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
  });

  // Send it
  res.status(200).json({ token });
};

const logout = (req, res) => {};

// Generate JWT
const generateToken = (id) => {
  return jwt.sign({ id }, process.env.SECRET_JWT, {
    expiresIn: "30d",
  });
};

module.exports = { signup, login, logout };

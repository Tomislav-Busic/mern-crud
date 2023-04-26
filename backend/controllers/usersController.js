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
  const user = await User.find({ email });
  if (!user) return res.sendStatus(401);

  // Compare send in password with found user password hash
  const passwordMatch = bcrypt.compareSync(password, user.password);
  if (!passwordMatch) return res.sendStatus(401);

  // Create a jwt token
  const exp = Date.now() + 1000 * 60 * 60 * 24 * 30;
  const token = jwt.sign({ sub: user._id, exp }, process.env.SECRET_JWT);

  // Send it
  res.json({ token });
};

const logout = (req, res) => {};

module.exports = { signup, login, logout };

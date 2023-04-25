const User = require("../models/user");
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

const login = (req, res) => {};

const logout = (req, res) => {};

module.exports = { signup, login, logout };

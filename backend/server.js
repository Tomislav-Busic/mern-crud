// Load env variables
if (process.env.NODE_ENV != "production") {
  require("dotenv").config();
}

// Import dependencies
const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
const {
  getAllNotes,
  getNoteById,
  createNewNote,
  updateNote,
  deleteNote,
} = require("./controllers/notesController");
const usersController = require("./controllers/usersController");

// Create an express app
const app = express();

// Configure express app
app.use(express.json());
app.use(cors());

// Connect to database
connectDB();

// Routing
app.post("/signup", usersController.signup);
app.post("/login", usersController.login);
app.get("/logout", usersController.logout);

app.get("/notes", getAllNotes);
app.get("/notes/:id", getNoteById);
app.post("/notes", createNewNote);
app.put("/notes/:id", updateNote);
app.delete("/notes/:id", deleteNote);

app.listen(process.env.PORT);

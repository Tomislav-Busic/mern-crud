// Load env variables
if (process.env.NODE_ENV != "production") {
  require("dotenv").config();
}

// Import dependencies
const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const connectDB = require("./config/db");
const {
  getAllNotes,
  getNoteById,
  createNewNote,
  updateNote,
  deleteNote,
} = require("./controllers/notesController");
const usersController = require("./controllers/usersController");
const requireAuth = require("./middleware/requireAuth");

// Create an express app
const app = express();

// Configure express app
app.use(express.json());
app.use(cookieParser());
app.use(cors());

// Connect to database
connectDB();

// Routing
app.post("/signup", usersController.signup);
app.post("/login", usersController.login);
app.get("/logout", usersController.logout);
app.get("/check-auth", requireAuth, usersController.checkAuth);

app.get("/notes", requireAuth, getAllNotes);
app.get("/notes/:id", requireAuth, getNoteById);
app.post("/notes", requireAuth, createNewNote);
app.put("/notes/:id", requireAuth, updateNote);
app.delete("/notes/:id", requireAuth, deleteNote);

app.listen(process.env.PORT);

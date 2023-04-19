// Load env variables
if (process.env.NODE_ENV != "production") {
  require("dotenv").config();
}

// Import dependencies
const express = require("express");
const connectDB = require("./config/db");
const Note = require("./models/note");

// Create an express app
const app = express();

// Configure express app
app.use(express.json());

// Connect to database
connectDB();

// Routing

app.get("/notes");

app.get("/notes/:id");

app.post("/notes");

app.put("/notes/:id");

app.delete("/notes/:id", async (req, res) => {
  // Get the id off the url
  const noteId = req.params.id;

  // Delete the record
  await Note.findByIdAndDelete(noteId);

  // Respond with id from the note
  res.json({ note: `Deleted note id ${noteId}` });
});


app.listen(process.env.PORT);

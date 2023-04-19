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

app.post("/notes", async (req, res) => {
  // Get the sent in data off request body
  const title = req.body.title;
  const body = req.body.body;

  // Create a note with it
  const note = await Note.create({
    title: title,
    body: body,
  });

  // respond with the new note
  res.json({ note: note });
});

app.put("/notes/:id", async (req, res) => {
  // Get the id off the url
  const noteId = req.params.id;

  // Get the data off the req body
  const title = req.body.title;
  const body = req.body.body;

  // Find and update the record
   await Note.findByIdAndUpdate(noteId, {
     title: title,
     body: body,
   });

   // Find updated note
   const updatedNote = await Note.findById(noteId);

   // Respond with it
   res.json({ note: updatedNote });
});

app.delete("/notes/:id", async (req, res) => {
  // Get the id off the url
  const noteId = req.params.id;

  // Delete the record
  await Note.findByIdAndDelete(noteId);

  // Respond with id from the note
  res.json({ note: `Deleted note id ${noteId}` });
});


app.listen(process.env.PORT);

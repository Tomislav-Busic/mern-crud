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
app.get("/", (req, res) => {
  res.json({ hello: "World" });
});

app.post("/notes", async (req, res) => {
  // Get the sent in data off request body
  const title = req.body.title;
  const body = req.body.body;

  // Create a note with it
  await Note.create({
    title: title,
    body: body,
  });

  // respond with the new note
});


app.listen(process.env.PORT);

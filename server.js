// Load env variables
if (process.env.NODE_ENV != "production") {
  require("dotenv").config();
}

// Import dependencies
const express = require("express");
const connectDB = require("./config/db");

// Create an express app
const app = express();

// Connect to database
connectDB();

// Routing
app.get("/", (req, res) => {
  res.json({ hello: "World" });
});

app.post("/notes", (req, res) => {
  // Get the sent in data off request body
  // Create a note with it
  // respond with the new note
});


app.listen(process.env.PORT);

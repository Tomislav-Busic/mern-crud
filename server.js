// Import dependencies
const express = require("express");

// Create an express app
const app = express();

// Routing
app.get("/", (req, res) => {
  res.json("Hello world");
});

app.listen(3000);

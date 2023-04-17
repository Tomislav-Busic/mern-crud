// Import dependencies
const express = require("express");

// Create an express app
const app = express();

// Routing
app.get("/", (req, res) => {
  res.json({ hello: "World" });
});

app.listen(3000);

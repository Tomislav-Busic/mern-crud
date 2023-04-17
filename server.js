// Load env variables
if (process.env.NODE_ENV != "production") {
  require("dotenv").config();
}

// Import dependencies
const express = require("express");

// Create an express app
const app = express();

// Routing
app.get("/", (req, res) => {
  res.json({ hello: "World" });
});

app.listen(process.env.PORT);

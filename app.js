// app.js
const express = require("express");

const app = express();

const server = app.listen(3000, () => {
  console.log("server is running");
});

app.get("/", (req, res) => {
  res.send("hello world");
});

module.exports = { app, server };

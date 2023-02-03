/*
============================================
; Title:  index.js
; Author: Megan Walker
; Date:  01/28/2023
; Description: Server and route file for pets-r-us
;===========================================
*/

// Express and Node.js import statements
const express = require("express");
const nodemon = require("nodemon");
const path = require("path");

// Express app variable. Provides access to Express's built-in functions/classes.
// This creates the Express App
const app = express();

// Tells Express that the views (ejs pages) are in the views' folder.
app.set("views", path.join(__dirname, "views"));

// Tells Express to use ejs as it's view engine.
app.set("view engine", "ejs");

// Tells Express to use the public folder for static assets.
app.use('/styles', express.static(path.join(__dirname, 'public/styles')));
app.use('/images', express.static(path.join(__dirname, 'public/images')));

// Routes
app.get("/", (req, res) => {
  res.render("index");
});
app.get("/grooming", (req, res) => {
  res.render("grooming.ejs");
});
app.get("/boarding", (req, res) => {
  res.render("boarding.ejs");
});
app.get("/training", (req, res) => {
  res.render("training.ejs");
});
// Tells Express to listen on port 3000
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.info(`pets-r-us application started and listening on port ${PORT}`);
});

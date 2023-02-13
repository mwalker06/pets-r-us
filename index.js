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
const mongoose = require("mongoose");

// Import the Customer model
const Customer = require("./models/customer");

// Express app variable. Provides access to Express's built-in functions/classes.
// This creates the Express App
const app = express();

// Tells Express that the views (ejs pages) are in the views' folder.
app.set("views", path.join(__dirname, "views"));

// Tells Express to use ejs as it's view engine.
app.set("view engine", "ejs");

// Tells Express to use the public folder for static assets.
app.use("/styles", express.static(path.join(__dirname, "public/styles")));
app.use("/images", express.static(path.join(__dirname, "public/images")));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Routes
app.get("/", (req, res) => {
  res.render("index", {
    title: "Home",
  });
});
app.get("/grooming", (req, res) => {
  res.render("grooming.ejs", {
    title: "Grooming",
  });
});
app.get("/boarding", (req, res) => {
  res.render("boarding.ejs", {
    title: "Boarding",
  });
});
app.get("/training", (req, res) => {
  res.render("training.ejs", {
    title: "Training",
  });
});
app.get("/register", (req, res) => {
  console.log("register get page");
  res.render("register.ejs", {
    title: "Register",
  });
});

app.post("/register", function (req, res) {
  console.log(req.body);
  const firstName = req.body.firstName;
  const lastName = req.body.lastName;
  const customerId = req.body.customerId;
  const address = req.body.address;
  const city = req.body.city;
  const state = req.body.state;
  const zip = req.body.zip;
  const phone = req.body.phone;
  const email = req.body.email;
  const password = req.body.password;
  const confirmPassword = req.body.confirmPassword;

  console.log("Customer ID: " + customerId);
  console.log("Email: " + email);

  const customer = new Customer({
    firstName: firstName,
    lastName: lastName,
    customerId: customerId,
    address: address,
    city: city,
    state: state,
    zip: zip,
    phone: phone,
    email: email,
    password: password,
    confirmPassword: confirmPassword,
  });

  console.log("customer was created yo");

  customer.save(function (error) {
    if (error) {
      console.log(error);
      // handle error
    } else {
      console.log("no errors bruh");
      res.redirect("/");
    }
  });
});

// Tells Express to listen on port 3000
const PORT = process.env.PORT || 3000;

const CONN =
  "mongodb+srv://web340_admin:C7WxW7YSz*Lu@bellevueuniversity.1txnlsv.mongodb.net/web340DB";

// Mongoose connection string for Atlas here
mongoose
  .connect(CONN)
  .then(() => {
    console.log(
      "Connection to MongoDB database was successful\n  If you see this message it means you were able to connect to your MongoDB Atlas cluster"
    );
  })
  .catch((err) => {
    console.log("MongoDB Error: " + err.message);
  });


app.listen(PORT, () => {
  console.info(`pets-r-us application started and listening on port ${PORT}`);
});

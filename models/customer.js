/*
============================================
; Title:  customers.js
; Author: Megan Walker
; Date:  02/12/2023
; Description: customers model for pets-r-us
;===========================================
*/

// import mongoose
const mongoose = require("mongoose");

// create the document plan
const customerSchema = mongoose.Schema({
  firstName: {type: String, required: true},
  lastName: {type: String, required: true},
  customerId: {type: String, required: true, unique: true},
  address: {type: String, required: true},
  city: {type: String, required: true},
  state: {type: String, required: true},
  zip: {type: String, required: true},
  phone: {type: String, required: true},
  email: {type: String, required: true, unique: true},
  password: {type: String, required: true},
  confirmPassword: {type: String, required: true},
});

// export the model for use in creating documents
module.exports = mongoose.model("Customer", customerSchema);
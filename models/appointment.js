/*
============================================
; Title:  appointment.js
; Author: Megan Walker
; Date:  02/26/2023
; Description: appointment model for pets-r-us
;===========================================
*/

const mongoose = require('mongoose');

const appointmentSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true, 
    unique: false
  },
  lastName: {
    type: String,
    required: true,
    unique: false
  },
  email: {
    type: String,
    required: true,
    unique: false
  },
  service: {
    type: String,
    required: true,
    unique: false
  }
});

const Appointment = mongoose.model('Appointment', appointmentSchema);

module.exports = Appointment;

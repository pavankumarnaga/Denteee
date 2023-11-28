// models/appointmentModel.js
const mongoose = require('mongoose');

const appointmentSchema = new mongoose.Schema({
  doctor: String,
  date: String,
  notes: String,
});

const Appointment = mongoose.model('Appointment', appointmentSchema);

module.exports = Appointment;

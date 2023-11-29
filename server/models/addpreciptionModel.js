// models/prescriptionModel.js
const mongoose = require('mongoose');

const prescriptionSchema = new mongoose.Schema({
  dateRequired: { type: String },
  doctor: { type: String, required: true },
  prescriptionTemplate: { type: String, required: true },
  medicines: { type: [String], required: true },
  dosages: { type: [String], required: true },
  frequencies: { type: [String], required: true },
  durations: { type: [String], required: true },
  notes: { type: [String], required: true },
});

const Prescription = mongoose.model('Prescription', prescriptionSchema);

module.exports = Prescription;

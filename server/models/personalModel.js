const mongoose = require('mongoose');

const billingSchema = new mongoose.Schema({
  name: String,
  email: String,
  date: String,
  caseNumber: String,
  title: String,
  firstName: String,
  lastName: String,
  country: String,
  occupation: String,
  adharCard: String,
  gender: String,
  maritalStatus: String,
  emailAddress1: String,
  emailAddress2: String,
  phoneNumber: String,
  referenceSource: String,
  selectDoctor: String,
  language: String,
  selectPatient: String,
  selectRelation: String,
  notes: String,
  medicalAlerts: String,
  // Add more fields as needed
});

const Billing = mongoose.model('Personal1', billingSchema);

module.exports = Billing;

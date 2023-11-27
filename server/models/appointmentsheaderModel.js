// models/Billing.js
const mongoose = require('mongoose');

const billingSchema = new mongoose.Schema({
  name: String,
  code: String,
  age: Number,
  gender: String,
  contact: String,
  email: String,
  // Define more fields as needed
});

const Billing = mongoose.model('Patient', billingSchema);

module.exports = Billing;

// models/contactModel.js
const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({
  flatNo: String,
  road: String,
  city: String,
  state: String,
  country: String,
  pincode: String,
});

const Contact = mongoose.model('Contact', contactSchema);

module.exports = Contact;

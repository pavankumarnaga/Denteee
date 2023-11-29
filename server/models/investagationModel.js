const mongoose = require('mongoose');

const InvestigationSchema = new mongoose.Schema({
  date: String,
  temperature: String,
  bloodPressure: String,
  bloodSugar: String,
  weight: String,
  oxygenSaturation: String,
});

const Investigation = mongoose.model('Investigation', InvestigationSchema);

module.exports = Investigation;

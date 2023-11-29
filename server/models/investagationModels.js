// models/Investigation.js
const mongoose = require('mongoose');

const InvestigationSchema = new mongoose.Schema({
  customerId: String,
  temperature: String,
  bloodPressure: String,
  bloodSugar: String,
  weight: String,
  oxygenSaturation: String,
  investigationDate: String,
});

InvestigationSchema.pre('save', async function (next) {
  try {
    if (!this.customerId) {
      const maxCustomerId = await Investigation.findOne({}, { customerId: 1 })
        .sort({ customerId: -1 })
        .exec();

      const lastNumber = maxCustomerId ? parseInt(maxCustomerId.customerId?.substring(3)) || 0 : 0;
      const newNumber = lastNumber + 1;

      this.customerId = `INV${String(newNumber).padStart(4, '0')}`;
    }
    next();
  } catch (error) {
    next(error);
  }
});

const Investigation = mongoose.model('Investigation', InvestigationSchema);

module.exports = Investigation;

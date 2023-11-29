// models/billingModel.js
const mongoose = require('mongoose');

const BillingSchema = new mongoose.Schema({
  companyname: String,
  dateofanniversary: String,
  schoolname: String,
  tags: String,
  spousename: String,
});

const Billing = mongoose.model('Patribute', BillingSchema);

module.exports = Billing;

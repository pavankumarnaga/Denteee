const mongoose = require('mongoose');

const paymentSchema = new mongoose.Schema({
  date: String,
  paynow: Number,
  paymentMode: String,
  note: String,
});

const Payment = mongoose.model('Payment', paymentSchema);

module.exports = Payment;

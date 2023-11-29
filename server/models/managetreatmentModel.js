const mongoose = require('mongoose');

const BillingSchema = new mongoose.Schema({
    medicineName: String,
    moleculeName: String,
    dosage: String,
    frequency: String,
    duration: String,
    favourite: Boolean,
});

const Billing = mongoose.model('Managemedicine', BillingSchema);

module.exports = Billing;

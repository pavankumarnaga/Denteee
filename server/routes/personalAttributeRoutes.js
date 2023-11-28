// routes/billingRoutes.js
const express = require('express');
const billingController = require('../controllers/personalAttributeController');

const router = express.Router();

// Fetch all billing data
router.get('/Patribute', billingController.getAllBillingData);

// Delete a billing record by ID
router.delete('/Patribute/:id', billingController.deleteBillingRecord);

// Add a billing record
router.post('/Patribute', billingController.addBillingRecord);

module.exports = router;

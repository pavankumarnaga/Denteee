// billingRoutes.js
const express = require('express');
const billingController = require('../controllers/personalController');

const router = express.Router();

// Define API routes

// Fetch all billing data
router.get('/Personal1', billingController.getAllBillingData);

// Delete a billing record by ID
router.delete('/Personal1/:id', billingController.deleteBillingRecord);

// Add a billing record
router.post('/Personal1', billingController.addBillingRecord);

module.exports = router;

const express = require('express');
const router = express.Router();
const paymentController = require('../controllers/billpaymentController');

// Create a new payment
router.post('/newpayment', paymentController.createNewPayment);

// Fetch all payments
router.get('/newpayment', paymentController.getAllPayments);

// Update a payment
router.put('/newpayment/:id', paymentController.updatePayment);

// Delete a payment
router.delete('/newpayment/:id', paymentController.deletePayment);

module.exports = router;

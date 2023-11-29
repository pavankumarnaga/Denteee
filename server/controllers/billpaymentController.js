const Payment = require('../models/billpaymentModel');

// Create a new payment
exports.createNewPayment = async (req, res) => {
  try {
    const payment = new Payment(req.body);
    await payment.save();
    res.json(payment);
  } catch (error) {
    console.error('Error creating payment:', error);
    res.status(500).json({ error: 'An error occurred while creating the payment.' });
  }
};

// Fetch all payments
exports.getAllPayments = async (req, res) => {
  try {
    const payments = await Payment.find();
    res.json(payments);
  } catch (error) {
    console.error('Error fetching payments:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Update a payment
exports.updatePayment = async (req, res) => {
  const { id } = req.params;
  try {
    const updatedPayment = await Payment.findByIdAndUpdate(id, req.body, { new: true });
    res.json(updatedPayment);
  } catch (error) {
    console.error('Error updating payment:', error);
    res.status(500).json({ error: 'An error occurred while updating the payment.' });
  }
};

// Delete a payment
exports.deletePayment = async (req, res) => {
  const { id } = req.params;
  try {
    await Payment.findByIdAndDelete(id);
    res.sendStatus(204);
  } catch (error) {
    console.error('Error deleting payment:', error);
    res.status(500).json({ error: 'An error occurred while deleting the payment.' });
  }
};

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser')
const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/payment',
 { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

// Define a Payment schema
const paymentSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId, // Add this line
  receiptDate: String,
  receiptNumber: String,
  patientName: String,
  treatmentPayment: Number,
  statusDescription: String,
});

const Payment = mongoose.model('Payment', paymentSchema);


app.get('/api/payments', async (req, res) => {
  try {
    let payments = await Payment.find();
    // Handle search query
    const searchKeyword = req.query.search ? req.query.search.toLowerCase() : '';
    if (searchKeyword) {
      payments = payments.filter((payment) => {
        // Customize this based on your schema and search criteria
        const treatmentPaymentMatch = payment.treatmentPayment.toString().includes(searchKeyword);
        const otherMatches =
          payment.receiptDate.toLowerCase().includes(searchKeyword) ||
          payment.receiptNumber.toLowerCase().includes(searchKeyword) ||
          payment.patientName.toLowerCase().includes(searchKeyword) ||
          payment.statusDescription.toLowerCase().includes(searchKeyword);

        return treatmentPaymentMatch || otherMatches;
      });
    }

    res.json(payments);
  } catch (error) {
    console.error('Error fetching data:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});
// Update payment
app.put('/api/payments/:id', async (req, res) => {
  try {
    const paymentId = req.params.id;
    const updatedPayment = req.body; // Assuming you send the updated payment data in the request body

    // Find the payment by ID and update it
    const result = await Payment.findByIdAndUpdate(paymentId, updatedPayment, { new: true });

    res.json(result);
  } catch (error) {
    console.error('Error updating payment:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Delete payment
app.delete('/api/payments/:_id', async (req, res) => {
  try {
    const paymentId = req.params._id;

    // Find the payment by ID and delete it
    const result = await Payment.findByIdAndDelete(paymentId);

    if (result) {
      res.json({ message: 'Payment deleted successfully' });
    } else {
      res.status(404).json({ error: 'Payment not found' });
    }
  } catch (error) {
    console.error('Error deleting payment:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
  
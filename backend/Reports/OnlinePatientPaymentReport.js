const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();
const PORT = 5001; // Change the port as needed

app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/PatientPaymentReport', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const paymentSchema = new mongoose.Schema({
  Patientname: String,
  casenumber: String,
  Recipitnumber: String,
  Date: String,
  Amount: String,
  Paymentsource: String,
  Paymentstatus: String,
});

const Payment = mongoose.model('Payment', paymentSchema);


app.get('/api/payments', async (req, res) => {
    try {
      const payments = await Payment.find();
      res.json(payments);
    } catch (error) {
      console.error('Error fetching payment data:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });
  
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
  
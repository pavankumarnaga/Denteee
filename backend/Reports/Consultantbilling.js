const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();
const port = 5001;

app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/ClinicInsight', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const consultantBillingSchema = new mongoose.Schema({
  doctorName: String,
  patientNumber: String,
  receiptNo: String,
  date: String,
  amount: Number,
});

const ConsultantBilling = mongoose.model('ConsultantBilling', consultantBillingSchema);

// Fetch real consultant billing data from the database
app.get('/api/consultantBilling', async (req, res) => {
  try {
    const consultantBillingData = await ConsultantBilling.find();
    res.json(consultantBillingData);
  } catch (error) {
    console.error('Error fetching consultant billing data:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
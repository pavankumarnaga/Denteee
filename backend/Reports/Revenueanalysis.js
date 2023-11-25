const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const port = 5001;

app.use(cors());
app.use(express.json());

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/revenueDB', { useNewUrlParser: true, useUnifiedTopology: true });
const connection = mongoose.connection;

connection.once('open', () => {
  console.log('MongoDB connection established successfully');
});

// Define the Revenue schema
const revenueSchema = new mongoose.Schema({
  voucherType: String,
  voucherDate: String,
  voucherNo: String,
  refNo: String,
  patientName: String,
  costCenter: String,
  debitLedger: String,
  debitAmount: Number,
  creditLedger: String,
  creditAmount: Number,
  narration: String,
});

// Create the Revenue model
const Revenue = mongoose.model('Revenue', revenueSchema);

// API endpoint to get revenue data
app.get('/revenue-data', async (req, res) => {
  try {
    const revenueData = await Revenue.find();
    res.json(revenueData);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
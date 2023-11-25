const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5001;

mongoose.connect('mongodb://localhost:27017/standing', { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

const outstandingSchema = new mongoose.Schema({
  patientName: String,
  caseId: String,
  mobileNumber: String,
  treatmentTotalCost: Number,
  treatmentBilledCost: Number,
  amountPaid: Number,
  treatmentBalance: Number,
  billedBalance: Number,
});

const Outstanding = mongoose.model('Outstanding', outstandingSchema, 'outstandingReports');

app.use(cors());

app.get('/outstanding-report', async (req, res) => {
  try {
    const outstandingData = await Outstanding.find();
    res.json(outstandingData);
  } catch (error) {
    console.error('Error fetching outstanding report data:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5001;

mongoose.connect('mongodb://127.0.0.1/patientDatabase', { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

const patientSchema = new mongoose.Schema({

  patientName: String,
  mobile: String,
  attribute: String,
  value: String,
});

const Patient = mongoose.model('Patient', patientSchema, 'patients');

app.use(cors());

app.get('/patient-personal-report', async (req, res) => {
  try {
    const patientPersonalReportData = await Patient.find();
    res.json(patientPersonalReportData);
  } catch (error) {
    console.error('Error fetching patient personal report data:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
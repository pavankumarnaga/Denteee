const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5002;

mongoose.connect('mongodb://localhost:27017/wiseresport', { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

const doctorwiseReportSchema = new mongoose.Schema({
  treatmentDate: String,
  doctorName: String,
  patientName: String,
  treatment: String,
  treatmentTotalCost: String,
});

const DoctorwiseReport = mongoose.model('DoctorwiseReport', doctorwiseReportSchema, 'doctorwiseReport');

app.use(cors());

app.get('/doctorwise-report', async (req, res) => {
  try {
    const doctorwiseReportData = await DoctorwiseReport.find();
    res.json(doctorwiseReportData);
  } catch (error) {
    console.error('Error fetching doctorwise report data:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
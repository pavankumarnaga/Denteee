
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 5001;

// Middleware
app.use(express.json());
app.use(cors());

// MongoDB Connection
mongoose.connect('mongodb://127.0.0.1/generalReport', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const connection = mongoose.connection;

connection.once('open', () => {
  console.log('MongoDB connection established successfully');
});

// MongoDB Schema
const generalReportSchema = new mongoose.Schema({
  patientName: String,
  mobileNumber: String,
  registrationDate: String,
  address: String,
  gender: String,
  emailAddress: String,
});

const GeneralReport = mongoose.model('GeneralReport', generalReportSchema);

// API Endpoints
app.get('/generalReport', async (req, res) => {
  try {
    const reports = await GeneralReport.find().select('-_id');
    res.json(reports);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
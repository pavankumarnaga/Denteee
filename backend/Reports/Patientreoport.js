const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const port = 5001; // You can change the port if needed

app.use(cors());
app.use(express.json());

// MongoDB connection
mongoose.connect('mongodb://127.0.0.1/customPatientReport', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const customPatientReportSchema = new mongoose.Schema({
  patientName: String,
  mobileNumber: String,
  registrationDate: String,
  gender: String,
  emailAddress: String,
});

const CustomPatientReportModel = mongoose.model('CustomPatientReport', customPatientReportSchema);

// Define API routes
app.get('/custom-patient-report', async (req, res) => {
  try {
    const data = await CustomPatientReportModel.find();
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const port = 5001; // You can change the port if needed

app.use(cors());
app.use(express.json());

// MongoDB connection
mongoose.connect('mongodb://127.0.0.1/patientDocumentReport', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const patientDocumentReportSchema = new mongoose.Schema({
  patientName: String,
  mobileNumber: String,
  fileName: String,
  description: String,
  virtualFilePath: String,
  createdOn: String,
});

const PatientDocumentReportModel = mongoose.model('PatientDocumentReport', patientDocumentReportSchema);

// Define API routes
app.get('/patient-document-report', async (req, res) => {
  try {
    const data = await PatientDocumentReportModel.find();
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const port = 5001; // You can change the port if needed

app.use(cors());
app.use(express.json());

// MongoDB connection
mongoose.connect('mongodb://127.0.0.1/appointmentReport', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const appointmentReportSchema = new mongoose.Schema({
  caseNumber: String,
  doctorName: String,
  patientName: String,
  mobile: String,
  status: String,
  appointmentDate: String,
  arrivalTime: String,
  operationTime: String,
  completeTime: String,
  cancelledDate: String,
});

const AppointmentReportModel = mongoose.model('AppointmentReport', appointmentReportSchema);

// Define API routes
app.get('/appointment-report', async (req, res) => {
  try {
    const data = await AppointmentReportModel.find();
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

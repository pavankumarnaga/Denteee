const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 5001;

app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://127.0.0.1/POP1', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const appointmentSchema = new mongoose.Schema({
  patientType: String,
  patientName: String,
  date: String,
  selectedPatient: String,
  selectedDoctor: String,
  selectedChair: String,
  selectedTreatment: String,
  notes: String,
  startTime: String,
  duration: String,
  mobileNumber: String,
  patientTitle: String,
});

const Appointment = mongoose.model('POP1', appointmentSchema);

app.get('/existing', async (req, res) => {
  try {
    const existingPatients = await Appointment.find({ patientType: 'existing' });
    res.status(200).json(existingPatients);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.post('/existing', async (req, res) => {
  try {
    const newAppointmentData = req.body;
    newAppointmentData.patientType = 'existing';
    const newAppointment = new Appointment(newAppointmentData);
    await newAppointment.save();
    res.status(201).json(newAppointment);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.post('/new', async (req, res) => {
  try {
    const newAppointmentData = req.body;
    newAppointmentData.patientType = 'new';
    const newAppointment = new Appointment(newAppointmentData);
    await newAppointment.save();
    res.status(201).json(newAppointment);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
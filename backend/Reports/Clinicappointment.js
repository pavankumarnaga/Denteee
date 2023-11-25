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

const appointmentSchema = new mongoose.Schema({
  appointmentsScheduled: Number,
  totalWaitingPeriod: String,
  averageWaitingTime: Number,
});

const Appointment = mongoose.model('Appointment', appointmentSchema);

// Fetch real appointment statistics data from the database
app.get('/api/appointmentStatistics', async (req, res) => {
  try {
    const appointmentData = await Appointment.findOne();
    res.json(appointmentData);
  } catch (error) {
    console.error('Error fetching appointment statistics data:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

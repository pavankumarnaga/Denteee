const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();
const PORT = 5001; // Change the port as needed

app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/ClinicData', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const clinicStatisticsSchema = new mongoose.Schema({
  totalPatientsVisited: Number,
  patientsCheckedIn: Number,
  directCheckedIn: Number,
  newPatients: Number,
  referredByExisting: Number,
  referredByDoctor: Number,
  inWaitingArea: Number,
});

const ClinicStatistics = mongoose.model('ClinicStatistics', clinicStatisticsSchema);

app.get('/api/clinicStatistics', async (req, res) => {
  try {
    const clinicStatistics = await ClinicStatistics.findOne(); // Assuming you have a single document for clinic statistics
    res.json(clinicStatistics);
  } catch (error) {
    console.error('Error fetching clinic statistics data:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
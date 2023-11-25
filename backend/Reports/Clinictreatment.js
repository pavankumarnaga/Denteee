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

const treatmentSchema = new mongoose.Schema({
  totalTreatmentTime: String,
  treatmentsCompleted: Number,
  treatmentsCompletedOverall: Number,
  patientsInTreatment: Number,
  patientsWithCompletedTreatment: Number,
  patientsWithNoTreatmentEntry: Number,
  patientsWithOngoingTreatment: Number,
});

const Treatment = mongoose.model('Treatment', treatmentSchema);

// Fetch real treatment statistics data from the database
app.get('/api/treatmentStatistics', async (req, res) => {
  try {
    const treatmentData = await Treatment.findOne();
    res.json(treatmentData);
  } catch (error) {
    console.error('Error fetching treatment statistics data:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
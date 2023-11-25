const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const port = 5001; // You can change the port if needed

app.use(cors());
app.use(express.json());

// MongoDB connection
mongoose.connect('mongodb://127.0.0.1/waitingAnalysis', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const waitingAnalysisSchema = new mongoose.Schema({
  date: String,
  patientName: String,
  casenumber: String,
  reciptnumber: String,
  appointmentTime: String,
  checkIn: String,
  waitingTime: String,
  treatmentStartTime: String,
  treatmentCompletedTime: String,
  treatment: String,
});

const WaitingAnalysisModel = mongoose.model('WaitingAnalysis', waitingAnalysisSchema);

// Define API routes
app.get('/waiting-analysis', async (req, res) => {
  try {
    const data = await WaitingAnalysisModel.find();
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

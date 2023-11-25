const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const PORT = 5001; // Change the port to 3001

app.use(cors());

mongoose.connect('mongodb://127.0.0.1/Report', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const workReportSchema = new mongoose.Schema({
  treatment:String,
  treatmentDate:String,
  doctor:String,
  numTreatments:Number,
  numTeeth:Number,
  treatmentDiscount:String
  
});

const WorkReport = mongoose.models.WorkReport || mongoose.model('WorkReport', workReportSchema);

app.get('/workreport', async (req, res) => {
  try {
    const reports = await WorkReport.find();
    res.json(reports);
  } catch (error) {
    console.error('Error fetching work reports:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
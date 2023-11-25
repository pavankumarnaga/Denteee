const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const port = 5001; // You can change the port if needed

app.use(cors());
app.use(express.json());

// MongoDB connection
mongoose.connect('mongodb://127.0.0.1/labworkReport', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const labworkReportSchema = new mongoose.Schema({
  patientName: String,
  categoryName: String,
  orderNo: String,
  labWorkDate: String,
  supplierName: String,
  cost: String,
});

const LabworkReportModel = mongoose.model('LabworkReport', labworkReportSchema);

// Define API routes
app.get('/labwork-report', async (req, res) => {
  try {
    const data = await LabworkReportModel.find();
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

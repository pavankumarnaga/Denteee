
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5004;

app.use(cors());

// MongoDB connection
mongoose.connect('mongodb://127.0.0.1/second', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const valueSchema = new mongoose.Schema({
  sentOn: String,
  deliveryOn: String,
  subject: String,
  emailCount: String,
  isAttachment: String,
  attachmentCount: String,
  createdBy: String,
});

const Patient = mongoose.model('fayz', valueSchema);

app.use(bodyParser.json());

// Define API routes

// Fetch all billing data
app.get('/second', async (req, res) => {
  try {
    const data = await Patient.find();
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
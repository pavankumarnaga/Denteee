const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 5001;

app.use(cors());

// MongoDB connection
mongoose.connect('mongodb://127.0.0.1/ManageReference', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const ReferenceSchema = new mongoose.Schema({
  name: String,
  email: String,
  mobileNum: String,
  description: String,
});

const Reference = mongoose.model('ManageReference', ReferenceSchema);

app.use(bodyParser.json());

// Define API routes

// Fetch all reference data
app.get('/ManageReference', async (req, res) => {
  try {
    const data = await Reference.find();
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Add a reference record
app.post('/ManageReference', async (req, res) => {
  try {
    const referenceData = req.body;
    const newReferenceRecord = new Reference(referenceData);
    await newReferenceRecord.save();
    res.json({ message: 'Reference record created successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});



// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
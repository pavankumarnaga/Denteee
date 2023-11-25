const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5002;

app.use(cors());

// MongoDB connection
mongoose.connect('mongodb://127.0.0.1/Customer', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const PatientsSchema = new mongoose.Schema({
  customerview: String,
  category: String,
});

const Patient = mongoose.model('Cutomer', PatientsSchema);

app.use(bodyParser.json());

// Define API routes

// Fetch all billing data
app.get('/Customerview', async (req, res) => {
  try {
    const data = await Patient .find();
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});


// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
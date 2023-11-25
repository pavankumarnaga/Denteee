const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();
const port = 5001;

app.use(cors());
app.use(express.json());

// MongoDB connection setup
mongoose.connect('mongodb://127.0.0.1/Userlogo', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Define a schema for your data (adjust fields as needed)
const yourDataSchema = new mongoose.Schema({
  name: String,
  createdOn: String,
  usernamePatientName: String,
  eventTypeName: String,
  eventDetails: String,
});

// Create a model based on the schema
const YourData = mongoose.model('YourData', yourDataSchema);

// Endpoint to fetch data
app.get('/Yourdata', async (req, res) => {
  try {
    const data = await YourData.find();
    res.json(data);
  } catch (error) {
    console.error('Error fetching data:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
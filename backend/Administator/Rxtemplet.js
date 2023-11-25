// Create a file named server.js

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const port = process.env.PORT || 5000;

// MongoDB connection string, replace with your actual MongoDB URI
const mongoURI = 'mongodb://127.0.0.1:27017/dentee';

// Connect to MongoDB
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('MongoDB connected');
  })
  .catch((err) => {
    console.error('MongoDB connection error:', err);
  });

// Define the MedicationSchema
const MedicationSchema = new mongoose.Schema({
  medicine: String,
  dosage: String,
  frequency: String,
  duration: String,
  note: String,
});

const Medication = mongoose.model('Medication', MedicationSchema);

app.use(bodyParser.json());

// Serve the React app (build) from the frontend folder
app.use(express.static(path.join(__dirname, '../frontend/build')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../frontend/build/index.html'));
});

// Define API routes

app.get('/api/medication', (req, res) => {
  Medication.find()
    .then((medications) => res.json(medications))
    .catch((err) => res.status(400).json('Error: ' + err));
});

app.post('/api/medication', (req, res) => {
  const { medicine, dosage, frequency, duration, note } = req.body;
  const newMedication = new Medication({ medicine, dosage, frequency, duration, note });

  newMedication.save()
    .then(() => res.json(newMedication))
    .catch((err) => res.status(400).json('Error: ' + err));
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

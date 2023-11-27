const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const Ajv = require('ajv');
const cors = require('cors');

const app = express();
const port = 5001;

app.use(cors());
app.use(bodyParser.json());

mongoose.connect('mongodb://localhost:27017/prescriptions2', { useNewUrlParser: true, useUnifiedTopology: true });

const prescriptionSchema = new mongoose.Schema({
  dateRequired: { type: String },
  doctor: { type: String, required: true },
  prescriptionTemplate: { type: String, required: true },
  medicines: { type: [String], required: true },
  dosages: { type: [String], required: true },
  frequencies: { type: [String], required: true },
  durations: { type: [String], required: true },
  notes: { type: [String], required: true },
});

const Prescription = mongoose.model('Prescription', prescriptionSchema);

const ajv = new Ajv();
const validate = ajv.compile(prescriptionSchema.obj);

app.post('/api/prescriptions', async (req, res) => {
  const prescriptionData = req.body;

  const isValid = validate(prescriptionData);
  if (!isValid) {
    return res.status(400).json({ error: 'Invalid prescription data', details: validate.errors });
  }

  try {
    const prescription = await Prescription.create(prescriptionData);
    res.status(201).json(prescription);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
});
app.get('/api/prescriptions', async (req, res) => {
  try {
    const prescriptionData = await Prescription.find();
    res.json(prescriptionData);
  } catch (error) {
    console.error('Error fetching patient personal report data:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
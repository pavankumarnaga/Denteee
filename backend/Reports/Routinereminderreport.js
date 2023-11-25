const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const port = 5001; // You can change the port if needed

app.use(cors());
app.use(express.json());

// MongoDB connection
mongoose.connect('mongodb://127.0.0.1/routineRemainder', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const routineRemainderSchema = new mongoose.Schema({
  lastTreatmentDate: String,
  patientName: String,
  emailAddress1: String,
  emailAddress2: String,
  address: String,
  mobileNumber: String,
  contactNo: String,
});

const RoutineRemainderModel = mongoose.model('RoutineRemainder', routineRemainderSchema);

// Define API routes
app.get('/routine-remainder', async (req, res) => {
  try {
    const data = await RoutineRemainderModel.find();
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

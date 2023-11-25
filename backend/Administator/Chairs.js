const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 5001;

app.use(cors());
app.use(bodyParser.json());

// MongoDB connection for ClinicChair
mongoose.connect('mongodb://127.0.0.1/clinic', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const ClinicChairSchema = new mongoose.Schema({
  chairName: String,
  description: String,
});

const ClinicChair = mongoose.model('ClinicChair', ClinicChairSchema);

// Define API routes for ClinicChair
app.get('/clinic-chair', async (req, res) => {
  try {
    const data = await ClinicChair.find();
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.delete('/clinic-chair/:id', async (req, res) => {
  try {
    const deletedRecord = await ClinicChair.findByIdAndDelete(req.params.id);
    if (!deletedRecord) {
      return res.status(404).json({ error: 'Record not found' });
    }
    res.json({ message: 'Record deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.post('/clinic-chair', async (req, res) => {
  try {
    const chairData = req.body;
    const newClinicChair = new ClinicChair(chairData);
    await newClinicChair.save();
    const updatedData = await ClinicChair.find(); // Fetch updated data after posting
    res.json({ message: 'Clinic chair record created successfully', data: updatedData });
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

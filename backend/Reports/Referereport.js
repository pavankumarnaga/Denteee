const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');


const app = express();
const PORT = 5001; // Change the port as needed

app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/ReferrerReport', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const referrerSchema = new mongoose.Schema({
  Select: Number,
  RegistrationDate: String,
  ReferrerName: String,
  ReferredBy: String,
  MobileNumber: String,
  EmailAddress: String,
});

const Referrer = mongoose.model('Referrer', referrerSchema);

app.get('/api/referrers', async (req, res) => {
  try {
    const referrers = await Referrer.find();
    res.json(referrers);
  } catch (error) {
    console.error('Error fetching referrer data:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5001;

app.use(bodyParser.json());
app.use(cors());

// Connect to MongoDB (Change the database name and URL if needed)
mongoose.connect('mongodb://127.0.0.1/consent-form', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => {
    console.log('MongoDB database connection established successfully');
  })
  .catch((error) => {
    console.error('MongoDB connection error:', error);
  });

// Create a data model for consent forms
const consentSchema = new mongoose.Schema({
  name: String,
  age: Number,
  relativeName: String,
  treatmentDescription: String,
  consentText: String,
  date: String,
  place: String,
  signature: String,
  time: String,
});

const ConsentForm = mongoose.model('ConsentForm', consentSchema);

// Add a consent form record
app.post('/add-consent-form', async (req, res) => {
  try {
    const {
      name, age, relativeName, treatmentDescription,
      consentText, date, place, signature, time
    } = req.body;

    const newConsentForm = new ConsentForm({
      name, age, relativeName, treatmentDescription,
      consentText, date, place, signature, time
    });

    await newConsentForm.save();
    res.json({ message: 'Consent form data added successfully' });
  } catch (error) {
    console.error('Error adding consent form data:', error);
    res.status(500).json({ error: 'Failed to add consent form data' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

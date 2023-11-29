const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5001;

app.use(bodyParser.json());
app.use(cors());

mongoose.connect('mongodb://127.0.0.1/consentform', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => {
    console.log('MongoDB database connection established successfully');
  })
  .catch((error) => {
    console.error('MongoDB connection error:', error);
  });

const consentSchema = new mongoose.Schema({
  title: String,
  category: String,
  name: String,
  age: Number,
  relativeName: String,
  treatmentDescription: String,
  date: String,
  place: String,
  signature: String,
  time: String,
  action: String,
});

const ConsentForm = mongoose.model('ConsentForm', consentSchema);

// Add a consent form record
app.post('/consentform', async (req, res) => {
  try {
    const {
      title, category, name, age, relativeName, treatmentDescription,
      date, place, signature, time, action
    } = req.body;

    const newConsentForm = new ConsentForm({
      title, category, name, age, relativeName, treatmentDescription,
      date, place, signature, time, action
    });

    await newConsentForm.save();
    res.json({ message: 'Consent form data added successfully' });
  } catch (error) {
    console.error('Error adding consent form data:', error);
    res.status(500).json({ error: 'Failed to add consent form data' });
  }
});

// Fetch all consent forms
app.get('/consentforms', async (req, res) => {
  try {
    const consentForms = await ConsentForm.find();
    res.json(consentForms);
  } catch (error) {
    console.error('Error fetching consent forms:', error);
    res.status(500).json({ error: 'Failed to fetch consent forms' });
  }
});

// Update a consent form
app.put('/consentforms/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const {
      title, category, name, age, relativeName, treatmentDescription,
      date, place, signature, time, action
    } = req.body;

    const updatedConsentForm = await ConsentForm.findByIdAndUpdate(
      id,
      {
        title, category, name, age, relativeName, treatmentDescription,
        date, place, signature, time, action
      },
      { new: true }
    );

    if (!updatedConsentForm) {
      return res.status(404).json({ error: 'Consent form not found.' });
    }

    res.json(updatedConsentForm);
  } catch (error) {
    console.error('Error updating consent form:', error);
    res.status(500).json({ error: 'Unable to update consent form.' });
  }
});

// Delete a consent form
app.delete('/consentforms/:id', async (req, res) => {
  try {
    const { id } = req.params;

    const deletedConsentForm = await ConsentForm.findByIdAndRemove(id);

    if (!deletedConsentForm) {
      return res.status(404).json({ error: 'Consent form not found.' });
    }

    res.json(deletedConsentForm);
  } catch (error) {
    console.error('Error deleting consent form:', error);
    res.status(500).json({ error: 'Unable to delete consent form.' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

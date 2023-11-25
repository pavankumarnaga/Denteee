const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const port = 5000;
app.use(express.json());
app.use(cors());

const mongoURI = 'mongodb://localhost:27017/personalize'; 
mongoose
  .connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });



const formDataSchema = new mongoose.Schema({
    receipt: String,
    invoice: String,
    currency: String,
    dayview: String,
    codeprefix: String,
    senderId: String,
    language: String,
    numbering: String,
    cancel: String,
    confirmweb: String,
    recordEdit: String,
    consultationoff: String,
    feedback: String,
    sms: String,
    email: String

});


const FormData = mongoose.model('Personalizesetting', formDataSchema);

app.post('/personal', async (req, res) => {
  const formData = req.body;

  try {
    const newFormData = new FormData(formData);

    await newFormData.save();

    console.log('Form data saved successfully');
    res.status(200).json({ message: 'Form data saved successfully' });
  } catch (error) {
    console.error('Error saving form data:', error);
    res.status(500).json({ message: 'An error occurred while saving the form data' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
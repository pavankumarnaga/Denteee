const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 5001;

// MongoDB connection string, replace with your actual MongoDB URI
const mongoURI = 'mongodb://127.0.0.1/email_template';

// Connect to MongoDB
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('MongoDB connected');
  })
  .catch((err) => {
    console.error('MongoDB connection error:', err);
  });

// Define the EmailTemplateSchema
const EmailTemplateSchema = new mongoose.Schema({
  subject: String,
  body: String,
  attachments: String, 
});

const EmailTemplate = mongoose.model('EmailTemplate', EmailTemplateSchema);

app.use(bodyParser.json());

// Enable CORS for your Express app
app.use(cors());

app.post('/api/send-email', async (req, res) => {
  try {
    const { sendType, sendTo, emailSubject, remarks, attachments } = req.body;

    // Save data to MongoDB
    const newEmailTemplate = new EmailTemplate({
      subject: emailSubject,
      body: remarks,
      attachments: attachments.join(', '), // Assuming the file paths will be stored as comma-separated strings
    });

    const savedEmailTemplate = await newEmailTemplate.save();

    res.json(savedEmailTemplate);
  } catch (error) {
    res.status(400).json({ error: 'Bad Request' });
  }
});

app.get('/send-email', async (req, res) => {
    try {
      const data = await Patient .find();
      res.json(data);
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
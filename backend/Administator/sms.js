const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5001;

// MongoDB connection string, replace with your actual MongoDB URI
const mongoURI = 'mongodb://127.0.0.1/sms_template';

// Connect to MongoDB
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('MongoDB connected');
  })
  .catch((err) => {
    console.error('MongoDB connection error:', err);
  });

// Define the SmsTemplateSchema
const SmsTemplateSchema = new mongoose.Schema({
  title: String,
  message: String,
});

const SmsTemplate = mongoose.model('SmsTemplate', SmsTemplateSchema);

app.use(bodyParser.json());

// Enable CORS for your Express app
app.use(cors());

// Define API routes
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../frontend/build/index.html'));
});

// app.get('/sms-template', (req, res) => {
//   SmsTemplate.find()
//     .then((smsTemplates) => res.json(smsTemplates))
//     .catch((err) => res.status(400).json('Error: ' + err));
// });

app.get('/sms-template', async (req, res) => {
    try {
      const data = await SmsTemplate.find();
      res.json(data);
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });
app.post('/sms-template', (req, res) => {
  const { title, message } = req.body;
  const newSmsTemplate = new SmsTemplate({ title, message }); 

  newSmsTemplate.save()
    .then(() => res.json(newSmsTemplate))
    .catch((err) => res.status(400).json('Error: ' + err));
});

app.put('/sms-template/:id', (req, res) => {
  const { id } = req.params;
  const { title, message } = req.body;

  SmsTemplate.findByIdAndUpdate(id, { title, message }, { new: true })
    .then((updatedSmsTemplate) => res.json(updatedSmsTemplate))
    .catch((err) => res.status(400).json('Error: ' + err));
});

app.delete('/sms-template/:id', (req, res) => {
  const { id } = req.params;

  SmsTemplate.findByIdAndRemove(id)
    .then(() => res.json({ message: 'SMS Template deleted' }))
    .catch((err) => res.status(400).json('Error: ' + err));
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
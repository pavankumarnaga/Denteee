const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5001;

mongoose.connect('mongodb://localhost:27017/Data', { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

const dailyCollectionSchema = new mongoose.Schema({
  treatmentDate: String,
  name: String,
  modeOfPayment: String,
  treatmentPayment: Number,
  receiptName: String,
});

const DailyCollection = mongoose.model('DailyCollection', dailyCollectionSchema, 'dailyCollection');

app.use(cors());

app.get('/daily-collection', async (req, res) => {
  try {
    const dailyCollectionData = await DailyCollection.find();
    res.json(dailyCollectionData);
  } catch (error) {
    console.error('Error fetching daily collection data:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
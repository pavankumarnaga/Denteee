const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();
const port = 5001;

app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/ClinicInsight', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const collectionSchema = new mongoose.Schema({
  totalCashCollection: Number,
  totalChequeCollection: Number,
  totalCardCollection: Number,
  totalCollection: Number,
  totalDepositedInBank: Number,
  patientsWithOutstandingBalance: Number,
  patientsWithOngoingTreatment: Number,
  pettyCashInHand: Number,
});

const Collection = mongoose.model('Collection', collectionSchema);

// Fetch real clinic collection statistics data from the database
app.get('/api/collectionStatistics', async (req, res) => {
  try {
    const collectionData = await Collection.findOne();
    res.json(collectionData);
  } catch (error) {
    console.error('Error fetching collection statistics data:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
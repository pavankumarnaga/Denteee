const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 5000;

app.use(cors()); 

const mongoURI = 'mongodb://127.0.0.1:27017/Mati'; 


mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('MongoDB connected');
  })
  .catch((err) => {
    console.error('MongoDB connection error:', err);
  });

const bankDepositSchema = new mongoose.Schema({
  date: Date,
  bankName: String,
  transactionId: String,
  comments: String,
});

const BankDeposit = mongoose.model('BankDeposit', bankDepositSchema);

app.use(bodyParser.json());



app.post('/api/bankdeposits', async (req, res) => {
  try {
    const bankDepositData = req.body;
    const bankDeposit = new BankDeposit(bankDepositData);
    await bankDeposit.save();
    res.status(201).json(bankDeposit);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
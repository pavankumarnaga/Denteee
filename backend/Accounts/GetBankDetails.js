const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser')
const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/bankDetails', { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
// Define a bankDeposit schema
const bankDepositSchema = new mongoose.Schema({
    id: String,
    date: String,
    bankName: String,
    branch: String,
    accountName: String,
    transactionId: String,
    amount: String,
  });
  
  const BankDeposit = mongoose.model('BankDeposit', bankDepositSchema);
  
  // Retrieve all bankDeposit with search
  app.get('/api/bankDeposit', async (req, res) => {
    try {
      let bankDeposit = await BankDeposit.find();
      const searchKeyword = req.query.search ? req.query.search.toLowerCase() : '';
      
      if (searchKeyword) {
        bankDeposit = bankDeposit.filter((bd) => {
          const transactionIdMatch = bd.transactionId.toLowerCase().includes(searchKeyword);
          const otherMatches = 
            bd.id.toLowerCase().includes(searchKeyword) ||
            bd.date.toLowerCase().includes(searchKeyword) ||
            bd.bankName.toLowerCase().includes(searchKeyword) ||
            bd.branch.toLowerCase().includes(searchKeyword) ||
            bd.accountName.toLowerCase().includes(searchKeyword) ||
            bd.amount.toLowerCase().includes(searchKeyword);
          return transactionIdMatch || otherMatches;
        });
      }
  
      res.json(bankDeposit);
    } catch (error) {
      console.error('Error fetching data:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
  
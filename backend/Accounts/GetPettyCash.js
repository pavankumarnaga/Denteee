const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser')
const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/pettyCash', { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
// Define a pettyCash schema
const pettyCashSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    date: String,
    voucherType: String,
    receipt: String,
    payment: String,
    numberOfEntries: String,
    narration: String,
  });
  
  
  const PettyCash = mongoose.model('PettyCash', pettyCashSchema);
  // Retrieve all pettyCash with search
  app.get('/api/pettyCash', async (req, res) => {
    try {
      let pettyCash = await PettyCash.find();
      const searchKeyword = req.query.search ? req.query.search.toLowerCase() : '';
      if (searchKeyword) {
        pettyCash = pettyCash.filter((pc) => {
          return (
            pc.date.toLowerCase().includes(searchKeyword) ||
            pc.voucherType.toLowerCase().includes(searchKeyword) ||
            pc.receipt.toLowerCase().includes(searchKeyword) ||
            pc.payment.toLowerCase().includes(searchKeyword) ||
            pc.numberOfEntries.toLowerCase().includes(searchKeyword) ||
            pc.narration.toLowerCase().includes(searchKeyword)
          );
        });
      }
      res.json(pettyCash);
    } catch (error) {
      console.error('Error fetching data:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });
  // Update pettyCash
  app.put('/api/pettyCash/:id', async (req, res) => {
    try {
      const pettyCashId = req.params.id;
      const updatedPettyCash = req.body; 
      const result = await PettyCash.findByIdAndUpdate(pettyCashId, updatedPettyCash, { new: true });
      res.json(result);
    } catch (error) {
      console.error('Error updating pettyCash:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });
  
  // Delete pettyCash
  app.delete('/api/pettyCash/:id', async (req, res) => {
    try {
      const pettyCashId = req.params.id;
      const result = await PettyCash.findByIdAndDelete(pettyCashId);
      if (result) {
        res.json({ message: 'PettyCash deleted successfully' });
      } else {
        res.status(404).json({ error: 'PettyCash not found' });
      }
    } catch (error) {
      console.error('Error deleting pettyCash:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });
  
  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
  
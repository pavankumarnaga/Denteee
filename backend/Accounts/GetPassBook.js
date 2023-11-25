const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser')
const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/passBook', { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

// Define a bills schema
const billSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId, // Add this line
    billDate: String,
    billNumber: String,
    patientName: String,
    billAmount: Number,
    status: String,
  });
  
  const Bill = mongoose.model('Bill', billSchema);
  // Retrieve all bills with search
  app.get('/api/bills', async (req, res) => {
    try {
      let bills = await Bill.find();
      const searchKeyword = req.query.search ? req.query.search.toLowerCase() : '';
      if (searchKeyword) {
        bills = bills.filter((bill) => {
          const billAmountMatch = bill.billAmount.toString().includes(searchKeyword);
          const otherMatches =
            bill.billDate.toLowerCase().includes(searchKeyword) ||
            bill.billNumber.toLowerCase().includes(searchKeyword) ||
            bill.patientName.toLowerCase().includes(searchKeyword) ||
            bill.status.toLowerCase().includes(searchKeyword)
            return billAmountMatch || otherMatches;
        });
      }
      res.json(bills);
    } catch (error) {
      console.error('Error fetching data:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });
  // Update bill
  app.put('/api/bills/:id', async (req, res) => {
    try {
      const billId = req.params.id;
      const updatedBill = req.body; 
      const result = await Bill.findByIdAndUpdate(billId, updatedBill, { new: true });
      res.json(result);
    } catch (error) {
      console.error('Error updating bill:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });
  
  // Delete bill
  app.delete('/api/bills/:_id', async (req, res) => {
    try {
      const billId = req.params._id;
      const result = await Bill.findByIdAndDelete(billId);
      if (result) {
        res.json({ message: 'Bill deleted successfully' });
      } else {
        res.status(404).json({ error: 'Bill not found' });
      }
    } catch (error) {
      console.error('Error deleting bill:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });
  
  
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
  
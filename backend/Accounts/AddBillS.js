const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 5001;
// Middleware
app.use(cors());
app.use(express.json());


mongoose.connect('mongodb://127.0.0.1/bill', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Define a Mongoose Schema (replace this with your schema)
const billSchema = new mongoose.Schema({
    date:Date,
  treatmentType: String,
  tooth: Number,
  cost: Number,
  discount: Number,
  note: String,
});

const Bill = mongoose.model('bill', billSchema);

// Create a new bill
app.post('/bill', async (req, res) => {
  try {
    const newBill = new Bill(req.body);
    await newBill.save();
    res.status(201).json(newBill);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Get all bills
app.get('/bill', async (req, res) => {
  try {
    const bills = await Bill.find();
    res.json(bills);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

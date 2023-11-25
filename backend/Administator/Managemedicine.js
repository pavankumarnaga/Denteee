const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 5001;

app.use(cors());
app.use(bodyParser.json());

// MongoDB connection
mongoose.connect('mongodb://127.0.0.1/Managemedicine', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const BillingSchema = new mongoose.Schema({
    medicineName: String,
    moleculeName: String,
    dosage: String,
    frequency: String,
    duration: String,
    favourite: Boolean,
});

const Billing = mongoose.model('Managemedicine', BillingSchema);

app.use(bodyParser.json());

// Define API routes

// Fetch all billing data
app.get('/Managemedicine', async (req, res) => {
    try {
      const search = req.query.search || '';
      const data = await Billing.find({
        $or: [
          { medicineName: { $regex: search, $options: 'i' } },
          { moleculeName: { $regex: search, $options: 'i' } },
          { dosage: { $regex: search, $options: 'i' } },
          { frequency: { $regex: search, $options: 'i' } },
          { duration: { $regex: search, $options: 'i' } },
          { favourite: search.toLowerCase() === 'yes' ? true : search.toLowerCase() === 'no' ? false : undefined },
          // Add more fields as needed
        ],
      });
      
      res.json(data);
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
});


app.post('/Managemedicine', async (req, res) => {
  try {
    const newMedicine = req.body;
    const createdMedicine = await Billing.create(newMedicine);
    res.json(createdMedicine);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});



app.delete('/Managemedicine/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const result = await Billing.findByIdAndDelete(id);
    
    if (result) {
      res.json({ message: 'Deleted successfully' });
    } else {
      res.status(404).json({ error: 'Record not found' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});




app.put('/Managemedicine/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const updatedMedicine = req.body;
    const result = await Billing.findByIdAndUpdate(id, updatedMedicine, { new: true });
    res.json(result);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Rest of your routes (delete, post, put) should remain the same.

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
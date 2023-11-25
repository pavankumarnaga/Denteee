const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 5001;

app.use(cors());
app.use(bodyParser.json());

// MongoDB connection
mongoose.connect('mongodb://127.0.0.1/Managetreatment', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const BillingSchema = new mongoose.Schema({
  treatmentName: String,
  treatmentCost: String,
  favourite: Boolean,
});

const Billing = mongoose.model('Managetreatment', BillingSchema);

app.use(bodyParser.json());

// Define API routes

// Fetch all billing data
app.get('/Managetreatment', async (req, res) => {
  try {
    const search = req.query.search || '';
    const data = await Billing.find({
      $or: [
        { treatmentName: { $regex: search, $options: 'i' } },
        { treatmentCost: { $regex: search, $options: 'i' } },
      ],
    });
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.post('/Managetreatment', async (req, res) => {
  try {
    const newMedicine = req.body;
    const createdMedicine = await Billing.create(newMedicine);
    res.json(createdMedicine);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});



app.delete('/Managetreatment/:id', async (req, res) => {
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




app.put('/Managetreatment/:id', async (req, res) => {
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
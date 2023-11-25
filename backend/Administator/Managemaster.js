const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 5001;

app.use(cors());
app.use(bodyParser.json());

mongoose.connect('mongodb://127.0.0.1/Managemaster', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const BillingSchema = new mongoose.Schema({
  title: String,   
});

const Billing = mongoose.model('Managemaster', BillingSchema);

app.get('/Managemaster', async (req, res) => {
  try {
    const search = req.query.search || '';
    const data = await Billing.find({
      title: { $regex: search, $options: 'i' },
    });
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.put('/Managemaster/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { title } = req.body;
    const updatedMedicine = await Billing.findByIdAndUpdate(id, { title }, { new: true });
    res.json(updatedMedicine);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.delete('/Managemaster/:id', async (req, res) => {
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

app.post('/Managemaster', async (req, res) => {
  try {
    const { title } = req.body;
    const newRecord = new Billing({ title });
    const savedRecord = await newRecord.save();
    res.json(savedRecord);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
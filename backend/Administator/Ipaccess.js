

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5001;

app.use(cors());

// MongoDB connection
mongoose.connect('mongodb://127.0.0.1/Ipac', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const   valueSchema = new mongoose.Schema({
   

    date: String,
    fromIP: String,
   toIP : String,
  deviceType: String,
  actiontype:String,

});

const Patient = mongoose.model('sunil', valueSchema);

app.use(bodyParser.json());

// Define API routes

// Fetch all billing data
app.get('/Ipac', async (req, res) => {
  try {
    const data = await Patient .find();
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});


// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
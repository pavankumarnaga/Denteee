const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5001;

app.use(cors());

// MongoDB connection
mongoose.connect('mongodb://127.0.0.1/device', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const  viewSchema = new mongoose.Schema({
  username: String,
  deviceid: String,
  devicetype: String,
  isallowed:String,
  action:String

});

const Patient = mongoose.model('device', viewSchema);

app.use(bodyParser.json());

// Define API routes

// Fetch all billing data
app.get('/device', async (req, res) => {
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
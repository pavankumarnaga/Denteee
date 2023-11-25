const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5001;

app.use(bodyParser.json());
app.use(cors());

// Connect to MongoDB (Change the database name if needed)
mongoose.connect('mongodb://127.0.0.1/custome', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => {
    console.log('MongoDB database connection established successfully');
  })
  .catch((error) => {
    console.error('MongoDB connection error:', error);
  });

// Create a data model (Update the schema and model names if needed)
const dataSchema = new mongoose.Schema({
  name: String,
  description: String
});

const Data = mongoose.model('Data', dataSchema);

// Add a data record
app.post('/add-data', async (req, res) => {
  try {
    const { name, description } = req.body;
    if (!name || !description) {
      return res.status(400).json({ error: 'Name and description are required.' });
    }

    const newData = new Data({
      name,
      description
    });

    await newData.save();
    res.json({ message: 'Data added successfully' });
  } catch (error) {
    console.error('Error adding data:', error);
    res.status(500).json({ error: 'Failed to add data' });
  }
});

// Get all data
app.get('/get-data', async (req, res) => {
  try {
    const data = await Data.find();
    res.json(data);
  } catch (error) {
    console.error('Error retrieving data:', error);
    res.status(500).json({ error: 'Failed to retrieve data' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();
const port = 5001;

app.use(cors());
app.use(express.json());

// MongoDB connection setup
mongoose.connect('mongodb://127.0.0.1/Importpatient', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Define a schema for your data (adjust fields as needed)
const importPatientSchema = new mongoose.Schema({
  fileName: String,
  fileType: String,
  requestDate: String,
  uploadOnDentee: String,
  conformByUser: String,
  undoDone: String,
  cancelled: String,
  action: String,
});

// Create a model based on the schema
const ImportPatient = mongoose.model('ImportPatient', importPatientSchema);



// Endpoint to fetch data
app.get('/api/importpatientdata', async (req, res) => {
  try {
    const data = await ImportPatient.find();
    res.json(data);
  } catch (error) {
    console.error('Error fetching data:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
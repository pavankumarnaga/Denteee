const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://127.0.0.1/clinicAnalysis', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;


const clinicAnalysisSchema = new mongoose.Schema({
  header:String,
  yeara:Number,
  yearb:Number,
  yearc:Number,
  yeard:Number,
  yeare:Number,
  yearf:Number,
  yearg:Number,
  yearh:Number,
  yeari:Number,
  yearj:Number,
  yeark:Number,
  yearl:Number,
  
});

const ClinicAnalysisModel = mongoose.model('clinicAnalysis', clinicAnalysisSchema); // Rename the model to avoid conflict

db.on('error', (error) => console.error('MongoDB connection error:', error));
db.once('open', () => console.log('Connected to MongoDB'));

app.get('/clinicAnalysis', async (req, res) => {
  try {
    const clinicAnalysisData = await ClinicAnalysisModel.find(); // Use the renamed model
    res.json(clinicAnalysisData);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});



const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

module.exports = ClinicAnalysisModel
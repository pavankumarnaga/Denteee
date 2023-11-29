const express = require('express');
const cors = require('cors');
const multer = require('multer');
const mongoose = require('mongoose');
const app = express();

const PORT = 5001;

app.use(cors());
app.use(express.json());

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/');
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname);
  },
});

const upload = multer({ storage: storage });

mongoose.connect('mongodb://127.0.0.1/Defaultfile', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on('error', (err) => {
  console.error('MongoDB connection error:', err);
});

db.once('open', () => {
  console.log('Connected to MongoDB');
});

const uploadedDataSchema = new mongoose.Schema({
  selectedFolder: String,
  selectedFiles: [String],
});

const UploadedData = mongoose.model('UploadedData', uploadedDataSchema);

app.post('/upload', upload.array('selectedFiles'), async (req, res) => {
  const { selectedFolder } = req.body;
  const selectedFiles = req.files.map((file) => file.filename);

  try {
    const uploadedData = new UploadedData({
      selectedFolder,
      selectedFiles,
    });

    await uploadedData.save();
    console.log('Files uploaded:', uploadedData._id);

    res.status(201).json({ message: 'Files uploaded successfully.' });
  } catch (error) {
    console.error('Error uploading files:', error);
    res.status(500).json({ error: 'Failed to upload files.' });
  }
});

app.get('/uploadedData', async (req, res) => {
  try {
    const data = await UploadedData.find();
    res.json(data);
  } catch (error) {
    console.error('Error fetching uploaded data:', error);
    res.status(500).json({ error: 'Failed to fetch uploaded data.' });
  }
});

app.listen(PORT, () => {
  console.log(`Backend server is running on http://localhost:${PORT}`);
});

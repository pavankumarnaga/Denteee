const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5003;

app.use(cors());

mongoose.connect('mongodb://127.0.0.1/karishma', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const recycleBinSchema = new mongoose.Schema({
  description: String,
  deleteDate: String,
  deletedBy: String,
});

const RecycleBin = mongoose.model('RecycleBin', recycleBinSchema);

app.use(bodyParser.json());

app.get('/karishma', async (req, res) => {
  try {
    const { filter1, filter2, filter3, search } = req.query;

    const filterObject = {};

    if (filter1) {
      filterObject.description = filter1;
    }

    if (filter2) {
      filterObject.deleteDate = filter2;
    }

    if (filter3) {
      filterObject.deletedBy = filter3;
    }

    if (search) {
      filterObject.$or = [
        { description: { $regex: search, $options: 'i' } },
        // Add other fields for search
      ];
    }

    const recycleBinData = await RecycleBin.find(filterObject);
    res.json(recycleBinData);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
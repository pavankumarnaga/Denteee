const multer = require('multer');
const UploadedData = require('../models/defaultfileModel');

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/');
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname);
  },
});

const upload = multer({ storage: storage });

exports.uploadFiles = async (req, res) => {
  try {
    // Wrap multer's array middleware in a promise
    const multerArray = (req, res) => new Promise((resolve, reject) => {
      upload.array('selectedFiles')(req, res, (err) => {
        if (err) reject(err);
        else resolve();
      });
    });

    // Use await to wait for multer middleware completion
    await multerArray(req, res);

    const { selectedFolder } = req.body;
    const selectedFiles = req.files.map((file) => file.filename);

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
};





exports.getUploadedData = async (req, res) => {
  try {
    const data = await UploadedData.find();
    res.json(data);
  } catch (error) {
    console.error('Error fetching uploaded data:', error);
    res.status(500).json({ error: 'Failed to fetch uploaded data.' });
  }
};

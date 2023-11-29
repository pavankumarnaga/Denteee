// models/uploadedData.js
const mongoose = require('mongoose');

const uploadedDataSchema = new mongoose.Schema({
  selectedFolder: String,
  selectedFiles: [String],
});

const UploadedData = mongoose.model('UploadedData', uploadedDataSchema);

module.exports = UploadedData;

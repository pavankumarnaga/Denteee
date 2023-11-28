// routes/uploadRoutes.js
const express = require('express');
const uploadController = require('../controllers/defaultfileController');

const router = express.Router();

router.post('/upload', uploadController.uploadFiles);
router.get('/getUploadedData', uploadController.getUploadedData);

module.exports = router;

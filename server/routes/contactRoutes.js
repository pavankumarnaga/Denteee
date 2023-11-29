// routes/contactRoutes.js
const express = require('express');
const router = express.Router();
const contactController = require('../controllers/contactController');

// Fetch all contact data
router.get('/Contact', contactController.getAllContactData);

// Delete a contact record by ID
router.delete('/Contact/:id', contactController.deleteContactRecord);

// Add a contact record
router.post('/Contact', contactController.addContactRecord);

module.exports = router;

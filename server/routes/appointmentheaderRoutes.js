// routes/patientRoutes.js
const express = require('express');
const router = express.Router();
const patientController = require('../controllers/appointmentheaderController');

// Fetch all patients
router.get('/patients', patientController.getAllPatients);

// Delete a patient record by ID
router.delete('/patients/:id', patientController.deletePatient);

// Add a patient record
router.post('/patients', patientController.addPatient);

module.exports = router;

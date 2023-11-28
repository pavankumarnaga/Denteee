const express = require('express');
const router = express.Router();
const patientNoteController = require('../controllers/patientnoteController');

// Fetch all patient notes
router.get('/Patientnote', patientNoteController.getAllPatientNotes);

// Add a new patient note
router.post('/Patientnote', patientNoteController.addPatientNote);

// Update a patient note by ID
router.put('/Patientnote/:id', patientNoteController.updatePatientNote);

// Delete a patient note by ID
router.delete('/Patientnote/:id', patientNoteController.deletePatientNote);

module.exports = router;

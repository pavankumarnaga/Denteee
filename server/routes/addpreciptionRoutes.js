// routes/prescriptionRoutes.js
const express = require('express');
const prescriptionController = require('../controllers/addPreciptionControllers');
const router = express.Router();

router.post('/prescriptions', prescriptionController.createPrescription);
router.get('/prescriptions', prescriptionController.getAllPrescriptions);

module.exports = router;

const express = require('express');
const router = express.Router();
const billingController = require('../controllers/addPatientsController');

// Get all billing records
router.get('/Addpatient', billingController.getAllBillingRecords);

// Get a billing record by ID
router.get('/Addpatient/:id', billingController.getBillingRecordById);

// Delete a billing record by ID
router.delete('/Addpatient/:id', billingController.deleteBillingRecordById);

// Add a billing record
router.post('/Addpatient', billingController.upload.single('image'), billingController.addBillingRecord);


router.get('/api/Addpatient', billingController.getAllBillingRecords);


// Serve uploaded images
router.use('/uploads', express.static(__dirname + '/uploads'));


module.exports = router;


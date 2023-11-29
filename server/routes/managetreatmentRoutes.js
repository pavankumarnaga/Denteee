const express = require('express');
const billingController = require('../controllers/managetreatmentController');

const router = express.Router();

router.get('/managetreatment', billingController.getAllMedicines);
router.post('/managetreatment', billingController.createMedicine);
router.delete('/managetreatment/:id', billingController.deleteMedicine);
router.put('/managetreatment/:id', billingController.updateMedicine);

module.exports = router;

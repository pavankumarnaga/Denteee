const express = require('express');
const investigationController = require('../controllers/investagationController');

const router = express.Router();

router.get('/investigation', investigationController.getAllInvestigations);
router.post('/investigation', investigationController.createInvestigation);
router.put('/investigation/:id', investigationController.updateInvestigation);
router.delete('/investigation/:id', investigationController.deleteInvestigation);

module.exports = router;

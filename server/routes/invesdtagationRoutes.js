// routes/investigationRoutes.js
const express = require('express');
const router = express.Router();
const investigationController = require('../controllers/investagationControllers');

// Add an investigation record
router.post('/investigations', investigationController.addInvestigation);

module.exports = router;

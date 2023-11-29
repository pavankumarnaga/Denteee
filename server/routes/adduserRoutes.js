// routes/userRoutes.js
const express = require('express');
const UserController = require('../controllers/adduserController');

const router = express.Router();

router.post('/users', UserController.create);
router.get('/users', UserController.getAll);
router.delete('/users/:userId', UserController.delete);

module.exports = router;

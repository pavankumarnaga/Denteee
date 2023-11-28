// routes/appointmentRoutes.js
const express = require('express');
const router = express.Router();
const appointmentController = require('../controllers/appointmentspageControllers');

router.post('/newappointment', appointmentController.createAppointment);
router.get('/newappointment', appointmentController.getAppointments);
router.delete('/deleteappointment/:id', appointmentController.deleteAppointment);
router.put('/updateappointment/:id', appointmentController.updateAppointment);

module.exports = router;

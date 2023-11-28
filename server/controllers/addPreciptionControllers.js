// controllers/prescriptionController.js
const Prescription = require('../models/addpreciptionModel');

const prescriptionController = {
  createPrescription: async (req, res) => {
    const prescriptionData = req.body;

    try {
      const prescription = await Prescription.create(prescriptionData);
      res.status(201).json(prescription);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal server error' });
    }
  },

  getAllPrescriptions: async (req, res) => {
    try {
      const prescriptionData = await Prescription.find();
      res.json(prescriptionData);
    } catch (error) {
      console.error('Error fetching prescriptions:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },
};

module.exports = prescriptionController;

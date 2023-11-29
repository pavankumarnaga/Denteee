const Investigation = require('../models/investagationModel');

const investigationController = {
  getAllInvestigations: async (req, res) => {
    try {
      const data = await Investigation.find();
      res.json(data);
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },

  createInvestigation: async (req, res) => {
    try {
      const investigationData = req.body;

      const newInvestigationRecord = new Investigation({
        date: investigationData.date,
        temperature: investigationData.temperature,
        weight: investigationData.weight,
        bloodPressure: investigationData.bloodPressure,
        oxygenSaturation: investigationData.oxygenSaturation,
        bloodSugar: investigationData.bloodSugar,
      });

      await newInvestigationRecord.save();

      res.json({ message: 'Investigation data saved successfully' });
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },

  updateInvestigation: async (req, res) => {
    try {
      const investigationId = req.params.id;
      const updatedInvestigationData = req.body;

      const updatedInvestigation = await Investigation.findByIdAndUpdate(
        investigationId,
        { $set: updatedInvestigationData },
        { new: true }
      );

      if (!updatedInvestigation) {
        return res.status(404).json({ error: 'Investigation record not found' });
      }

      res.json(updatedInvestigation);
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },

  deleteInvestigation: async (req, res) => {
    try {
      const investigationId = req.params.id;
      await Investigation.findByIdAndDelete(investigationId);
      res.json({ message: 'Investigation data deleted successfully' });
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },
};

module.exports = investigationController;

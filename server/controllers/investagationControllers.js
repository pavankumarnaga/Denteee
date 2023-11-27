// controllers/investigationController.js
const Investigation = require('../models/investagationModels');

const investigationController = {
  addInvestigation: async (req, res) => {
    try {
      const investigationData = req.body;

      const newInvestigationRecord = new Investigation(investigationData);
      await newInvestigationRecord.save();
      res.json({ message: 'Investigation record created successfully' });
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },
};

module.exports = investigationController;

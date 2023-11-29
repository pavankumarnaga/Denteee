// controllers/billingController.js
const Billing = require('../models/personalAttributeModel');

const billingController = {
  getAllBillingData: async (req, res) => {
    try {
      const data = await Billing.find();
      res.json(data);
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },

  deleteBillingRecord: async (req, res) => {
    try {
      const deletedRecord = await Billing.findByIdAndDelete(req.params.id);
      if (!deletedRecord) {
        return res.status(404).json({ error: 'Record not found' });
      }
      res.json({ message: 'Record deleted successfully' });
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },

  addBillingRecord: async (req, res) => {
    try {
      const billingData = req.body;
      const newBillingRecord = new Billing(billingData);
      await newBillingRecord.save();
      res.json({ message: 'Billing record created successfully' });
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },
};

module.exports = billingController;

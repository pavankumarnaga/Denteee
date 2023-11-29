// controllers/contactController.js
const Contact = require('../models/contactModel');

const getAllContactData = async (req, res) => {
  try {
    const data = await Contact.find();
    res.json(data);
  } catch (error) {
    console.error('Error fetching contacts:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

const deleteContactRecord = async (req, res) => {
  try {
    const deletedRecord = await Contact.findByIdAndDelete(req.params.id);
    if (!deletedRecord) {
      return res.status(404).json({ error: 'Record not found' });
    }
    res.json({ message: 'Record deleted successfully' });
  } catch (error) {
    console.error('Error deleting contact record:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

const addContactRecord = async (req, res) => {
  try {
    const contactData = req.body;
    console.log('Received contact data:', contactData);

    const newContactRecord = new Contact(contactData);
    await newContactRecord.save();
    res.json({ message: 'Contact record created successfully' });
  } catch (error) {
    console.error('Error adding contact record:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

module.exports = {
  getAllContactData,
  deleteContactRecord,
  addContactRecord,
};

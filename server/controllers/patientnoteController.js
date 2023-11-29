const PatientNote = require('../models/patientnoteModel');

// Fetch all patient notes
exports.getAllPatientNotes = async (req, res) => {
    try {
        const patientNotes = await PatientNote.find();
        res.json(patientNotes);
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

// Add a new patient note
exports.addPatientNote = async (req, res) => {
    try {
        const { doctorName, notes } = req.body;
        const newNote = new PatientNote({ doctorName, notes });
        await newNote.save();
        res.json({ message: 'Patient note added successfully' });
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

// Update a patient note by ID
exports.updatePatientNote = async (req, res) => {
    try {
        const { doctorName, notes } = req.body;
        await PatientNote.findByIdAndUpdate(req.params.id, { doctorName, notes });
        res.json({ message: 'Patient note updated successfully' });
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

// Delete a patient note by ID
exports.deletePatientNote = async (req, res) => {
    try {
        await PatientNote.findByIdAndDelete(req.params.id);
        res.json({ message: 'Patient note deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

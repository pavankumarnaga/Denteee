const mongoose = require('mongoose');

const patientNoteSchema = new mongoose.Schema({
    notesDate: { type: Date, default: () => new Date().toISOString().split('T')[0] },
    doctorName: String,
    notes: String,
});

const PatientNote = mongoose.model('Patientnote', patientNoteSchema);

module.exports = PatientNote;

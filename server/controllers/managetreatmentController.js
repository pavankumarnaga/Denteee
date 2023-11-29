const Billing = require('../models/managetreatmentModel');

const billingController = {
    getAllMedicines: async (req, res) => {
        try {
            const search = req.query.search || '';
            const data = await Billing.find({
                $or: [
                    { medicineName: { $regex: search, $options: 'i' } },
                    { moleculeName: { $regex: search, $options: 'i' } },
                    { dosage: { $regex: search, $options: 'i' } },
                    { frequency: { $regex: search, $options: 'i' } },
                    { duration: { $regex: search, $options: 'i' } },
                    { favourite: search.toLowerCase() === 'yes' ? true : search.toLowerCase() === 'no' ? false : undefined },
                    // Add more fields as needed
                ],
            });

            res.json(data);
        } catch (error) {
            res.status(500).json({ error: 'Internal Server Error' });
        }
    },

    createMedicine: async (req, res) => {
        try {
            const newMedicine = req.body;
            const createdMedicine = await Billing.create(newMedicine);
            res.json(createdMedicine);
        } catch (error) {
            res.status(500).json({ error: 'Internal Server Error' });
        }
    },

    deleteMedicine: async (req, res) => {
        try {
            const { id } = req.params;
            const result = await Billing.findByIdAndDelete(id);

            if (result) {
                res.json({ message: 'Deleted successfully' });
            } else {
                res.status(404).json({ error: 'Record not found' });
            }
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Internal Server Error' });
        }
    },

    updateMedicine: async (req, res) => {
        try {
            const { id } = req.params;
            const updatedMedicine = req.body;
            const result = await Billing.findByIdAndUpdate(id, updatedMedicine, { new: true });
            res.json(result);
        } catch (error) {
            res.status(500).json({ error: 'Internal Server Error' });
        }
    },
};

module.exports = billingController;

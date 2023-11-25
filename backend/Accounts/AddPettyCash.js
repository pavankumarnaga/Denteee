const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://127.0.0.1/Receipt', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const voucherSchema = new mongoose.Schema({
  receiptType: String,
  amount: Number,
  paidBy: String,
  date: Date,
  totalAmountPaid: Number,
  narration: String,
});

const Voucher = mongoose.model('Voucher', voucherSchema);

app.post('/api/vouchers', async (req, res) => {
  try {
    const newVoucher = new Voucher(req.body);
    await newVoucher.save();
    res.status(201).json(newVoucher);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.get('/api/vouchers', async (req, res) => {
  try {
    const vouchers = await Voucher.find();
    res.json(vouchers);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

import express from 'express';
import Transaction from '../models/Transaction.js';

const router = express.Router();

// CREATE
router.post('/', async (req, res) => {
  try {
    const { title, amount, date } = req.body;
    const transaction = new Transaction({
      title: title?.trim(),
      amount: parseFloat(amount),
      date: date ? new Date(date) : undefined,
    });
    await transaction.save();
    res.status(201).json(transaction);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// READ
router.get('/', async (req, res) => {
  try {
    const transactions = await Transaction.find().sort({ date: -1 });
    res.json(transactions);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// UPDATE
router.put('/:id', async (req, res) => {
  try {
    const { title, amount, date } = req.body;
    const updatedTransaction = await Transaction.findByIdAndUpdate(
      req.params.id,
      {
        title: title?.trim(),
        amount: parseFloat(amount),
        date: date ? new Date(date) : undefined,
      },
      { new: true }
    );
    res.json(updatedTransaction);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// DELETE
router.delete('/:id', async (req, res) => {
  try {
    await Transaction.findByIdAndDelete(req.params.id);
    res.json({ message: 'Transaction deleted successfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;

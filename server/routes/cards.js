import express from 'express';
import Card from '../models/Card.js';

const router = express.Router();

// CREATE
router.post('/', async (req, res) => {
  try {
    const { cardName, bankName, currency, amount, interest, type } = req.body;
    const card = new Card({
      cardName: cardName?.trim(),
      bankName: bankName?.trim(),
      currency: currency?.trim(),
      amount: parseFloat(amount),
      interest: parseFloat(interest),
      type,
    });
    await card.save();
    res.status(201).json(card);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// READ
router.get('/', async (req, res) => {
  try {
    const cards = await Card.find().sort({ createdAt: -1 });
    res.json(cards);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// UPDATE
router.put('/:id', async (req, res) => {
  try {
    const { cardName, bankName, currency, amount, interest, type } = req.body;
    const updatedCard = await Card.findByIdAndUpdate(
      req.params.id,
      {
        cardName: cardName?.trim(),
        bankName: bankName?.trim(),
        currency: currency?.trim(),
        amount: parseFloat(amount),
        interest: parseFloat(interest),
        type,
      },
      { new: true }
    );
    res.json(updatedCard);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// DELETE
router.delete('/:id', async (req, res) => {
  try {
    await Card.findByIdAndDelete(req.params.id);
    res.json({ message: 'Card deleted successfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;

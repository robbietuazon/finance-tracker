import express from "express";
import Card from "../models/Card.js";

const router = express.Router();

// CREATE a new Card
router.post("/", async (req, res) => {
  try {
    const { cardName, bankName, currency, amount, interest, type } = req.body;

    console.log("Creating card with data:", cardName);

    if (!cardName || !bankName || !currency || !amount || !interest || !type) {
      return res.status(400).json({ error: "All fields are required." });
    }

    const newCard = new Card({
      cardName,
      bankName,
      currency,
      amount,
      interest,
      type,
    });

    await newCard.save();
    res.status(201).json(newCard);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to create card." });
  }
});

// GET all Cards
router.get("/", async (req, res) => {
  try {
    const cards = await Card.find();
    res.json(cards);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch cards." });
  }
});

// DELETE a Card
router.delete("/:id", async (req, res) => {
  try {
    const deleted = await Card.findByIdAndDelete(req.params.id);
    if (!deleted) {
      return res.status(404).json({ error: "Card not found." });
    }
    res.json({ message: "Card deleted successfully." });
  } catch (err) {
    res.status(500).json({ error: "Failed to delete card." });
  }
});

export default router;

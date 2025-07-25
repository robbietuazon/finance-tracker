import express from "express";
import Transaction from "../models/Transaction.js";

const router = express.Router();

// GET all transactions
router.get("/", async (req, res) => {
  try {
    const transactions = await Transaction.find().sort({ date: -1 });
    res.json(transactions);
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
});

// POST a new transaction
router.post("/", async (req, res) => {
  try {
    const { title, amount } = req.body;
    const newTransaction = new Transaction({ title, amount });
    await newTransaction.save();
    res.status(201).json(newTransaction);
  } catch (err) {
    res.status(400).json({ error: "Invalid data" });
  }
});

export default router;

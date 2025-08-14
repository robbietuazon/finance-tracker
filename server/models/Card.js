// models/Card.js
import mongoose from "mongoose";

const cardSchema = new mongoose.Schema({
  cardName: { type: String, required: true },
  bankName: { type: String, required: true },
  currency: { type: String, required: true },
  amount: { type: Number, required: true },
  interest: { type: Number, required: true }, // % per annum
  type: { type: String, enum: ["debit", "credit"], required: true },
  createdAt: { type: Date, default: Date.now },
});

export default mongoose.model("Card", cardSchema);

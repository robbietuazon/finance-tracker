import mongoose from 'mongoose';

const cardSchema = new mongoose.Schema(
  {
    cardName: {
      type: String,
      required: true,
      trim: true,
    },
    bankName: {
      type: String,
      required: true,
      trim: true,
    },
    currency: {
      type: String,
      required: true,
      trim: true,
    },
    amount: {
      type: Number,
      required: true, // allows decimals
    },
    interest: {
      type: Number, // percentage per annum
      required: true, // allows decimals
    },
    type: {
      type: String,
      enum: ['debit', 'credit'],
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model('Card', cardSchema);

import { useState } from "react";
import axios from "axios";

const API = import.meta.env.VITE_API_URL;

export default function TransactionForm({ onAdd }) {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title || !amount) return;
    const res = await axios.post(`${API}/transactions`, {
      title,
      amount: parseFloat(amount),
    });
    onAdd(res.data);
    setTitle("");
    setAmount("");
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <input
        type="text"
        placeholder="Transaction title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="number"
        placeholder="Amount (₱)"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <button type="submit">Add</button>
    </form>
  );
}

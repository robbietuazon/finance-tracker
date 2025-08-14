import { useState } from "react";

const API = import.meta.env.VITE_API_URL;

const AccountForm = ({ onSuccess }) => {
  const [form, setForm] = useState({
    bankName: "",
    currency: "",
    amount: "",
    interest: "",
    type: "debit",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch(
        "https://finance-tracker-q63k.onrender.com/api/accounts",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(form),
        }
      );

      if (!res.ok) throw new Error("Failed to create account");

      const data = await res.json();
      onSuccess(data); // To refresh or add to list
      setForm({
        bankName: "",
        currency: "",
        amount: "",
        interest: "",
        type: "debit",
      });
    } catch (err) {
      alert(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    // <form onSubmit={handleSubmit} className="account-form">
    //   <input
    //     name="bankName"
    //     value={form.bankName}
    //     onChange={handleChange}
    //     placeholder="Bank Name"
    //     required
    //   />
    //   <input
    //     name="currency"
    //     value={form.currency}
    //     onChange={handleChange}
    //     placeholder="Currency (e.g., PHP)"
    //     required
    //   />
    //   <input
    //     name="amount"
    //     value={form.amount}
    //     onChange={handleChange}
    //     placeholder="Amount"
    //     type="number"
    //     required
    //   />
    //   <input
    //     name="interest"
    //     value={form.interest}
    //     onChange={handleChange}
    //     placeholder="Interest (% p.a)"
    //     type="number"
    //     step="0.01"
    //     required
    //   />
    //   <select name="type" value={form.type} onChange={handleChange}>
    //     <option value="debit">Debit</option>
    //     <option value="credit">Credit</option>
    //   </select>
    //   <button type="submit" disabled={loading}>
    //     {loading ? "Saving..." : "Add Account"}
    //   </button>
    // </form>

    <form
      onSubmit={handleSubmit}
      className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 space-y-4 max-w-md"
    >
      <input
        name="bankName"
        value={form.bankName}
        onChange={handleChange}
        placeholder="Bank Name"
        required
        className="input input-bordered w-full"
      />
      <input
        name="currency"
        value={form.currency}
        onChange={handleChange}
        placeholder="Currency (e.g., PHP)"
        required
        className="input input-bordered w-full"
      />
      <input
        name="amount"
        value={form.amount}
        onChange={handleChange}
        placeholder="Amount"
        type="number"
        required
        className="input input-bordered w-full"
      />
      <input
        name="interest"
        value={form.interest}
        onChange={handleChange}
        placeholder="Interest (% p.a)"
        type="number"
        step="0.01"
        required
        className="input input-bordered w-full"
      />
      <select
        name="type"
        value={form.type}
        onChange={handleChange}
        className="select select-bordered w-full"
      >
        <option value="debit">Debit</option>
        <option value="credit">Credit</option>
      </select>
      <button
        type="submit"
        disabled={loading}
        className="btn btn-primary w-full"
      >
        {loading ? "Saving..." : "Add Account"}
      </button>
    </form>
  );
};

export default AccountForm;

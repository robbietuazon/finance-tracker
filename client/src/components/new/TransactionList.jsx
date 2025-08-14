import { useState, useEffect } from 'react';
import axios from 'axios';
import TransactionForm from './TransactionForm';
import API from '../../utils/api';

export default function TransactionList() {
  const [transactions, setTransactions] = useState([]);
  const [editing, setEditing] = useState(null);

  const fetchTransactions = async () => {
    const res = await axios.get(`${API}/transactions`);
    setTransactions(res.data);
  };

  useEffect(() => {
    fetchTransactions();
  }, []);

  const handleDelete = async (id) => {
    await axios.delete(`${API}/transactions/${id}`);
    setTransactions(transactions.filter((t) => t._id !== id));
  };

  const handleEdit = (transaction) => setEditing(transaction);

  const handleSuccess = (transaction) => {
    fetchTransactions();
    setEditing(null);
  };

  return (
    <div className="space-y-4">
      {editing && <TransactionForm transaction={editing} onSuccess={handleSuccess} onCancel={() => setEditing(null)} />}

      {!editing && <TransactionForm onSuccess={handleSuccess} />}

      {transactions.map((t) => (
        <div key={t._id} className="p-4 bg-white shadow-sm rounded flex justify-between items-center">
          <div>
            <p className="font-semibold">{t.title}</p>
            <p>
              {t.amount.toFixed(2)} | {new Date(t.date).toLocaleDateString()}
            </p>
          </div>
          <div className="flex gap-2">
            <button onClick={() => handleEdit(t)} className="bg-yellow-400 px-3 py-1 rounded">
              Edit
            </button>
            <button onClick={() => handleDelete(t._id)} className="bg-red-500 text-white px-3 py-1 rounded">
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

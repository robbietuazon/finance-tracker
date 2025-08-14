import { useState, useEffect } from 'react';
import axios from 'axios';
import CardForm from './CardForm';
import API from '../../utils/api';

export default function CardList() {
  const [cards, setCards] = useState([]);
  const [editing, setEditing] = useState(null);

  const fetchCards = async () => {
    const res = await axios.get(`${API}/cards`);
    setCards(res.data);
  };

  useEffect(() => {
    fetchCards();
  }, []);

  const handleDelete = async (id) => {
    await axios.delete(`${API}/cards/${id}`);
    setCards(cards.filter((c) => c._id !== id));
  };

  const handleEdit = (card) => setEditing(card);

  const handleSuccess = (card) => {
    fetchCards();
    setEditing(null);
  };

  return (
    <div className="space-y-4">
      {editing && <CardForm card={editing} onSuccess={handleSuccess} onCancel={() => setEditing(null)} />}

      {!editing && <CardForm onSuccess={handleSuccess} />}

      {cards.map((card) => (
        <div key={card._id} className="p-4 bg-white shadow-sm rounded flex justify-between items-center">
          <div>
            <p className="font-semibold">
              {card.cardName} - {card.bankName}
            </p>
            <p>
              {card.amount.toFixed(2)} {card.currency} | {card.interest}% | {card.type}
            </p>
          </div>
          <div className="flex gap-2">
            <button onClick={() => handleEdit(card)} className="bg-yellow-400 px-3 py-1 rounded">
              Edit
            </button>
            <button onClick={() => handleDelete(card._id)} className="bg-red-500 text-white px-3 py-1 rounded">
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

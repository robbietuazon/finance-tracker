import { useForm } from 'react-hook-form';
import axios from 'axios';
import API from '../../utils/api';

export default function CardForm({ card, onSuccess, onCancel }) {
  const { register, handleSubmit, reset } = useForm({
    defaultValues: card || {
      cardName: '',
      bankName: '',
      currency: '',
      amount: '',
      interest: '',
      type: 'debit',
    },
  });

  const onSubmit = async (data) => {
    try {
      const payload = {
        ...data,
        amount: parseFloat(data.amount),
        interest: parseFloat(data.interest),
      };

      if (card?._id) {
        // UPDATE
        const res = await axios.put(`${API}/cards/${card._id}`, payload);
        onSuccess(res.data);
      } else {
        // CREATE
        const res = await axios.post(`${API}/cards`, payload);
        onSuccess(res.data);
      }
      reset();
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-2 p-4 bg-white rounded shadow-sm">
      <input
        type="text"
        placeholder="Card Name"
        {...register('cardName', { required: true })}
        className="border p-2 rounded"
      />
      <input
        type="text"
        placeholder="Bank Name"
        {...register('bankName', { required: true })}
        className="border p-2 rounded"
      />
      <input
        type="text"
        placeholder="Currency"
        {...register('currency', { required: true })}
        className="border p-2 rounded"
      />
      <input
        type="number"
        step="0.01"
        placeholder="Amount"
        {...register('amount', { required: true })}
        className="border p-2 rounded"
      />
      <input
        type="number"
        step="0.01"
        placeholder="Interest (%)"
        {...register('interest', { required: true })}
        className="border p-2 rounded"
      />
      <select {...register('type')} className="border p-2 rounded">
        <option value="debit">Debit</option>
        <option value="credit">Credit</option>
      </select>
      <div className="flex gap-2">
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
          {card ? 'Update' : 'Add'}
        </button>
        {onCancel && (
          <button type="button" onClick={onCancel} className="bg-gray-300 text-black px-4 py-2 rounded">
            Cancel
          </button>
        )}
      </div>
    </form>
  );
}

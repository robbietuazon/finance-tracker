import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import API from '../../utils/api';

export default function TransactionForm({ transaction, onSuccess, onCancel }) {
  const { register, handleSubmit, reset } = useForm({
    defaultValues: transaction || { title: '', amount: '', date: '' },
  });

  const onSubmit = async (data) => {
    try {
      if (transaction?._id) {
        // UPDATE
        const res = await axios.put(`${API}/transactions/${transaction._id}`, {
          ...data,
          amount: parseFloat(data.amount),
        });
        onSuccess(res.data);
      } else {
        // CREATE
        const res = await axios.post(`${API}/transactions`, {
          ...data,
          amount: parseFloat(data.amount),
        });
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
        placeholder="Transaction Title"
        {...register('title', { required: true })}
        className="border p-2 rounded"
      />
      <input
        type="number"
        step="0.01"
        placeholder="Amount (₱)"
        {...register('amount', { required: true })}
        className="border p-2 rounded"
      />
      <input type="date" {...register('date')} className="border p-2 rounded" />
      <div className="flex gap-2">
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
          {transaction ? 'Update' : 'Add'}
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

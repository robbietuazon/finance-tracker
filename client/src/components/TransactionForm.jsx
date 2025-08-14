import { useForm } from "react-hook-form";
import axios from "axios";
import API from "../utils/api";

const TransactionForm = ({ fetchTransactions }) => {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = async (data) => {
    try {
      await axios.post(`${API}/transactions`, data);
      fetchTransactions();
      reset();
    } catch (error) {
      console.error("Error adding transaction:", error);
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-4 bg-white p-6 rounded-xl shadow-md"
    >
      <h2 className="text-lg font-semibold">Add Transaction</h2>

      <input
        {...register("title")}
        placeholder="Title"
        className="w-full border p-2 rounded"
        required
      />
      <input
        type="number"
        {...register("amount")}
        placeholder="Amount"
        className="w-full border p-2 rounded"
        required
      />
      <input
        type="date"
        {...register("date")}
        className="w-full border p-2 rounded"
        required
      />

      <button
        type="submit"
        className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700 transition"
      >
        Add Transaction
      </button>
    </form>
  );
};

export default TransactionForm;

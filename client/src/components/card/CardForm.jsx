import { useForm } from "react-hook-form";
import axios from "axios";
import API from "../../utils/api";

const CardForm = ({ fetchCards }) => {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = async (data) => {
    console.log("Submitting card data:", data);
    try {
      await axios.post(`${API}/cards`, data);
      fetchCards();
      reset();
    } catch (error) {
      console.error("Error adding card:", error);
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-4 bg-white p-6 rounded-lg shadow"
    >
      <h2 className="text-lg font-semibold text-gray-800">Add Card</h2>

      <input
        type="text"
        placeholder="Card Name"
        {...register("cardName", { required: true })}
        className="w-full border px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      <input
        type="text"
        placeholder="Bank Name"
        {...register("bankName", { required: true })}
        className="w-full border px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      <input
        type="text"
        placeholder="Currency (e.g. PHP, USD)"
        {...register("currency", { required: true })}
        className="w-full border px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      <input
        type="number"
        step="0.01"
        placeholder="Amount"
        {...register("amount", { required: true })}
        className="w-full border px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      <input
        type="number"
        step="0.01"
        placeholder="Interest (% p.a)"
        {...register("interest")}
        className="w-full border px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      <select
        {...register("type", { required: true })}
        className="w-full border px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        <option value="">Select Type</option>
        <option value="debit">Debit</option>
        <option value="credit">Credit</option>
      </select>

      <button
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
      >
        Add Card
      </button>
    </form>
  );
};

export default CardForm;

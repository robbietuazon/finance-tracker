import { useEffect, useState } from "react";
import axios from "axios";
import API from "../utils/api";
import CardFord from "../components/card/CardForm";
import CardList from "../components/card/CardList";
import TransactionForm from "../components/TransactionForm";
import TransactionList from "../components/TransactionList";
import Savings from "../components/Savings";

const Dashboard = () => {
  const [cards, setCards] = useState([]);
  const [transactions, setTransactions] = useState([]);

  const fetchCards = async () => {
    try {
      const res = await axios.get(`${API}/cards`);
      console.log("Fetched cards:", res.data);
      setCards(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  const fetchTransactions = async () => {
    try {
      const res = await axios.get(`${API}/transactions`);
      setTransactions(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchCards();
    fetchTransactions();
  }, []);

  return (
    <div className="max-w-4xl mx-auto px-4 py-8 space-y-10">
      <CardFord fetchCards={fetchCards} />
      <CardList cards={cards} />
      <TransactionForm fetchTransactions={fetchTransactions} />
      <TransactionList transactions={transactions} />
      <Savings />
    </div>
  );
};

export default Dashboard;

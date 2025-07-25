// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App

import { useEffect, useState } from "react";
import axios from "axios";
import TransactionForm from "./components/TransactionForm";
import TransactionList from "./components/TransactionList";
import "./App.css";

function App() {
  const API = import.meta.env.VITE_API_URL;

  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    axios.get(`${API}/transactions`).then((res) => setTransactions(res.data));
  }, []);

  const handleAdd = (newTx) => {
    setTransactions([newTx, ...transactions]);
  };

  return (
    <div className="container">
      <h1>💰 Finance Tracker</h1>
      <TransactionForm onAdd={handleAdd} />
      <TransactionList transactions={transactions} />
    </div>
  );
}

export default App;

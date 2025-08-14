// export default function TransactionList({ transactions }) {
//   return (
//     <ul className="list">
//       {transactions.map((tx) => (
//         <li key={tx._id}>
//           <strong>{tx.title}</strong> - ₱{tx.amount}
//         </li>
//       ))}
//     </ul>
//   );
// }

const TransactionList = ({ transactions }) => {
  return (
    <div className="space-y-4 mt-8">
      <h2 className="text-xl font-semibold text-gray-800">Transactions</h2>
      {transactions.length === 0 && (
        <p className="text-gray-500">No transactions yet.</p>
      )}
      {transactions.map((tx) => (
        <div key={tx._id} className="border rounded-lg p-4 shadow-sm bg-white">
          <div className="flex justify-between">
            <h3 className="font-medium text-gray-900">{tx.title}</h3>
            <span className="text-sm text-gray-600">
              {new Date(tx.date).toLocaleDateString()}
            </span>
          </div>
          <p className="text-sm text-gray-700 mt-1">Amount: {tx.amount}</p>
        </div>
      ))}
    </div>
  );
};

export default TransactionList;

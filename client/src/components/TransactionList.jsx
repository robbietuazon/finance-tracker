export default function TransactionList({ transactions }) {
  return (
    <ul className="list">
      {transactions.map((tx) => (
        <li key={tx._id}>
          <strong>{tx.title}</strong> - ₱{tx.amount}
        </li>
      ))}
    </ul>
  );
}

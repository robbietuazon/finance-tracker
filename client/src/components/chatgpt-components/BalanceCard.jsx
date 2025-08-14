const BalanceCard = ({ total }) => (
  <div className="text-white p-6 bg-gradient-to-r from-orange-400 to-pink-500 rounded-b-3xl shadow-lg">
    <h2 className="text-lg font-semibold uppercase tracking-wide">Dashboard</h2>
    <p className="mt-4 text-sm">Balance</p>
    <h1 className="text-4xl font-bold">
      ₱{total.toLocaleString("en-US", { minimumFractionDigits: 2 })}
    </h1>
  </div>
);

export default BalanceCard;

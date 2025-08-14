import CardList from './CardList';
import TransactionList from './TransactionList';

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">Finance Tracker</h1>

      <div className="grid md:grid-cols-2 gap-6">
        {/* Cards Section */}
        <section>
          <h2 className="text-xl font-semibold mb-4">Cards</h2>
          <CardList />
        </section>

        {/* Transactions Section */}
        <section>
          <h2 className="text-xl font-semibold mb-4">Transactions</h2>
          <TransactionList />
        </section>
      </div>
    </div>
  );
}

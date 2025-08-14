import { useEffect, useState } from "react";

const API = import.meta.env.VITE_API_URL;

const AccountList = () => {
  const [accounts, setAccounts] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchAccounts = async () => {
    try {
      const res = await fetch(
        "https://finance-tracker-q63k.onrender.com/api/accounts"
      );
      const data = await res.json();
      setAccounts(data);
    } catch (err) {
      alert("Failed to load accounts.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAccounts();
  }, []);

  return (
    <div className="mt-6">
      <h2 className="text-xl font-bold mb-2">Saved Accounts</h2>
      {loading ? (
        <p>Loading...</p>
      ) : accounts.length === 0 ? (
        <p className="text-gray-500">No accounts yet.</p>
      ) : (
        <ul className="space-y-3">
          {accounts.map((account) => (
            <li key={account._id} className="p-4 border rounded shadow-sm">
              <div className="font-semibold">{account.bankName}</div>
              <div>
                {account.currency} {account.amount} ({account.type})
              </div>
              <div className="text-sm text-gray-600">
                {account.interest}% p.a
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default AccountList;

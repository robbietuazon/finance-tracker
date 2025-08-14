import { Bell } from "lucide-react";
import Card from "./chatgpt-components/Card";
import BottomNav from "./navigation/BottomNav";

// Main Banking Dashboard Component
const Savings = () => {
  const accounts = [
    {
      name: "BDO",
      balance: "10,000",
      color: "bg-blue-600",
      textColor: "text-white",
    },
    {
      name: "tonik",
      balance: "10,000",
      color: "bg-purple-500",
      textColor: "text-white",
    },
    {
      name: "SeaBank",
      balance: "10,000",
      color: "bg-orange-500",
      textColor: "text-white",
    },
    {
      name: "maya",
      balance: "10,000",
      color: "bg-black",
      textColor: "text-green-400",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-500 via-orange-500 to-orange-400">
      {/* Header */}
      <div className="flex justify-between items-center p-6 pt-12">
        <h1 className="text-white text-2xl font-bold tracking-wide">
          DASHBOARD
        </h1>
        <Bell className="text-white w-6 h-6" />
      </div>

      {/* Balance Section */}
      <div className="px-6 mb-8">
        <h2 className="text-white text-4xl font-light mb-2">BALANCE</h2>
        <h3 className="text-white text-6xl font-bold">₱100,000.58</h3>
      </div>

      {/* Accounts Section */}
      <div className="bg-white rounded-t-3xl min-h-screen pt-8 px-6">
        <h2 className="text-black text-2xl font-bold mb-6">ACCOUNTS</h2>

        {/* Account Cards Grid */}
        <div className="grid grid-cols-2 gap-4 mb-8">
          {accounts.map((account, index) => (
            <Card key={index} account={account} />
          ))}
        </div>

        {/* Bottom Navigation */}
        <BottomNav />
      </div>
    </div>
  );
};
export default Savings;

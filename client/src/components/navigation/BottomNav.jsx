import { Home, Search, PieChart, Clock, User } from "lucide-react";

const BottomNav = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200">
      <div className="flex justify-around items-center py-4 px-6">
        <div className="bg-blue-600 p-3 rounded-2xl">
          <Home className="w-6 h-6 text-white" />
        </div>
        <Search className="w-6 h-6 text-gray-400" />
        <PieChart className="w-6 h-6 text-gray-400" />
        <Clock className="w-6 h-6 text-gray-400" />
        <User className="w-6 h-6 text-gray-400" />
      </div>
    </div>
  );
};

export default BottomNav;

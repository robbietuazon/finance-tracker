import { Home, User, Clock, ChartPie, Circle } from "lucide-react";

const BottomNav = () => (
  <div className="fixed bottom-0 left-0 right-0 bg-white py-2 px-4 flex justify-between items-center shadow-md rounded-t-3xl">
    <Home className="text-purple-600 text-2xl" />
    <Circle className="text-gray-400 text-xl" />
    <ChartPie className="text-gray-400 text-xl" />
    <Clock className="text-gray-400 text-xl" />
    <User className="text-gray-400 text-xl" />
  </div>
);

export default BottomNav;

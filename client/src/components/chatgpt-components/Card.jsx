// ...existing code...

// Card Component
const Card = ({ account }) => {
  return (
    <div
      className={`${account.color} rounded-2xl p-4 h-32 flex flex-col justify-between relative overflow-hidden`}
    >
      {/* Interest Rate Badge */}
      <div className="absolute top-3 right-3">
        <span className="bg-black bg-opacity-20 text-white text-xs px-2 py-1 rounded-full">
          4.00% p.a.
        </span>
      </div>

      {/* Bank Name */}
      <div className={`${account.textColor} font-bold text-lg`}>
        {account.name}
      </div>

      {/* Balance and Account Type */}
      <div className="flex justify-between items-end">
        <div className="flex items-baseline space-x-1">
          <span className={`${account.textColor} text-xs opacity-75`}>PHP</span>
          <span className={`${account.textColor} text-2xl font-bold`}>
            {account.balance}
          </span>
        </div>
        <div className={`${account.textColor} text-sm font-medium opacity-75`}>
          DEBIT
        </div>
      </div>
    </div>
  );
};

export default Card;

const AccountCard = ({ bank, amount, interest, type, color }) => (
  <div className={`rounded-xl text-white p-4 ${color} w-[160px]`}>
    <div className="flex justify-between items-center mb-3">
      <span className="text-lg font-bold">{bank}</span>
      <span className="text-xs bg-white text-black px-1 rounded">
        {interest} p.a.
      </span>
    </div>
    <div>
      <p className="text-sm">PHP</p>
      <p className="text-2xl font-bold">{amount.toLocaleString()}</p>
    </div>
    <div className="text-xs mt-2">{type}</div>
  </div>
);

export default AccountCard;

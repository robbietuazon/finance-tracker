// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import API from "../../utils/api";

import Card from "./Card";

// function CardList() {
//   const [cards, setCards] = useState([]);

//   useEffect(() => {
//     axios.get(`${API}/cards`).then((res) => setCards(res.data));
//   }, []);

//   return (
//     <div>
//       <h2 className="text-xl font-semibold mt-4">Cards</h2>
//       <ul className="list-disc ml-6">
//         {cards.map((card) => (
//           <li key={card._id}>
//             {card.bankName} - {card.currency} {card.amount} ({card.type},{" "}
//             {card.interest}% p.a)
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default CardList;

const CardList = ({ cards }) => {
  console.log("Cards in CardList:", cards);
  const totalAmount = cards.reduce((sum, card) => sum + card.amount, 0);
  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold text-gray-800">My Cards</h2>
      <h3>Total: ${totalAmount}</h3>
      {cards.length === 0 && <p className="text-gray-500">No cards yet.</p>}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
        {cards.map((card) => (
          // <div
          //   key={card._id}
          //   className="border rounded-lg p-4 shadow-sm bg-white"
          // >
          //   <div className="flex justify-between items-center mb-2">
          //     <span className="text-lg font-medium text-gray-900">
          //       {card.cardName}
          //     </span>
          //     <span className="text-sm text-gray-500 uppercase">
          //       {card.currency}
          //     </span>
          //   </div>
          //   <p className="text-sm text-gray-700">Bank: {card.bankName}</p>
          //   <p className="text-sm text-gray-700">Type: {card.type}</p>
          //   <p className="text-sm text-gray-700">Amount: {card.amount}</p>
          //   {card.interest && (
          //     <p className="text-sm text-gray-700">
          //       Interest: {card.interest}% p.a
          //     </p>
          //   )}
          // </div>
          <Card key={card._id} card={card} />
        ))}
      </div>
    </div>
  );
};

export default CardList;

// ...existing code...

// Card Component

import BDO from "../../../public/LOGO/BDO.png";
import BPI from "../../../public/LOGO/BPI.png";
import GOTYME from "../../../public/LOGO/GOTYME.png";
import CIMB from "../../../public/LOGO/CIMB.png";
import MAYA from "../../../public/LOGO/MAYA.png";
import GCASH from "../../../public/LOGO/GCASH.png";
import SEABANK from "../../../public/LOGO/SEABANK.png";
import CASH from "../../../public/LOGO/CASH.png";
import OWNBANK from "../../../public/LOGO/OWNBANK.png";

const BANK_COLORS = {
  BDO: "#004ea8",
  BPI: "#004ea8",
  GOTYME: "#004ea8",
  CIMB: "#004ea8",
  MAYA: "#004ea8",
  GCASH: "#004ea8",
  SEABANK: "#004ea8",
  CASH: "#004ea8",
};

// Get logo by bank name
export function getBankLogo(bankName) {
  switch (bankName.toUpperCase()) {
    case "BDO":
      return BDO;
    case "BPI":
      return BPI;
    case "GOTYME":
      return GOTYME;
    case "CIMB":
      return CIMB;
    case "MAYA":
      return MAYA;
    case "GCASH":
      return GCASH;
    case "SEABANK":
      return SEABANK;
    case "CASH":
      return CASH;
    case "OWNBANK":
      return OWNBANK;
    default:
      return null; // Or a fallback image/logo
  }
}

// Get color by bank name
export function getBankColor(bankName) {
  switch (bankName.toUpperCase()) {
    case "BDO":
      return "#004ea8"; // Example BDO blue
    case "BPI":
      return "#a42d31"; // Example BPI red
    case "GOTYME":
      return "#06f5fa"; // Example GoTyme yellow
    case "CIMB":
      return "#ee3124"; // Example CIMB red
    case "MAYA":
      return "#000000"; // Maya green
    case "GCASH":
      return "#1e72fa"; // GCash blue
    case "SEABANK":
      return "#ea5f00"; // Example SeaBank blue
    case "CASH":
      return "#5b905c"; // Custom green for "CASH"
    case "OWNBANK":
      return "#000000"; // Custom gray for "OWNBANK"
    default:
      return "#cccccc"; // Default/fallback color
  }
}

const Card = ({ card }) => {
  console.log(card);
  return (
    <div
      style={{ backgroundColor: getBankColor(card?.bankName) }} // Tailwind's bg-blue-700
      className={`bg-blue-700 rounded-2xl px-4 pt-2 pb-4 h-40 flex flex-col justify-between relative overflow-hidden shadow-md`}
    >
      {/* Interest Rate Badge */}
      <div className="absolute top-3 right-3">
        <span className="bg-black/25 bg-opacity-0 text-white text-xs px-2 py-1 rounded-full">
          4.00% p.a.
        </span>
      </div>

      {/* Bank Name */}
      {/* <div className={`text-white font-bold text-lg`}>
       
        {card?.bankName}
      </div> */}
      <div>
        <img
          src={getBankLogo(card?.bankName)}
          alt={card?.bankName}
          className="h-15 object-cover"
        />
      </div>

      {/* Balance and Account Type */}
      <div className="flex justify-between items-end">
        <div className="flex items-baseline space-x-1">
          <span className={`text-white text-xs opacity-75`}>PHP</span>
          <span className={`text-white text-4xl font-bold`}>
            {card?.amount}
          </span>
        </div>
        <div className={`text-white text-sm font-medium opacity-75`}>
          {card?.cardName}
        </div>
      </div>
    </div>
  );
};

export default Card;

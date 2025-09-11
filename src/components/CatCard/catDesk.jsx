import { useState } from "react";
import { CatCardDetail } from "../../data/CatCardDetail.js";
import { selectNRandom } from "../Utils/helpers/Shuffle.jsx";
import { CatRequires } from "./Catrequired.jsx";

const N = 3;

export const CatDesk = () => {
  const [remainingCards, setRemainingCards] = useState(CatCardDetail);
  const [displayCards, setDisplayCards] = useState([]);

  const drawCards = () => {
    if (remainingCards.length === 0) {
      alert("Card was run out!!");
      return;
    }

    const count = Math.min(N, remainingCards.length);

    const drawn = selectNRandom(remainingCards, count);

    const newRemaining = remainingCards.filter((card) => !drawn.includes(card));

    setDisplayCards(drawn);
    setRemainingCards(newRemaining);
  };

  const resetDeck = () => {
    setRemainingCards(CatCardDetail);
    setDisplayCards([]);
  };

  return (
    <div className="space-y-4">
      <button onClick={drawCards} className="px-3 py-2 border rounded">
        🔁 Draw {N} Cards
      </button>
      <button onClick={resetDeck} className="px-3 py-2 border rounded">
        ♻️ Reset Deck
      </button>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6 shadow-sha">
        {displayCards.map((cat) => (
          <div
            key={cat.id}
            className="border-2 rounded-md w-60 text-center bg-white"
          >
            <h1 className="text-2xl font-bold py-1.5 bg-amber-200 w-full">
              {cat.name}
            </h1>
            <p className="italic">{cat.dialog}</p>
{/*             <div>
              <CatRequires />
            </div> */}
            <img src={cat.imageSrc} alt={cat.name} className="w-60" />
            <p className="text-lg py-1.5 bg-green-300 w-full">
              💖 Kitty Detail 💖
            </p>
            <p>Rarity: {cat.rarity}</p>
            <p>Personality: {cat.personality.join(", ")}</p>
            <p>Favorite: {cat.favorite.join(", ")}</p>
            <p>Point: {cat.point} point</p>
          </div>
        ))}
      </div>
    </div>
  );
};

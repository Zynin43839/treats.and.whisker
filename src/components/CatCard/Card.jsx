import { CatRequires } from "./Catrequired";

export const Card = ({ cat }) => {
  return (
    <>
      {" "}
      <div className="border-2 rounded-md w-60 text-center bg-white">
        <h1 className="text-2xl font-bold py-1.5 bg-amber-200 w-full">
          {cat.name}
        </h1>
        <p className="italic">{cat.dialog}</p>
        <div className="flex h-1/16">
          <img src={cat.imageSrc} alt={cat.name} className="w-60" />
          <CatRequires />
        </div>
        <p className="text-lg py-1.5 bg-green-300 w-full">💖 Kitty Detail 💖</p>
        <p>Rarity: {cat.rarity}</p>
        <p>Personality: {cat.personality.join(", ")}</p>
        <p>Favorite: {cat.favorite.join(", ")}</p>
        <p>Point: {cat.point} point</p>
      </div>
    </>
  );
};

export default Card;

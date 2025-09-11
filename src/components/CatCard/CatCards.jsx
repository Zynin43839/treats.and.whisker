import { CatCardDetail } from "../../data/CatCardDetail.js";
import { Toy } from "../../data/ToysAndTreats.js";
import Card from "./Card.jsx";
import { CatRequires } from "./Catrequired.jsx";

const CatCards = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6 shadow-sha">
      {CatCardDetail.map((cat) => (
        <Card key={cat.id} cat={cat} />
      ))}
    </div>
  );
};

export default CatCards;

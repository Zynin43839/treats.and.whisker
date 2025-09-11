import { Toys } from "../../data/ToysAndTreats.js";
import { selectNRandom } from "../Utils/helpers/Shuffle.jsx";

export const CatRequires = ({ perToy = 1 }) => {
  return (
    <div className="flex flex-col">
      {Toys.map((toy, i) => {
        const images = selectNRandom(toy.imageSrc, perToy);

        return (
          <div
            key={toy.name ?? i}
            className="border-2 rounded-md w-60 text-center bg-white p-2"
          >
            <h3 className="font-bold mb-2">{toy.name}</h3>

            {images.map((src, j) =>
              Array.from({ length: 3 }).map((_, k) => (
                <img
                  key={`${toy.name}-${j}-${k}`}
                  src={`${toy.imageSrc}-${j}-${k}`}
                  alt={`${toy.name}-${j}-${k}`}
                  className="w-60"
                />
              ))
            )}
          </div>
        );
      })}
    </div>
  );
};

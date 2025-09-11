import { CatDesk } from "./components/CatCard/catDesk";

export default function App() {
  return (
    <div className="font-[Fira Sans] min-h-screen flex justify-center bg-[#557C93]">
      <div className="p-6 gap-y-6 flex flex-col justify-start w-[80%] lg:w-[70%]">
        <h1 className="w-full p-6 bg-amber-100 font-extrabold"></h1>
        <section className="w-full p-5 bg-amber-100 flex">
          <CatDesk />
        </section>
      </div>
    </div>
  );
}

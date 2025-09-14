import { CatDesk } from "../../components/CatCard/catDesk";

function WoodWallBackground() {
  const style = {
    backgroundColor: "#8a5a3a",
    backgroundImage: [
      "repeating-linear-gradient(90deg, rgba(0,0,0,0.08) 0 1px, transparent 1px 120px)",
      "linear-gradient(180deg, rgba(0,0,0,0.06), rgba(255,255,255,0.06))",
      "radial-gradient(circle at 15% 30%, rgba(0,0,0,0.06) 0 8%, transparent 9%), radial-gradient(circle at 70% 60%, rgba(0,0,0,0.05) 0 7%, transparent 8%)",
    ].join(", "),
    backgroundSize: "120px 100%, 100% 100%, 380px 380px, 420px 420px",
    filter: "saturate(0.9)",
  };
  return <div className="absolute inset-0 -z-10" style={style} />;
}

function PawDecor() {
  const base = "pointer-events-none select-none opacity-25";
  return (
    <>
      <div className={`absolute top-10 left-6 text-3xl ${base}`}>🐾</div>
      <div className={`absolute top-24 right-10 text-2xl ${base}`}>🐾</div>
      <div className={`absolute bottom-24 left-10 text-2xl ${base}`}>🐾</div>
      <div className={`absolute bottom-14 right-6 text-3xl ${base}`}>💛</div>
    </>
  );
}

function HomePage() {
  return (
    <div className="font-[Fira Sans] min-h-screen relative overflow-hidden">
      <WoodWallBackground />
      <div className="absolute inset-0 bg-[#557C93]/25 -z-10" />

      <div className="min-h-screen flex justify-center">
        <div className="p-6 gap-y-6 flex flex-col justify-around w-[80%] lg:w-[70%]">
          <div className="relative">
            <h1 className="w-full p-6 bg-amber-100/95 font-extrabold rounded-2xl shadow-md tracking-wide text-[#3b2c1c]">
              <span className="block text-2xl md:text-3xl">
                Treats &amp; Whiskers
              </span>
              <span className="block text-[12px] md:text-sm font-medium text-[#6b4f37] mt-1">
                Inspried from Park Board Game (This Project is for education)
              </span>

              <span className="mt-3 inline-flex items-center gap-2 text-sm md:text-base font-semibold bg-rose-100 text-rose-700 px-3 py-1 rounded-full shadow-sm">
                <span>Win their hearts, one purr at a time.</span>{" "}
              </span>
            </h1>

            <span className="absolute -top-2 -right-2 w-8 h-8 bg-amber-200 rotate-45 rounded-sm shadow-sm" />
          </div>

          <section className="relative w-full p-5 bg-amber-100/95 flex rounded-2xl shadow-md">
            <PawDecor />
            <div className="w-full grid grid-row-1 lg:grid-rows-1-3 gap-4">
              <div className="order-2 lg:order-1 lg:col-span-1 flex flex-col justify-between">
                <div>
                  <h2 className="text-lg font-bold text-[#3b2c1c]">
                    A cozy strategy game with cats
                  </h2>
                  <p className="text-sm mt-2 text-[#5a4632] leading-relaxed">
                    Gather treats, charm feline friends, and manage your turns
                    wisely. Light-to-mid weight gameplay with cute, readable
                    UI—perfect for a calm evening.
                  </p>
                </div>

                <div className="mt-4 flex flex-wrap gap-2">
                  <span className="px-2 py-1 text-xs bg-emerald-100 text-emerald-700 rounded-full">
                    Set Collection
                  </span>
                  <span className="px-2 py-1 text-xs bg-indigo-100 text-indigo-700 rounded-full">
                    Hand Management
                  </span>
                  <span className="px-2 py-1 text-xs bg-amber-200 text-amber-800 rounded-full">
                    Low–Mid Weight
                  </span>
                </div>

                <div className="mt-5 flex items-center gap-3">
                  {/* <button className="px-4 py-2 rounded-xl bg-[#557C93] text-white text-sm font-semibold hover:bg-[#4a6f86] transition-colors shadow">
                    Start Game
                  </button> */}
                  {/* <button className="px-4 py-2 rounded-xl bg-white/70 text-[#3b2c1c] text-sm font-medium hover:bg-white transition-colors shadow border border-black/5">
                    Rules
                  </button> */}
                </div>
              </div>

              <div className="order-1 lg:order-2 lg:col-span-2 bg-white/70 rounded-xl p-3 border border-black/5 shadow-inner">
                <CatDesk />
              </div>
            </div>
          </section>

          <div className="text-[11px] md:text-xs text-white/90">
            <span className="inline-flex items-center gap-1">
              <span className="opacity-90">🐾</span>
              <span>
                Prototype Phase 1 — component logic &amp; stateful interactions
              </span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;

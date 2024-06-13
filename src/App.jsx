import { useEffect, useState } from "react";
import Description from "./components/Description";
import Banner from "./components/Banner";

function App() {
  const [toggle, setToggle] = useState(true);

  useEffect(() => {
    setToggle(false);
  }, []);

  return (
    <>
      <main className="w-screen h-screen flex justify-center p-5 md:p-10">
        <div className="w-full max-w-2xl bg-white shadow-xl h-max rounded-md overflow-hidden">
          <Banner />
          <div className="p-5 pt-8 pb-5 rounded-md">
            <div className="flex flex-col md:flex-row justify-between ">
              <div>
                <div className="flex items-center gap-3">
                  <img
                    src="/src/assets/img/Icon-building.png"
                    alt="icon"
                    className="w-10 h-10 md:w-14 md:h-14 hover:opacity-95"
                  />
                  <div className="">
                    <p className="font-semibold text-[#1A2258] text-lg mb-1">
                      Forett At Bukit Timah
                    </p>
                    <p className="text-[#787D9C] text-sm">
                      70 Anchorvale Crescent · D21
                    </p>
                  </div>
                </div>
                <div className="text-[#1A2258] mt-2">
                  <p>Condo · 2021 · Freehold</p>
                  <p>231 units · 1, 2, 3, 4 bedrooms</p>
                </div>
              </div>
              <div className="mt-3 md:mt-0">
                <p className="font-semibold text-[#1A2258] text-lg mb-1">
                  $2,609 - $3,043 psf
                </p>
                <p className="text-[#787D9C] text-sm">Prices from $1.99M</p>
              </div>
            </div>
            <div className="">
              {toggle && <Description />}
              <p
                onClick={() => setToggle(!toggle)}
                className="cursor-pointer text-[#F2833E] text-end font-semibold"
              >
                {toggle ? "Hide" : "See"} description
              </p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default App;

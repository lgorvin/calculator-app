import ThemeOne from "./components/ThemeOne";
import { useState } from "react";
import ThemeTwo from "./components/ThemeTwo";

function App() {
  const [rangeval, setRangeval] = useState(null);
  return (
    <div>
      <div className="h-[50px] w-[screen] mt-20 md:mt-28">
        <div className="flex justify-center items-center">
          <p className="text-white text-2xl float-left mr-2 md:mr-44 duration-300">
            calc
          </p>
          <p className="text-sm leading-snug text-white ml-44 md:ml-44 mr-4 duration-300">
            THEME
          </p>
          <p className=" text-white absolute mb-10 ml-[285px] md:ml-[452px] duration-300">
            1 <span className="m-2">2</span> 3
          </p>
          <input
            type="range"
            className="custom-range slider bg-slate-600 "
            min="1"
            max="3"
            defaultValue="0"
            onChange={(event) => setRangeval(event.target.value)}
          />
        </div>
      </div>
      {rangeval === "1" && <ThemeOne />}
      {rangeval === "2" && <ThemeTwo />}
      {rangeval === "3" && <ThemeOne />}
    </div>
  );
}

export default App;

import ThemeOne from "./components/ThemeOne";
import { useState } from "react";

function App() {
  const [rangeval, setRangeval] = useState(null);
  return (
    <div>
      <div className="h-[50px] w-[screen] mt-28">
        <div className="flex justify-center items-center">
          <p className="text-white text-2xl float-left mr-44">calc</p>
          <p className="text-sm leading-snug text-white ml-44 mr-4">THEME</p>
          <p className=" text-white absolute mb-10 ml-[452px]">
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
      <ThemeOne />
    </div>
  );
}

export default App;

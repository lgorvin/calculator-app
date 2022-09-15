import ThemeOne from "./components/ThemeOne";
import { useState } from "react";
import ThemeTwo from "./components/ThemeTwo";
import ThemeThree from "./components/ThemeThree";

function bgClassName(theme) {
  if (theme === "1") {
    return "h-screen mt-[-80px] md:mt-[-112px] pl-0 themeonemainbg";
  } else if (theme === "2") {
    return "h-screen mt-[-80px] md:mt-[-112px] pl-0 themetwomainbg";
  } else if (theme === "3") {
    return "h-screen mt-[-80px] md:mt-[-112px] pl-0 themethreemainbg";
  }
}

function sliderClassName(theme) {
  if (theme === "1") {
    return "custom-range slider bg-slate-600 mt-[78px]";
  } else if (theme === "2") {
    return "custom-range slider2 bg-slate-600 mt-[78px]";
  } else if (theme === "3") {
    return "custom-range slider3 bg-slate-600 mt-[78px]";
  }
}

function textClassName1(theme) {
  if (theme === "1") {
    return "text-sm leading-snug text-white ml-[145px] pt-[80px] sm:ml-60 md:ml-44 mr-4 duration-300";
  } else if (theme === "2") {
    return "text-sm leading-snug text-black ml-[145px] pt-[80px] sm:ml-60 md:ml-44 mr-4 duration-300";
  } else if (theme === "3") {
    return "text-sm leading-snug themethreekeytext ml-[145px] pt-[80px] sm:ml-60 md:ml-44 mr-4 duration-300";
  }
}

function textClassName2(theme) {
  if (theme === "1") {
    return "text-white text-2xl float-left pt-[80px] mr-2 md:mr-44 duration-300";
  } else if (theme === "2") {
    return "text-black text-2xl float-left pt-[80px] mr-2 md:mr-44 duration-300";
  } else if (theme === "3") {
    return "themethreekeytext text-2xl float-left pt-[80px] mr-2 md:mr-44 duration-300";
  }
}

function textClassName3(theme) {
  if (theme === "1") {
    return " text-white absolute mb-10 ml-[255px] pt-20 sm:ml-[350px] md:ml-[452px] duration-300";
  } else if (theme === "2") {
    return " text-black absolute mb-10 ml-[255px] pt-20 sm:ml-[350px] md:ml-[452px] duration-300";
  } else if (theme === "3") {
    return " themethreekeytext absolute mb-10 ml-[255px] sm:ml-[350px] pt-20 md:ml-[452px] duration-300";
  }
}

function App() {
  const [rangeval, setRangeval] = useState(null);
  return (
    <div className={bgClassName(rangeval)}>
      <div className="h-[50px] w-[screen] mt-20 md:mt-28">
        <div className="flex justify-center items-center">
          <p className={textClassName2(rangeval)}>calc</p>
          <p className={textClassName1(rangeval)}>THEME</p>
          <p className={textClassName3(rangeval)}>
            1 <span className="m-2">2</span> 3
          </p>
          <input
            type="range"
            className={sliderClassName(rangeval)}
            min="1"
            max="3"
            defaultValue="0"
            onChange={(event) => setRangeval(event.target.value)}
          />
        </div>
      </div>
      {rangeval === "1" && <ThemeOne />}
      {rangeval === "2" && <ThemeTwo />}
      {rangeval === "3" && <ThemeThree />}
    </div>
  );
}

export default App;

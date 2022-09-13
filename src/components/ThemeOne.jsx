import { useState } from "react";
import React from "react";

const ThemeOne = () => {
  const [calcNum, setCalcnum] = useState(0);
  const handleClick = (e) => {
    setCalcnum(e.target.value);
  };

  return (
    <div>
      <div className="flex justify-center w-screen">
        <div className="h-[140px] w-[530px] rounded-lg bg-slate-800">
          <h1 className="flex items-center h-full text-4xl text-white float-right mr-4">
            {calcNum}
          </h1>
        </div>
      </div>
      <div className="flex justify-center w-screen">
        <div className="h-[440px] w-[530px] mt-6 rounded-lg bg-slate-700">
          <div className="grid place-items-center grid-cols-4 gap-1 m-3 mt-6">
            <button
              value={7}
              onClick={handleClick}
              className="h-[65px] w-[90px] text-3xl bg-slate-200 rounded-lg"
            >
              7
            </button>
            <button
              value={8}
              onClick={handleClick}
              className="h-[65px] w-[90px] text-3xl bg-slate-200 rounded-lg"
            >
              8
            </button>
            <button
              value={9}
              onClick={handleClick}
              className="h-[65px] w-[90px] text-3xl  bg-slate-200 rounded-lg"
            >
              9
            </button>
            <button className="h-[65px] w-[90px] text-3xl text-white  bg-cyan-700 rounded-lg">
              DEL
            </button>
            <button
              value={4}
              onClick={handleClick}
              className="h-[65px] w-[90px] text-3xl mt-4 bg-slate-200 rounded-lg"
            >
              4
            </button>
            <button
              value={5}
              onClick={handleClick}
              className="h-[65px] w-[90px] text-3xl mt-4  bg-slate-200 rounded-lg"
            >
              5
            </button>
            <button
              value={6}
              onClick={handleClick}
              className="h-[65px] w-[90px] text-3xl mt-4  bg-slate-200 rounded-lg"
            >
              6
            </button>
            <button className="h-[65px] w-[90px] text-3xl mt-4  bg-slate-200 rounded-lg">
              +
            </button>
            <button
              value={1}
              onClick={handleClick}
              className="h-[65px] w-[90px] text-3xl mt-4 bg-slate-200 rounded-lg"
            >
              1
            </button>
            <button
              value={2}
              onClick={handleClick}
              className="h-[65px] w-[90px] text-3xl mt-4  bg-slate-200 rounded-lg"
            >
              2
            </button>
            <button
              value={3}
              onClick={handleClick}
              className="h-[65px] w-[90px] text-3xl mt-4  bg-slate-200 rounded-lg"
            >
              3
            </button>
            <button className="h-[65px] w-[90px] text-3xl mt-4  bg-slate-200 rounded-lg">
              -
            </button>
            <button className="h-[65px] w-[90px] text-3xl mt-4 bg-slate-200 rounded-lg">
              .
            </button>
            <button
              value={0}
              onClick={handleClick}
              className="h-[65px] w-[90px] text-3xl mt-4  bg-slate-200 rounded-lg"
            >
              0
            </button>
            <button className="h-[65px] w-[90px] text-3xl mt-4  bg-slate-200 rounded-lg">
              /
            </button>
            <button className="h-[65px] w-[90px] text-3xl mt-4  bg-slate-200 rounded-lg">
              x
            </button>
          </div>
          <div className="grid place-items-center grid-cols-2 gap-1 m-3 mt-4">
            <button className="h-[65px] w-[90%] text-3xl text-white  bg-cyan-700 rounded-lg">
              RESET
            </button>
            <button className="h-[65px] w-[90%] text-3xl text-white  bg-red-500 rounded-lg">
              =
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThemeOne;

{
  /* <button className="px-[48px] py-5 mt-6 mr-6 bg-rose-300 rounded-lg">
              4
            </button>
            <button className="px-[48px] py-5 mr-6 bg-rose-300 rounded-lg">
              5
            </button>
            <button className="px-[48px] py-5 mr-6 bg-rose-300 rounded-lg">
              6
            </button>
            <button className="px-[48px] py-5 bg-rose-300 rounded-lg">+</button>
            <button className="px-[48px] py-5 mt-6 mr-6 bg-rose-300 rounded-lg">
              1
            </button>
            <button className="px-[48px] py-5 mr-6 bg-rose-300 rounded-lg">
              2
            </button>
            <button className="px-[48px] py-5 mr-6 bg-rose-300 rounded-lg">
              3
            </button>
            <button className="px-[48px] py-5 bg-rose-300 rounded-lg">-</button>
            <button className="px-[48px] py-5 mt-6 mr-6 bg-rose-300 rounded-lg">
              .
            </button>
            <button className="px-[48px] py-5 mr-6 bg-rose-300 rounded-lg">
              0
            </button>
            <button className="px-[48px] py-5 mr-6 bg-rose-300 rounded-lg">
              /
            </button>
            <button className="px-[48px] py-5 bg-rose-300 rounded-lg">X</button> */
}

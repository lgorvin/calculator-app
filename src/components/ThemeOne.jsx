import { useState } from "react";
import React from "react";

const ThemeOne = () => {
  const [calcNum, setCalcnum] = useState("");
  const [result, setResult] = useState("");

  const ops = ["/", "x", "+", "-", "."];

  const updateCalc = (value) => {
    setCalcnum(calcNum + value);
  };
  const handleClick = (e) => {
    setCalcnum(e.target.value);
  };

  return (
    <div>
      <div className="flex justify-center w-screen">
        <div className="h-[140px] w-[530px] rounded-lg bg-slate-800">
          <h1 className="flex items-center h-full text-5xl text-white float-right mr-4">
            {result ? (
              <span className="text-gray-500 text-md mr-5">(0)</span>
            ) : (
              ""
            )}
            {calcNum || "0"}
          </h1>
        </div>
      </div>
      <div className="flex justify-center w-screen">
        <div className="h-[440px] w-[530px] mt-6 rounded-lg bg-slate-700">
          <div className="grid place-items-center grid-cols-4 gap-1 m-3 mt-6">
            <button
              onClick={() => updateCalc("7")}
              className="h-[65px] w-[90px] text-3xl bg-slate-200 rounded-lg"
            >
              7
            </button>
            <button
              onClick={() => updateCalc("8")}
              className="h-[65px] w-[90px] text-3xl bg-slate-200 rounded-lg"
            >
              8
            </button>
            <button
              onClick={() => updateCalc("9")}
              className="h-[65px] w-[90px] text-3xl  bg-slate-200 rounded-lg"
            >
              9
            </button>
            <button className="h-[65px] w-[90px] text-3xl text-white  bg-cyan-700 rounded-lg">
              DEL
            </button>
            <button
              onClick={() => updateCalc("4")}
              className="h-[65px] w-[90px] text-3xl mt-4 bg-slate-200 rounded-lg"
            >
              4
            </button>
            <button
              onClick={() => updateCalc("5")}
              className="h-[65px] w-[90px] text-3xl mt-4  bg-slate-200 rounded-lg"
            >
              5
            </button>
            <button
              onClick={() => updateCalc("6")}
              className="h-[65px] w-[90px] text-3xl mt-4  bg-slate-200 rounded-lg"
            >
              6
            </button>
            <button className="h-[65px] w-[90px] text-3xl mt-4  bg-slate-200 rounded-lg">
              +
            </button>
            <button
              onClick={() => updateCalc("1")}
              className="h-[65px] w-[90px] text-3xl mt-4 bg-slate-200 rounded-lg"
            >
              1
            </button>
            <button
              onClick={() => updateCalc("2")}
              className="h-[65px] w-[90px] text-3xl mt-4  bg-slate-200 rounded-lg"
            >
              2
            </button>
            <button
              onClick={() => updateCalc("3")}
              className="h-[65px] w-[90px] text-3xl mt-4  bg-slate-200 rounded-lg"
            >
              3
            </button>
            <button
              onClick={() => updateCalc("-")}
              className="h-[65px] w-[90px] text-3xl mt-4  bg-slate-200 rounded-lg"
            >
              -
            </button>
            <button
              onClick={() => updateCalc(".")}
              className="h-[65px] w-[90px] text-3xl mt-4 bg-slate-200 rounded-lg"
            >
              .
            </button>
            <button
              onClick={() => updateCalc("0")}
              className="h-[65px] w-[90px] text-3xl mt-4  bg-slate-200 rounded-lg"
            >
              0
            </button>
            <button
              onClick={() => updateCalc("/")}
              className="h-[65px] w-[90px] text-3xl mt-4  bg-slate-200 rounded-lg"
            >
              /
            </button>
            <button
              onClick={() => updateCalc("x")}
              className="h-[65px] w-[90px] text-3xl mt-4  bg-slate-200 rounded-lg"
            >
              x
            </button>
          </div>
          <div className="grid place-items-center grid-cols-2 gap-1 m-3 mt-4">
            <button className="h-[65px] w-[90%] text-3xl text-white  bg-cyan-700 rounded-lg">
              RESET
            </button>
            <button
              onClick={() => updateCalc("=")}
              className="h-[65px] w-[90%] text-3xl text-white  bg-red-500 rounded-lg"
            >
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

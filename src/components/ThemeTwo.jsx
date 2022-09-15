import { useState } from "react";
import React from "react";

const ThemeTwo = () => {
  const [calc, setCalc] = useState("");
  const [result, setResult] = useState("");

  const ops = ["/", "x", "+", "-", "."];

  const updateCalc = (value) => {
    if (
      (ops.includes(value) && calc === "") ||
      (ops.includes(value) && ops.includes(calc.slice(-1)))
    ) {
      return;
    }
    setCalc(calc + value);

    if (!ops.includes(value)) {
      setResult(eval(calc + value).toString());
    }
  };

  const calculate = () => {
    setCalc(eval(calc).toString());
    setResult("");
  };

  const deleteLast = () => {
    if (calc === "") {
      return;
    }

    const value = calc.slice(0, -1);

    setCalc(value);
  };

  const reset = () => {
    if (calc === "") {
      return;
    }

    const value = "";

    setCalc(value);
    setResult(value);
  };

  return (
    <div>
      <div className="flex justify-center w-screen">
        <div className="h-[140px] w-[320px] sm:w-[420px] md:h-[140px] mt-20 md:w-[530px] rounded-lg themetwoscreen duration-300">
          <h1 className="flex items-center h-full text-5xl text-black float-right mr-4">
            {result ? (
              <span className="text-gray-500 text-md mr-5">({result})</span>
            ) : (
              ""
            )}{" "}
            &nbsp;
            {calc || "0"}
          </h1>
        </div>
      </div>
      <div className="flex justify-center w-screen">
        <div className="h-[450px] w-[320px] sm:w-[420px] md:h-[450px] md:w-[530px] mt-6 rounded-lg themetwokeypad duration-300">
          <div className="grid place-items-center grid-cols-4 gap-1 m-3 mt-6">
            <button
              onClick={() => updateCalc("7")}
              className="h-[65px] w-[60px] md:w-[90px] hover:brightness-125 text-3xl themetwokeybg3 rounded-lg duration-300"
            >
              7
            </button>
            <button
              onClick={() => updateCalc("8")}
              className="h-[65px] w-[60px] md:w-[90px] hover:brightness-125 text-3xl themetwokeybg3 rounded-lg duration-300"
            >
              8
            </button>
            <button
              onClick={() => updateCalc("9")}
              className="h-[65px] w-[60px] md:w-[90px] hover:brightness-125 text-3xl  themetwokeybg3 rounded-lg duration-300"
            >
              9
            </button>
            <button
              onClick={deleteLast}
              className="h-[65px] w-[60px] md:w-[90px] hover:brightness-125 text-3xl text-white  themetwokeybg rounded-lg duration-300"
            >
              DEL
            </button>
            <button
              onClick={() => updateCalc("4")}
              className="h-[65px] w-[60px] md:w-[90px] hover:brightness-125 text-3xl mt-4 themetwokeybg3 rounded-lg duration-300"
            >
              4
            </button>
            <button
              onClick={() => updateCalc("5")}
              className="h-[65px] w-[60px] md:w-[90px] hover:brightness-125 text-3xl mt-4  themetwokeybg3 rounded-lg duration-300"
            >
              5
            </button>
            <button
              onClick={() => updateCalc("6")}
              className="h-[65px] w-[60px] md:w-[90px] hover:brightness-125 text-3xl mt-4  themetwokeybg3 rounded-lg duration-300"
            >
              6
            </button>
            <button
              onClick={() => updateCalc("+")}
              className="h-[65px] w-[60px] md:w-[90px] hover:brightness-125 text-3xl mt-4  themetwokeybg3 rounded-lg duration-300"
            >
              +
            </button>
            <button
              onClick={() => updateCalc("1")}
              className="h-[65px] w-[60px] md:w-[90px] hover:brightness-125 text-3xl mt-4 themetwokeybg3 rounded-lg duration-300"
            >
              1
            </button>
            <button
              onClick={() => updateCalc("2")}
              className="h-[65px] w-[60px] md:w-[90px] hover:brightness-125 text-3xl mt-4  themetwokeybg3 rounded-lg duration-300"
            >
              2
            </button>
            <button
              onClick={() => updateCalc("3")}
              className="h-[65px] w-[60px] md:w-[90px] hover:brightness-125 text-3xl mt-4  themetwokeybg3 rounded-lg duration-300"
            >
              3
            </button>
            <button
              onClick={() => updateCalc("-")}
              className="h-[65px] w-[60px] md:w-[90px] hover:brightness-125 text-3xl mt-4  themetwokeybg3 rounded-lg duration-300"
            >
              -
            </button>
            <button
              onClick={() => updateCalc(".")}
              className="h-[65px] w-[60px] md:w-[90px] hover:brightness-125 text-3xl mt-4 themetwokeybg3 rounded-lg duration-300"
            >
              .
            </button>
            <button
              onClick={() => updateCalc("0")}
              className="h-[65px] w-[60px] md:w-[90px] hover:brightness-125 text-3xl mt-4  themetwokeybg3 rounded-lg duration-300"
            >
              0
            </button>
            <button
              onClick={() => updateCalc("/")}
              className="h-[65px] w-[60px] md:w-[90px] hover:brightness-125 text-3xl mt-4  themetwokeybg3 rounded-lg duration-300"
            >
              /
            </button>
            <button
              onClick={() => updateCalc("*")}
              className="h-[65px] w-[60px] md:w-[90px] hover:brightness-125 text-3xl mt-4  themetwokeybg3 rounded-lg duration-300"
            >
              x
            </button>
          </div>
          <div className="grid place-items-center grid-cols-2 gap-1 m-3 mt-4">
            <button
              onClick={reset}
              className="h-[65px] w-[90%] text-3xl text-white hover:brightness-125 themetwokeybg rounded-lg duration-300"
            >
              RESET
            </button>
            <button
              onClick={calculate}
              className="h-[65px] w-[90%] text-3xl text-white hover:brightness-125 themetwokeybg2 rounded-lg duration-300"
            >
              =
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThemeTwo;

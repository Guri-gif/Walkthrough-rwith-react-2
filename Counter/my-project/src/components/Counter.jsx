import React, { useState } from "react";

export default function Counter() {
  const [counter, setCounter] = useState(0);

  const adder = () => {
    return setCounter(counter + 1);
  };

  const subtractor = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    }
  };
  return (
    <div className="w-[700px] h-[500px] bg-red-500 mx-[400px] mt-[100px] rounded-3xl shadow-2xl shadow-red-500">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <h1 className="text-5xl text-white">{counter}</h1>
        <div className="flex gap-10 mt-16">
          <button
            className="bg-white w-[150px] h-[50px] rounded-3xl shadow-2xl active:scale-90 duration-200"
            onClick={adder}
          >
            Increment
          </button>
          <button
            className="bg-white w-[150px] h-[50px] rounded-3xl shadow-2xl active:scale-90 duration-200"
            onClick={subtractor}
          >
            Decrement
          </button>
        </div>
      </div>
    </div>
  );
}

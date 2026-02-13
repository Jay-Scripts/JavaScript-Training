import React, { useState } from "react";

const HooksUseState = () => {
  const [number, setNumber] = useState(0);

  const addNum = () => {
    return setNumber(number + 1);
  };

  const minusNum = () => {
    return setNumber(number - 1);
  };

  return (
    <>
      <div className="border p-5 rounded-2xl gap-2">
        <p>Number = {number}</p>
        <hr className="my-4" />
        <div className="flex gap-2">
          <button onClick={addNum} className="rounded-sm px-4 bg-green-300">
            +
          </button>
          <button onClick={minusNum} className="rounded-sm px-4 bg-red-300">
            -
          </button>
        </div>
      </div>
    </>
  );
};

export default HooksUseState;

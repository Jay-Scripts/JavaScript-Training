import React, { useState } from "react";

const HooksUseState = () => {
  const [number, setNumber] = useState(0);
  const [text, setName] = useState("");
  const addNum = () => {
    return setNumber(number + 1);
  };

  const minusNum = () => {
    return setNumber(number - 1);
  };

  const ChangeText = (event) => {
    setName(event.target.value);
  };
  return (
    <>
      <h1 className="text-center bg-green-400 text-white p-5 rounded-sm  m-5">
        Hooks use state practice code
      </h1>
      <div className="border p-5 bg-blue-400 rounded-2xl gap-2 mb-5">
        <p className="text-2xl">Number = {number}</p>
        <hr className="my-4" />
        <div className="flex items-center justify-center gap-2">
          <button
            onClick={addNum}
            className="text-2xl rounded-sm px-4 bg-green-300"
          >
            +
          </button>
          <button
            onClick={minusNum}
            className="text-2xl rounded-sm px-4 bg-red-300"
          >
            -
          </button>
        </div>
      </div>

      <h1 className="text-center bg-green-400 text-white p-5 rounded-sm  m-5">
        On Change Event Listener Practice
      </h1>
      <div className="border p-5 bg-blue-400 rounded-2xl gap-2">
        <label htmlFor="Name">Input Name here :</label>
        <input
          type="text"
          name="name"
          id="name"
          className="border border-white m-2 rounded-sm"
          onChange={ChangeText}
        />

        <p>Name : {text}</p>
      </div>
    </>
  );
};

export default HooksUseState;

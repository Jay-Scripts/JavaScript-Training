import React from "react";

const Button = () => {
  const handdleClick = () =>
    (document.getElementById("message").innerHTML +=
      "<p>You Clicked me 🥶!</p>");
  return (
    <div>
      <button
        onClick={() => handdleClick()}
        className=" border bg-blue-400 p-5 rounded-xl m-5 cursor-pointer"
      >
        Button
      </button>
      <div className="flex flex-col">
        <p id="message"></p>
      </div>
    </div>
  );
};

export default Button;

import React from "react";

const Button = () => {
  const handleClick4 = () =>
    (document.getElementById("btn3").innerText = "Shooooshhh!!!!!!!!");
  const handleClick3 = () =>
    (document.getElementById("btn3").innerText = "Heyyyy!!!!!!!!");
  const handleClick2 = () =>
    (document.getElementById("btn2").innerText = "Fck😖!");
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
      <button id="btn2" onClick={() => handleClick2()}>
        Click meh 🥹
      </button>
      <div className="flex flex-col">
        <p id="message"></p>
      </div>

      <button
        onMouseOver={() => handleClick3()}
        onMouseOut={() => handleClick4()}
        id="btn3"
      >
        {" "}
        HIii
      </button>
    </div>
  );
};

export default Button;

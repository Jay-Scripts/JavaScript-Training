import React, { useEffect, useState } from "react";

const UseEffectHook = () => {
  const [emoji, setEmoji] = useState("🙂"); // initial emoji value

  useEffect(() => {
    // use effect runs when the btn is clicked!
    if (emoji === "🥶") {
      document.getElementById("h1").innerText = "is Clicked!";
    } else if (emoji === "😖") {
      document.getElementById("h1").innerText = "is hovered!";
    } else {
      document.getElementById("h1").innerText = "Not Clicked!";
    }
  }, [emoji]);
  const handleClick = () => {
    // handle click fnction
    setEmoji((e) => (e = "🥶"));
    setEmoji((e) => e + "🥶");
  };

  const handleHover = (event) => {
    setEmoji("😖");
  };
  const handleOut = (event) => {
    setEmoji("🙂");
  };
  return (
    <>
      <h1 id="h1">Use Effect Hooks</h1>

      <p>{emoji}</p>
      <button
        className="border border-white px-4 py-2 rounded-md m-4 "
        onMouseOver={handleHover}
        onMouseOut={handleOut}
        onClick={handleClick}
      >
        Click me
      </button>
    </>
  );
};

export default UseEffectHook;

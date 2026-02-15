import React, { useContext, useState } from "react";
import ContextC from "./UseContextC.jsx";
import { UserContext } from "./UseContextA.jsx";
const ContextB = () => {
  const name = useContext(UserContext);
  return (
    <>
      <div className="border border-black p-40">
        <h1>B Yo {name}</h1>
        <ContextC />
      </div>
    </>
  );
};

export default ContextB;

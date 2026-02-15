import React, { useContext, useState } from "react";
import { UserContext } from "./UseContextA.jsx";

const ContextC = () => {
  const name = useContext(UserContext);

  return (
    <>
      <div className="border border-black p-20">
        <h1>C : Drilled {name}</h1>
      </div>
    </>
  );
};

export default ContextC;

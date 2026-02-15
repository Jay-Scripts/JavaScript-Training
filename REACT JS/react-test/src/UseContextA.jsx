import React, { createContext, useContext, useState } from "react";
import ContextB from "./UseContextB";
export const UserContext = createContext();
const ContextA = () => {
  const [name, setName] = useState("Cornelio");
  return (
    <>
      <div className="border border-black p-50">
        <h1>A : Hi {name}</h1>
        <UserContext.Provider value={name}>
          <ContextB />
        </UserContext.Provider>
      </div>
    </>
  );
};

export default ContextA;

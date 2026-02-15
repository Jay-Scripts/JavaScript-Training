import { useState } from "react";
import "./App.css";
import ProductCard from "./ProductCard";
import Button from "./Button";
import HooksUseState from "./HooksUseState";
import ArrayUpdate from "./ArrayUpdate";
import UseEffectHook from "./UseEffectHook.jsx";
import UseContextA from "./UseContextA.jsx";
function App() {
  return (
    <>
      <div>
        <UseContextA />
      </div>
    </>
  );
}

export default App;

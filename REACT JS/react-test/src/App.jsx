import { useState } from "react";
import "./App.css";
import ProductCard from "./ProductCard";
import Button from "./Button";
import HooksUseState from "./HooksUseState";
function App() {
  return (
    <>
      <div className="grid place-content-center mt-5">
        <HooksUseState />
      </div>
    </>
  );
}

export default App;

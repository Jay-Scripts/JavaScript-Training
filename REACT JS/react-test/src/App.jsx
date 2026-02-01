import { useState } from "react";
import "./App.css";
import ProductCard from "./ProductCard";
function App() {
  return (
    <>
      <div className="flex justify-center align-center">
        <ProductCard inStock={true} name="Mechanical Keyboard" price={2000} />
        <ProductCard inStock={false} name="Mouse" price={400} />
        <ProductCard inStock={true} name="Monitor" price={5000} />
      </div>
    </>
  );
}

export default App;

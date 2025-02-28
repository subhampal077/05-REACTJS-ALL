import React from "react";
import AppleCounter from "./components/AppleCounter";
import Counter from "./components/Counter";
import "./style.css";

const App = () => {
  return (
    <div>
      <Counter />
      <AppleCounter />
    </div>
  );
};

export default App;

import React, { useState } from "react";
import AppleBasket from "./AppleBasket";
import Button from "./Button";
import LeftArrow from "../images/left-arrow.png";
import RightArrow from "../images/right-arrow.png";

function AppleCounter() {
  const [count, setCount] = useState(0);
  let totalCount = 10;

  function handleLeftClick() {
    if (count !== 10) {
      setCount(count + 1);
    }
  }

  function handleRightClick() {
    if (count !== 0) {
      setCount(count - 1);
    }
  }

  return (
    <div className="apple-counter">
      <AppleBasket count={count}>Basket 1</AppleBasket>

      <Button imageUrl={LeftArrow} handleClick={handleLeftClick} />

      <Button imageUrl={RightArrow} handleClick={handleRightClick} />

      <AppleBasket count={totalCount - count}>Basket 2</AppleBasket>
    </div>
  );
}

export default AppleCounter;

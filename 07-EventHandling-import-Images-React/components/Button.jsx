import React from "react";

function Button({ imageUrl, handleClick }) {
  return (
    <button className="button" onClick={handleClick}>
      <img className="arrow" src={imageUrl} alt="arrow-btn" />
    </button>
  );
}

export default Button;

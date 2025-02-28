import React from "react";

function AppleBasket({ count, children }) {
  return (
    <div className="apple-basket">
      <h1>{count} Apples</h1>
    {/* conditional rendering */}
      <p>
        {children} {count === 10 && "(Full)"} {count === 0 && "(Empty)"}
      </p>
    </div>
  );
}

export default AppleBasket;

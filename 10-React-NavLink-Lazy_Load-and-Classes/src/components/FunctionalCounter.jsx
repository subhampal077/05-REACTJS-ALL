import React, { useState } from "react";

function FunctionalCounter({ name }) {
  const [count, setCount] = useState(0);
  // const [count2, setCount2] = useState(0);

  return (
    <>
      <p className="pb-2 pt-4 text-xl font-medium">{name}</p>

      <div className="flex items-center gap-5">
        <button
          className="rounded bg-sky-500 px-2 py-1 text-2xl font-medium"
          onClick={() => {
            setCount(count - 1);
          }}
        >
          -
        </button>
        <p className="text-2xl font-semibold">{count}</p>

        <button
          className="rounded bg-sky-500 px-2 py-1 text-2xl font-medium"
          onClick={() => {
            setCount(count + 1);
          }}
        >
          +
        </button>
      </div>

      {/* <div className="flex items-center gap-5 pt-4">
        <button
          className="rounded bg-sky-500 px-2 py-1 text-2xl font-medium"
          onClick={() => {
            setCount2(count2 - 1);
          }}
        >
          -
        </button>
        <p className="text-2xl font-semibold">{count2}</p>

        <button
          className="rounded bg-sky-500 px-2 py-1 text-2xl font-medium"
          onClick={() => {
            setCount2(count2 + 1);
          }}
        >
          +
        </button>
      </div> */}
    </>
  );
}

export default FunctionalCounter;

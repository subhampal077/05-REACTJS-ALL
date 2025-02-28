import React, { useState } from "react";
import styles from "./Counter.module.css";

function Counter() {
  // state means local variable of the component anf its mutable
  const [counter, setCounter] = useState(0);

  return (
    <div>
      <p
        className={[
          styles["text-small"],
          styles["text-bold"],
          styles.textColor,
        ].join(" ")}
      >
        CSS Module Styles
      </p>

      <h1 className={styles["text-large"]}>{counter}</h1>

      <button
        className={styles.button}
        onClick={() => {
          setCounter(counter + 1);
          setCounter((prev) => prev + 1);
          setCounter((prev) => prev + 1);
        }}
      >
        Increase Counter
      </button>
    </div>
  );
}

export default Counter;

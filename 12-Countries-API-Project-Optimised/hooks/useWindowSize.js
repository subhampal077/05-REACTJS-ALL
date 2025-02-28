import { useEffect, useState } from "react";

function useWindowSize() {
  const [windowSize, setWindowSize] = useState();

  useEffect(() => {
    window.addEventListener("resize", () => {
      setWindowSize([innerWidth, innerHeight]);
    });
  }, []);

  return windowSize;
}

export default useWindowSize;

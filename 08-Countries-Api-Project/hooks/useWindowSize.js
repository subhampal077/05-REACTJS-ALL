import { useState, useEffect } from "react";


const useCustomHook = () => {
    function sayHi() {
        console.log("Hello")
    }
    return ["Hello", sayHi]
}

export function useWindowSize() {
    const [windowSize, setWindowSize] = useState({width: window.innerWidth, height: window.innerHeight});

    useEffect(() => {
      window.addEventListener("resize", () => {
        setWindowSize({width: window.innerWidth, height: window.innerHeight});
      });
    }, []);

    return windowSize
}
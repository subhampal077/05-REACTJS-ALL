import { useEffect, useState } from "react";

export function useLocalStorage(key, initialData) {
  const [storedData, setStoredData] = useState(() => {
    try {
      const item = JSON.parse(localStorage.getItem(key));

      return item ? item : initialData;
    } catch (err) {
      console.log("Error reading localStorage key:", key, err);
      return initialData;
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem(key, JSON.stringify(storedData));
    } catch (err) {
      console.log("Error reading localStorage key:", key, err);
    }
  }, [key, storedData]);

  return [storedData, setStoredData];
}

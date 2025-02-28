import { useState } from "react";

export function useFilter(dataArray, callBack) {
  const [filterVal, setFilterVal] = useState("");

  //   console.log(callBack);

  const filteredData = dataArray.filter((data) =>
    callBack(data).toLowerCase().includes(filterVal)
  );

  return [filteredData, setFilterVal];
}

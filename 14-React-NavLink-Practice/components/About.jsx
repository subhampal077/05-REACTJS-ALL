import React, { useState } from "react";
// import { data } from "../data";

function About() {
  const [loadData, setLoadData] = useState([]);

  return (
    <>
      <div>This is our About page</div>

      {/* loading data lazily or dynamicly loading data onClick */}

      <button
        className="py-5"
        onClick={() => {
          import("../data").then((module) => {
            // console.log(module.data);
            setLoadData(module.data);
          });
        }}
      >
        LoadData
      </button>

      <ul>
        {loadData && loadData.map((el) => <li key={el.id}>{el.title}</li>)}
      </ul>
    </>
  );
}

export default About;

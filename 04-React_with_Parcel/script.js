import React from "react";
import ReactDOM from "react-dom/client";

console.log(React);
console.log("hello world!!");

const h2 = (
  <h1>
    React with Parcel.
    <br /> <br /> This h1 is created by jsx
  </h1>
);

const container = ReactDOM.createRoot(document.querySelector("#container"));

container.render(h2);

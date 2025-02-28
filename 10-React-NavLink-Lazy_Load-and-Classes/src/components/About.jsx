import React, { useState } from "react";
import Model from "./Model";
// import { data } from "../data.js";

export function About() {
  const [isClose, setIsClose] = useState(true);

  const [loadData, setLoadData] = useState([]);

  return (
    <>
      <h2 className="text-xl font-semibold">
        Hi, I am Subham. Welcome to my website. I am a front-end developer with
        2+ years of experience.
      </h2>
      <button
        onClick={() => {
          setIsClose(false);
        }}
        className="mt-4 text-blue-600 underline"
      >
        Read More
      </button>{" "}
      <br></br>
      <Model
        isClose={isClose}
        setIsClose={setIsClose}
        header={
          <h1 className="text-xl font-semibold text-red-500">Hello, Welcome</h1>
        }
        footer={
          <button
            onClick={() => {
              setIsClose(true);
            }}
            className="rounded-md bg-blue-300 px-3 py-0.5 hover:bg-blue-400/80"
          >
            OK
          </button>
        }
      >
        Lorem ipsum is used as dummy text to give an idea to designers and
        developers as to how the real text might appear. A graphic designer
        might use Lorem ipsum text to see how the text might be displayed or a
        software developer might want to use the text when developing an
        application before receiving an actual text from a client.
      </Model>
      
      <button
        onClick={() => {
          import("../data").then((module) => {
            // console.log(module.data);
            setLoadData(module.data);
          });
        }}
        className="mt-4 text-blue-600 underline"
      >
        Load More Data
      </button>
      <br />
      <br />
      <ul>
        {loadData.map((el) => (
          <li key={el.id}>{el.title}</li>
        ))}
      </ul>
    </>
  );
}

import React from "react";
import FunctionalCounter from "./FunctionalCounter";
import ClassCounter from "./ClassCounter";
import HoverCounter from "./HoverClassCounter";

function Home() {
  return (
    <>
      <h1 className="text-2xl font-semibold">Welcome to the Home Page.</h1>

      <FunctionalCounter name="New Functional Counter" />

      <hr className="my-8 h-1 rounded-md bg-red-400" />

      <ClassCounter name="Old Class Counter" />

      <HoverCounter name="Hover Class Counter" />
    </>
  );
}

export default Home;

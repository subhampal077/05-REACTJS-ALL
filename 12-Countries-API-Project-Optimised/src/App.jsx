import React, { useState } from "react";
import Header from "./components/Header";
import "./App.css";
import Home from "./components/Home";
import { Outlet } from "react-router";
import ThemeProvider from "../contexts/ThemeContext";



function App() {
  // const [darkMode, setDarkMode] = useState(
  //   JSON.parse(localStorage.getItem("darkMode"))
  // );

  return (
    // <ThemeContext.Provider value={[darkMode, setDarkMode]}>
    //   <Header />
    //   <Outlet />
    //   {/* <Home /> */}
    //   {/* <Outlet context={[darkMode, setDarkMode]}/> */}
    // </ThemeContext.Provider>

    <ThemeProvider>
      <Header />
      <Outlet />
    </ThemeProvider>
  );
}

export default App;

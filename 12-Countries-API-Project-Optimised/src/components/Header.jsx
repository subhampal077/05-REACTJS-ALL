import React, { useContext, useState } from "react";
import { Link } from "react-router";
import { ThemeContext } from "../../contexts/ThemeContext";


function Header() {
  // const [darkMode, setDarkMode] = useState(
  //   JSON.parse(localStorage.getItem("darkMode"))
  // );

  const [darkMode, setDarkMode] = useContext(ThemeContext);

  return (
    <header id="header" className={`${darkMode && "dark"}`}>
      <div className="header-content">
        <Link to="/">
          <h2 className="title">Where in the world?</h2>
        </Link>

        <p
          className="theme"
          onClick={() => {
            setDarkMode(!darkMode);
            localStorage.setItem("darkMode", `${!darkMode}`);
          }}
        >
          <i className={`fa-solid fa-${darkMode ? "sun" : "moon"}`}></i>
          &nbsp;&nbsp;
          {darkMode ? "Light" : "Dark"} Mode
        </p>
      </div>
    </header>
  );
}

export default Header;

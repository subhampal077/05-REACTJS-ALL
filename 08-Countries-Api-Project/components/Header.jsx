import React, { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

const Header = () => {

  // const [isDark, setIsDark] = theme;

  const [isDark, setIsDark] = useContext(ThemeContext);
  

  // const [isDark, setIsDark] = useState(JSON.parse(localStorage.getItem("isDarkMode")));

  // if(isDark == true) {
  //   document.body.classList.add("dark");
  // } else {
  //   document.body.classList.remove("dark");
  // }


  // const bodyClassDark = localStorage.getItem("bodyClassName");
  // if(bodyClassDark) {
  //   document.body.className = bodyClassDark;
  // };

  return (
    <header className={`header ${isDark ? "dark" : ""}`}>
      <div className="header-container">
        <h2 className="title">
          <a href="#">Where in the world?</a>
        </h2>
        <p
          onClick={(e) => {
            setIsDark(!isDark);
            localStorage.setItem("isDarkMode", !isDark);

            // localStorage.setItem("bodyClassName", document.body.className)
          }}
          className="change-mode"
        >
          <i
            className={isDark ? "fa-regular fa-sun" : "fa-regular fa-moon"}
          ></i>
          &nbsp;&nbsp;{isDark ? "Light Mode" : "Dark Mode"}
        </p>
      </div>
    </header>
  );
};

export default Header;

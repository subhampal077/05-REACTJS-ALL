import SearchBar from "./SearchBar";
import SelectBar from "./SelectBar";
import CountryList from "./CountryList";
import { useContext, useState } from "react";
import { useOutletContext } from "react-router";
import { ThemeContext } from "../../contexts/ThemeContext";

function Home() {
  const [searchInput, setSearchInput] = useState("");
  const [selectInput, setSelectInput] = useState("");

  // const [darkMode, setDarkMode] = useOutletContext();

  const [darkMode, setDarkMode] = useContext(ThemeContext);

  return (
    <main id="main" className={`${darkMode && "dark"}`}>
      <div className="search-filter-container">
        <SearchBar setSearchInput={setSearchInput} />

        <SelectBar setSelectInput={setSelectInput} />
      </div>

      <CountryList searchInput={searchInput} selectInput={selectInput} />
    </main>
  );
}

export default Home;

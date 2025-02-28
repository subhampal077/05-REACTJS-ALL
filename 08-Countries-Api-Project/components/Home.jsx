import React, { useContext, useState, useEffect } from "react";
import SearchBar from "./SearchBar";
import FilterBar from "./FilterBar";
import CountriesList from "./CountriesList";
import { ThemeContext } from "../contexts/ThemeContext";

// import { useOutletContext } from "react-router-dom";

export default function Home() {

  const [query, setQuery] = useState("");

  // const [isDark, setIsDark] = useOutletContext();

  const [isDark, setIsDark] = useContext(ThemeContext);
  // console.log(ThemeContext);
  // console.log(a);


  return (
    <main className={`${isDark && "dark"}`}>
      <div className="search-filter-container">
        <SearchBar setQuery={setQuery} />
        <FilterBar setQuery={setQuery} />
      </div>
      
      <CountriesList query={query} />
    </main>
  );
}

import React, { useEffect, useState } from "react";

function SearchBar({ setSearchInput }) {
  const [searchTerm, setSearchTerm] = useState("");

  //   APPLYING SEARCH DEBOUNCING
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setSearchInput(searchTerm.toLowerCase());
    }, 600);

    // cleanup function , Cleanup on re-render
    return () => {
      clearTimeout(timeoutId);
    };
  }, [searchTerm, setSearchInput]);

  return (
    <div className="search-bar">
      <i className="fa-solid fa-magnifying-glass"></i>
      <input
        onChange={(e) => setSearchTerm(e.target.value)}
        className=""
        type="text"
        placeholder="Search for a country name"
      />
    </div>
  );
}

export default SearchBar;

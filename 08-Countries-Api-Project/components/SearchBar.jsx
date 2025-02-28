import React from "react";

export default function SearchBar({setQuery}) {

  return (
    <div className="search-bar">
      <i className="fa-solid fa-magnifying-glass"></i>
      <input
        onChange={(e)=> {
          setQuery(e.target.value.toLowerCase());
        }}
        type="text"
        placeholder="Search for a country name"
      ></input>
    </div>
  );
}

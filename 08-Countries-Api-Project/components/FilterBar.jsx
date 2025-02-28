import React from "react";

export default function FilterBar({setQuery}) {
  return (
    <select className="filter-bar" 
    onChange={(e) => {
      // console.log(e.target.value)
      setQuery(e.target.value.toLowerCase());
    }}
    >
      <option hidden>Filter By Region</option>
      <option value="Africa">Africa</option>
      <option value="Americas">Americas</option>
      <option value="Asia">Asia</option>
      <option value="Europe">Europe</option>
      <option value="Oceania">Oceania</option>
    </select>
  );
};

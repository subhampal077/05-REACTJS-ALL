import React from "react";

function SelectBar({ setSelectInput }) {
  return (
    <select onChange={(e) => setSelectInput(e.target.value.toLowerCase())}>
      <option hidden>Filter By Region</option>
      <option value="all">All</option>
      <option value="africa">Africa</option>
      <option value="americas">Americas</option>
      <option value="asia">Asia</option>
      <option value="europe">Europe</option>
      <option value="oceania">Oceania</option>
    </select>
  );
}

export default SelectBar;

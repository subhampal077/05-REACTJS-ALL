import React from "react";
import { Link } from "react-router";

function CountryCard({ country }) {
  return (
    // we can use this state inside LINK TAG similar to props but it is provided by react router library
    <Link
      className="country-card"
      to={`/${country.name.common}`}
      state={country}
    >
      <img
        className="country-img"
        src={country?.flags?.svg}
        alt="countryflag"
      />
      <h2 className="country-name">{country?.name?.common}</h2>
      <div className="country-text">
        <p>
          <b>Population: </b>
          {country?.population.toLocaleString("en-IN")}
        </p>
        <p>
          <b>Region: </b>
          {country?.region}
        </p>
        <p>
          <b>Capital: </b>
          {country.capital ? country?.capital?.join(", ") : "No capital found"}
        </p>
      </div>
    </Link>
  );
}

export default CountryCard;

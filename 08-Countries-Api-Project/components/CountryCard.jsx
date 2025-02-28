import React from "react";
import { Link } from "react-router-dom";

export default function CountryCard({
  country,
  name,
  src,
  alt,
  population,
  region,
  capital,
}) {
  return (
    <>
      <Link
        className="country-card"
        to={`/${country.name.common}`}
        state={country} //sending data to another page
      >
        <img className="country-image" src={src} alt={alt} />
        <h3 className="country-name">{name}</h3>
        <div className="country-text">
          <p>
            <b>Population: </b>
            {population}
          </p>
          <p>
            <b>Region: </b>
            {region}
          </p>
          <p>
            <b>Capital: </b>
            {capital}
          </p>
        </div>
      </Link>
    </>
  );
}

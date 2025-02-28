import React, { useEffect, useState } from "react";
// import countriesData from "../countriesData.js";
import CountryCard from "./CountryCard.jsx";
import CountriesListShimmer from "./CountriesListShimmer.jsx";

export default function CountriesList({ query, region }) {

  // const [query, setQuery] = useState("");
  // const filteredCountries = countriesData.filter((country) => {
  //   return country.name.common.toLowerCase().includes("india");
  // });

  const [countriesData, setCountriesData] = useState([]);

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        // console.log(data);
        setCountriesData(data);
      });


    // return()=>{
    //   console.log("Cleaning Up on unmount using cleanUp function");
    // };
  }, [region]);

  return (
    <>
      {countriesData.length === 0 ? (
        <CountriesListShimmer />
      ) : (
        <div className="countries-container">
          {countriesData
            .filter((country) => {
              // console.log(country)
              return country.name.common.toLowerCase().includes(query) || country.region.toLowerCase().includes(query)
            })
            .map((country, index) => {
              return (
                <CountryCard
                  key={index}
                  country={country}
                  name={country.name.common}
                  src={country.flags.svg}
                  alt="flag-image"
                  population={new Intl.NumberFormat("en-IN").format(
                    country.population
                  )}
                  region={country.region}
                  capital={country.capital?.[0]}
                />
              );
            })}
        </div>
      )}
    </>
  );
}

// useState used for creating state and useEffect used for monitoring state.. useEffect automatic calls at least one time while rendering the component.

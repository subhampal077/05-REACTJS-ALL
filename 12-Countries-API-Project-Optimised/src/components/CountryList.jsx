import React, { useEffect, useState } from "react";
import CountryCard from "./CountryCard";
import CountryListShimmer from "./CountryListShimmer";

function CountryList({ searchInput, selectInput }) {
  const [cardData, setCardData] = useState();

  async function fetchCardData() {
    try {
      // const res = await fetch("https://restcountries.com/v3.1/all");
      const res = await fetch("https://restcountries.com/v3.1/all?fields=name,flags,region,population,subregion,capital,tld,currencies,languages,borders");
      const data = await res.json();
      // console.log(data);
      data?.length > 0 && setCardData(data);
    } catch (error) {
      console.log(error.message);
    }
  }

  useEffect(() => {
    fetchCardData();
  }, []);

  return !cardData ? (
    <CountryListShimmer />
  ) : (
    <div className="countries-container">
      {cardData?.length > 0 &&
        cardData
          .filter((country) =>
            country.name.common.toLowerCase().includes(searchInput)
          )
          .filter((country) =>
            selectInput === "all"
              ? true
              : country.region.toLowerCase().includes(selectInput)
          )
          .map((country, index) => {
            return <CountryCard key={index} country={country} />;
          })}
    </div>
  );
}

export default CountryList;

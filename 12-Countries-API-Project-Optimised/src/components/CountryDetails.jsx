import React, { useContext, useEffect, useState } from "react";
import "./CountryDetails.css";
import { Link, useLocation, useOutletContext, useParams } from "react-router";
import ErrorPage from "./ErrorPage";
import CountryDetailsShimmer from "./CountryDetailsShimmer";
import { ThemeContext } from "../../contexts/ThemeContext";

function CountryDetails() {
  // const [darkMode, setDarkMode] = useOutletContext();

  const [darkMode, setDarkMode] = useContext(ThemeContext);

  //   USING USELOCATION FROM REACT-ROUTER
  // const location = useLocation();
  // const queryParams = new URLSearchParams(location.search);
  // const countryName = queryParams.get("name");

  //   const urlParams = new URLSearchParams(window.location.search);
  //   const countryName = urlParams.get("name");

  const [countryData, setCountryData] = useState(null);
  const [bordersName, setBordersName] = useState();
  const [error, setError] = useState(false);

  const params = useParams();
  // from dynamic route
  const countryName = params.country;

  // USING USE LOCATION WE CAN ACCESS THE STATE DATA THAT WE PASSED FROM LINK TAG IN COUNTRY CARD
  const location = useLocation();
  // console.log(location.state);

  const fetchCountryData = async () => {
    try {
      const res = await fetch(
        `https://restcountries.com/v3.1/name/${countryName}?fullText=true`
      );

      if (res.ok === false) {
        setError(true);
      }

      const data = await res.json();
      data.length > 0 && setCountryData(data[0]);
      //   console.log(data[0]);
    } catch (error) {
      console.log(error);
      setError(true);
    }
  };

  function fetchBorders(borderArray) {
    const promises = borderArray.map((border) => {
      return fetch(`https://restcountries.com/v3.1/alpha/${border}`)
        .then((res) => res.json())
        .then((data) => data[0]?.name?.common);
    });

    // setBordersName is called inside .then(), it executes only after all promises resolve.
    Promise.all(promises).then((bordersName) => setBordersName(bordersName));
  }

  useEffect(() => {
    if (location.state !== null) {
      setCountryData(location.state);
    } else {
      fetchCountryData();
    }
  }, [countryName]);

  // when countryData get the data run again
  useEffect(() => {
    countryData?.borders ? fetchBorders(countryData?.borders) : "";
  }, [countryData]);

  // errorstate handle
  if (error === true) {
    return <ErrorPage />;
  }

  return countryData === null ? (
    <CountryDetailsShimmer />
  ) : (
    <main className={`${darkMode && "dark"}`}>
      <div className="country-details-container">
        <button onClick={() => history.back()} className="back-btn">
          <i className="fa-solid fa-arrow-left-long"></i>&nbsp; Back
        </button>

        <div className="country-details">
          <img
            className="country-details-image"
            src={countryData?.flags?.svg}
            alt={`${countryName} flag`}
          />

          <div className="country-details-text">
            <h2>{countryData?.name?.common}</h2>
            <div className="details-para">
              <div className="details-para1">
                <p>
                  <b>Native Name: </b>
                  <span className="native-name">
                    {countryData?.name?.nativeName
                      ? Object.values(countryData.name.nativeName)[0].official
                      : countryData?.name?.common}
                  </span>
                </p>
                <p>
                  <b>Population: </b>
                  <span className="population">
                    {countryData?.population?.toLocaleString("en-IN")}
                  </span>
                </p>
                <p>
                  <b>Region: </b>
                  <span className="region">
                    {countryData.region
                      ? countryData?.region
                      : "No subregion found"}
                  </span>
                </p>
                <p>
                  <b>Sub Region: </b>
                  <span className="sub-region">
                    {countryData?.subregion
                      ? countryData?.subregion
                      : "No subregion found"}
                  </span>
                </p>
                <p>
                  <b>Capital: </b>
                  <span className="capital">
                    {countryData?.capital
                      ? countryData?.capital?.join(", ")
                      : "No capital found"}
                  </span>
                </p>
              </div>
              <div className="details-para2">
                <p>
                  <b>Top Level Domain: </b>
                  <span className="top-level-domain">
                    {countryData?.tld.join(", ")}
                  </span>
                </p>
                <p>
                  <b>Currencies: </b>
                  <span className="currencies">
                    {countryData?.currencies
                      ? Object.values(countryData.currencies)
                          .map((curr) => curr.name)
                          .join(", ")
                      : "No currency fuund"}
                  </span>
                </p>
                <p>
                  <b>Languages: </b>
                  <span className="languages">
                    {countryData?.languages
                      ? Object.values(countryData.languages).join(", ")
                      : "No language found"}
                  </span>
                </p>
              </div>
            </div>

            <div className="border-countries-container">
              <b>Border Countries:</b>
              <div className="border-countries">
                {countryData.borders ? (
                  bordersName?.map((borderName, i) => (
                    <Link to={`/${borderName}`} key={i}>
                      {borderName}
                    </Link>
                  ))
                ) : (
                  <a>No border countries found</a>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default CountryDetails;

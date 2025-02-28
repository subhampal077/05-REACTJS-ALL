import React, { useContext, useEffect, useState } from "react";
import {
  Link,
  useLocation,
  useOutletContext,
  useParams,
} from "react-router-dom";
import CountryDetailsShimmer from "./CountryDetailsShimmer.jsx";
import "./CountryDetails.css";
import { ThemeContext } from "../contexts/ThemeContext.js";


export default function CountryDetails() {
  const countryName = useParams().country;

  const location = useLocation(); // to get the data from anther page
  const state = location.state;
  // console.log(state);

  // const [isDark, setIsDark] = useOutletContext();

  const [isDark, setIsDark] = useContext(ThemeContext);

  const [countryData, setCountryData] = useState(null);
  const [notFound, setNotFound] = useState(false);

  function updateCountryData(country) {
    setCountryData({
      name: country.name.common,
      src: country.flags.svg,
      nativeName: country.name.nativeName
        ? Object.values(country.name.nativeName)[0].common
        : country.name.common,
      population: new Intl.NumberFormat("en-IN").format(country.population),
      region: country.region,
      subRegion: country.subregion ? country.subregion : "No data available",
      capital: country.capital
        ? country.capital.join(", ")
        : "No data available",
      tld: country.tld ? country.tld.join(", ") : "No data available",
      currencies: country.currencies
        ? Object.values(country.currencies)
            .map((curr) => {
              return curr.name;
            })
            .join(", ")
        : "No data available",
      languages: country.languages
        ? Object.values(country.languages)
            .map((lang) => {
              return lang;
            })
            .join(", ")
        : "No data available",
      borders: [],
    });

    if (!country.borders) {
      country.borders = [];
      return;
    }

    Promise.all(
      country.borders.map((border) => {
        return fetch(`https://restcountries.com/v3.1/alpha/${border}`)
          .then((res) => {
            return res.json();
          })
          .then(([borderCountry]) => borderCountry.name.common);
      })
    ).then((borders) => {
      setCountryData((prevState) => ({ ...prevState, borders }));
    });
  }

  useEffect(() => {
    if (state) {
      updateCountryData(state);
      return;
    }

    fetch(`https://restcountries.com/v3.1/name/${countryName}?fullText=true`)
      .then((res) => {
        return res.json();
      })
      .then(([country]) => {
        // console.log(country);
        updateCountryData(country);
      })
      .catch((err) => {
        console.log(err);
        setNotFound(true);
      });
  }, [countryName]);

  if (notFound === true) {
    return <h3>Country Page Not Found!!!</h3>;
  }

  return countryData === null ? (
    <CountryDetailsShimmer />
  ) : (
    <>
      <main className={`${isDark && "dark"}`}>
        <div className="single-country-card">
          <span className="back-btn" onClick={() => history.back()}>
            <span>&larr;</span>&nbsp; Back
          </span>

          <div className="main-section">
            <img
              className="style-country-image"
              src={countryData.src}
              alt="country image"
            />
            <div className="country-text-section">
              <div className="style-country-name">
                <h3>{countryData.name}</h3>
              </div>
              <div className="country-details">
                <div className="details1">
                  <p>
                    <b>Native Name: </b>
                    <span className="native-name">
                      {countryData.nativeName}
                    </span>
                  </p>
                  <p>
                    <b>Population: </b>
                    <span className="population">{countryData.population}</span>
                  </p>
                  <p>
                    <b>Region: </b>
                    <span className="region">{countryData.region}</span>
                  </p>
                  <p>
                    <b>Sub Region: </b>
                    <span className="sub-region">{countryData.subRegion}</span>
                  </p>
                  <p>
                    <b>Capital: </b>
                    <span className="capital">{countryData.capital}</span>
                  </p>
                </div>
                <div className="details2">
                  <p>
                    <b>Top Level Domain: </b>
                    <span className="top-domain">{countryData.tld}</span>
                  </p>
                  <p>
                    <b>Currencies: </b>
                    <span className="currencies">{countryData.currencies}</span>
                  </p>
                  <p>
                    <b>Languages: </b>
                    <span className="languages">{countryData.languages}</span>
                  </p>
                </div>
              </div>

              {countryData.borders.length !== 0 && (
                <div className="border-countries">
                  <b>Border Countries:</b>
                  <div className="border-name">
                    {countryData.borders.map((border) => {
                      return (
                        <Link key={border} to={`/${border}`}>
                          {border}
                        </Link>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

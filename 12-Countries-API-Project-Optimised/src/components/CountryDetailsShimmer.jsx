import React, { useContext } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";

function CountryDetailsShimmer() {
  const [darkMode, setDarkMode] = useContext(ThemeContext);

  return (
    <main className={`${darkMode && "dark"}`}>
      <div className="country-details-container">
        <button onClick={() => history.back()} className="back-btn">
          <i className="fa-solid fa-arrow-left-long"></i>&nbsp; Back
        </button>

        <div className="country-details">
          <img
            className="country-details-image"
            style={{
              height: "250px",
              backgroundColor: "rgba(128, 128, 128, 0.4)",
            }}
          />

          <div className="country-details-text">
            <h2
              style={{
                backgroundColor: "rgba(128, 128, 128, 0.4)",
                height: "40px",
                width: "320px",
              }}
            ></h2>

            <div className="details-para">
              <div className="details-para1">
                <p
                  style={{
                    height: "20px",
                    backgroundColor: "rgba(128, 128, 128, 0.4)",
                  }}
                ></p>
                <p
                  style={{
                    height: "20px",
                    backgroundColor: "rgba(128, 128, 128, 0.4)",
                  }}
                ></p>
                <p
                  style={{
                    height: "20px",
                    backgroundColor: "rgba(128, 128, 128, 0.4)",
                  }}
                ></p>
                <p
                  style={{
                    height: "20px",
                    backgroundColor: "rgba(128, 128, 128, 0.4)",
                  }}
                ></p>
                <p
                  style={{
                    height: "20px",
                    backgroundColor: "rgba(128, 128, 128, 0.4)",
                  }}
                ></p>
              </div>

              <div className="details-para2">
                <p
                  style={{
                    height: "20px",
                    backgroundColor: "rgba(128, 128, 128, 0.4)",
                  }}
                ></p>
                <p
                  style={{
                    height: "20px",
                    backgroundColor: "rgba(128, 128, 128, 0.4)",
                  }}
                ></p>
                <p
                  style={{
                    height: "20px",
                    backgroundColor: "rgba(128, 128, 128, 0.4)",
                  }}
                ></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default CountryDetailsShimmer;

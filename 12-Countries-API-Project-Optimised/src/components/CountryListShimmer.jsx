import React from "react";

// new Array(20).fill("")
// Array.from({length:20})

function CountryListShimmer() {
  return (
    <div className="countries-container">
      {Array.from({ length: 20 }).map((el, i) => {
        return (
          <a
            key={i}
            className="country-card"
            style={{
              height: "340px",
            }}
          >
            <img
              className="country-img"
              style={{
                backgroundColor: "rgba(128, 128, 128, 0.4)",
                height: "160px",
              }}
            ></img>
            <h2
              className="country-name"
              style={{
                backgroundColor: "rgba(128, 128, 128, 0.4)",
                height: "40px",
                width: "80%",
              }}
            ></h2>
            <div className="country-text" style={{ width: "70%" }}>
              <p
                style={{
                  backgroundColor: "rgba(128, 128, 128, 0.4)",
                  height: "20px",
                }}
              ></p>
              <p
                style={{
                  backgroundColor: "rgba(128, 128, 128, 0.4)",
                  height: "20px",
                }}
              ></p>
              <p
                style={{
                  backgroundColor: "rgba(128, 128, 128, 0.4)",
                  height: "20px",
                }}
              ></p>
            </div>
          </a>
        );
      })}
    </div>
  );
}

export default CountryListShimmer;

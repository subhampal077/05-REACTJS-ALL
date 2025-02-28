import React from "react";
import "./CountryDetailsShimmer.css";

export default function CountryDetailsShimmer() {
  return (
    <main>
      <div className="single-country-card">
        <span className="back-btn">
          <span>←</span>
          &nbsp; Back
        </span>

        <div className="main-section">
          <div className="style-country-image shimmer-image1"></div>
          <div className="country-text-section shimmer-text1">
            <div className="style-country-name shimmer-name1"></div>
            <div className="country-details">
              <div className="details1 shimmer-details1">
                <p></p>
                <p></p>
                <p></p>
                <p></p>
                <p></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

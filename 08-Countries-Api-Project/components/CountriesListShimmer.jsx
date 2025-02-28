import React from 'react'
import "./CountriesListShimmer.css";

// new Array(20).fill("").map()

// Array.from({length:20}).map

export default function CountriesListShimmer() {
  return (
    <div className='countries-container'>
        {
        Array.from({length:20}).map((ele,i) => {
          // console.log(ele);
          return <div className="country-card shimmer-card" key={i}></div>
        })
        }
    </div>
  )
}

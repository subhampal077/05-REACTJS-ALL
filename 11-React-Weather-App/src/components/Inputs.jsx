import React, { useState } from "react";
import { BiCurrentLocation, BiSearch } from "react-icons/bi";

function Inputs({ setQuery }) {
  const [city, setCity] = useState("");

  const [ifNoCity, setIfNoCity] = useState("");

  const handleLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        // console.log(position);
        const { latitude, longitude } = position.coords;
        return setQuery({ lat: latitude, lon: longitude });
      });
    }
  };

  return (
    <div className="relative mx-auto my-6 flex w-full max-w-xl items-center justify-center gap-3">
      <input
        onChange={(e) => {
          setCity(e.target.value);
          // setIfNoCity("");
        }}
        value={city}
        id="input"
        type="text"
        placeholder="Search by city name..."
        className="w-full rounded-sm px-4 py-2 text-base font-light capitalize text-gray-600 shadow-xl outline-none"
      />
      <BiSearch
        onClick={(e) => {
          if (city === "") {
            e.preventDefault;
            setIfNoCity("Please enter a city name!!");

            // Hide the noCity message after 2 seconds
            setTimeout(() => {
              setIfNoCity("");
            }, 2000);
            return;
          }

          setQuery({ q: city });
          setCity("");
        }}
        size={28}
        className="flex-shrink-0 cursor-pointer transition-all hover:scale-125"
      />
      <BiCurrentLocation
        onClick={handleLocation}
        size={34}
        className="ml-1 flex-shrink-0 cursor-pointer transition-all hover:scale-125"
      />
      <p className="absolute left-1 top-10 text-sm font-medium text-gray-900">
        {ifNoCity}
      </p>
    </div>
  );
}

export default Inputs;

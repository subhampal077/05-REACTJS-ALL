import React from "react";

function TopButtons({ setQuery }) {
  const cities = [
    {
      id: 1,
      name: "London",
    },
    {
      id: 2,
      name: "Sydney",
    },
    {
      id: 3,
      name: "Tokyo",
    },
    {
      id: 4,
      name: "Paris",
    },
    {
      id: 5,
      name: "Delhi",
    },
  ];
  return (
    <>
      <div className="flex items-center justify-between">
        {cities.map((city) => {
          return (
            <button
              onClick={(e) => {
                setQuery({ q: city.name });
              }}
              key={city.id}
              className="rounded-md px-1 py-1 text-base font-medium transition ease-in hover:bg-gray-700/30 sm:px-2 sm:text-xl"
            >
              {city.name}
            </button>
          );
        })}
      </div>
    </>
  );
}

export default TopButtons;

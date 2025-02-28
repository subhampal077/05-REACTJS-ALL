import React from "react";

function TimeAndLocation({ weather }) {
  return (
    <div className="my-6">
      <p className="text-center text-xl font-extralight">
        {weather.formattedTime}
      </p>

      <p className="mt-6 text-center text-2xl font-medium">
        {weather.name}, {weather.country}
      </p>
    </div>
  );
}

export default TimeAndLocation;

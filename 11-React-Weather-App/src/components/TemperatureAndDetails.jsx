import React from "react";
import { BiSolidDropletHalf } from "react-icons/bi";
import { FaThermometerQuarter } from "react-icons/fa";
import { FiWind } from "react-icons/fi";
import { GiSunrise, GiSunset } from "react-icons/gi";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";

function TemperatureAndDetails({ weather }) {
  const verticalDetails = [
    {
      id: 1,
      Icon: FaThermometerQuarter,
      title: "Real Feel",
      value: `${weather.feels_like}°`,
    },
    {
      id: 2,
      Icon: BiSolidDropletHalf,
      title: "Humidity",
      value: `${weather.humidity}%`,
    },
    {
      id: 3,
      Icon: FiWind,
      title: "Wind",
      value: `${weather.speed} km/h`,
    },
  ];

  const horizontalDetails = [
    {
      id: 1,
      Icon: GiSunrise,
      title: "Sunrise",
      value: weather.sunrise,
    },
    {
      id: 2,
      Icon: GiSunset,
      title: "Sunset",
      value: weather.sunset,
    },
    {
      id: 3,
      Icon: MdKeyboardArrowUp,
      title: "High",
      value: `${weather.temp_max}°`,
    },
    {
      id: 4,
      Icon: MdKeyboardArrowDown,
      title: "Low",
      value: `${weather.temp_min}°`,
    },
  ];

  return (
    <div className="py-3">
      <p className="text-center text-xl text-cyan-200">{weather.main}</p>

      <div className="flex items-center justify-between py-6">
        <div className="w-24 sm:w-32">
          <img src={weather.icon} alt="weather icon" className="w-20" />
        </div>
        <p className="text-5xl">{weather.temp}°</p>

        <div className="flex flex-col items-start justify-center gap-3">
          {verticalDetails.map((el) => {
            return (
              <div
                key={el.id}
                className="flex items-center justify-start text-sm font-light"
              >
                <el.Icon size={16} className="mr-1" />
                {el.title}:<span className="ml-1 font-medium">{el.value}</span>
              </div>
            );
          })}
        </div>
      </div>
      <div className="flex items-center justify-between py-3">
        {horizontalDetails.map((el) => {
          return (
            <div
              key={el.id}
              className="flex flex-wrap items-center justify-center text-sm font-light"
            >
              <el.Icon size={24} className="mr-1" />
              {el.title}:<span className="ml-1 font-medium">{el.value}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default TemperatureAndDetails;

import React, { useEffect, useState } from "react";
import TopButtons from "./components/TopButtons";
import Inputs from "./components/Inputs";
import TimeAndLocation from "./components/TimeAndLocation";
import TemperatureAndDetails from "./components/TemperatureAndDetails";
import Forecast from "./components/Forecast";
import getFormattedWeatherData from "./services/weatherService";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [query, setQuery] = useState({ q: "darjeeling" });
  const [weather, setWeather] = useState();

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  const getWeather = async () => {
    const cityName = query.q ? query.q : "your Current Location";

    toast.info(`Fetching weather data for ${capitalizeFirstLetter(cityName)}`);

    await getFormattedWeatherData({ ...query })
      .then((data) => {
        // console.log(data);
        setWeather(data);

        toast.success(`Fetched weather data for ${data.name}, ${data.country}`);
      })
      .catch((err) => {
        toast.error(
          `Failed to fetch data for ${capitalizeFirstLetter(cityName)} (City Not Found)`,
        );
      });
  };

  useEffect(() => {
    getWeather();
  }, [query]);

  const formatBackground = () => {
    if (!weather) {
      return "from-cyan-600 to-blue-700";
    }
    if (weather.temp < 26) {
      return "from-cyan-600 to-blue-700";
    }
    if (weather.temp >= 26) {
      return "from-yellow-600 to-orange-700";
    }
  };

  return (
    <div className={`bg-gradient-to-br py-6 ${formatBackground()}`}>
      <div
        className={`mx-auto w-full max-w-screen-lg bg-gradient-to-br px-3 py-5 text-white sm:px-12 md:px-24 lg:px-32 ${formatBackground()}`}
      >
        <h1 className="pb-8 text-center text-4xl font-bold underline">
          WeatherX
        </h1>
        <TopButtons setQuery={setQuery} />
        <Inputs setQuery={setQuery} />

        {weather && (
          <>
            <TimeAndLocation weather={weather} />
            <TemperatureAndDetails weather={weather} />
            <Forecast title="3 HOUR STEP FORECAST" data={weather.hourly} />
            <Forecast title="DAILY FORECAST" data={weather.daily} />
          </>
        )}

        <ToastContainer
          theme="colored"
          hideProgressBar="true"
          autoClose={2000}
        />
      </div>
    </div>
  );
}

export default App;

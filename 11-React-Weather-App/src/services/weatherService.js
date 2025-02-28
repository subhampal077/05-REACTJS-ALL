import { DateTime } from "luxon";

const API_KEY = "8d779ce33e64d318b82e5ccd16c3a712";
const BASE_URL = "https://api.openweathermap.org/data/2.5/";

async function getWeatherData(infoType, searchParams) {
  const url = new URL(BASE_URL + infoType);
  url.search = new URLSearchParams({ ...searchParams, appid: API_KEY });

  return fetch(url, { cache: "no-cache" }).then((res) => res.json());
}

const iconUrl = (icon) => {
  return `http://openweathermap.org/img/wn/${icon}@2x.png`;
};

//using luxon date time formatter
const formatToLocalTime = (
  seconds,
  timezone,
  format = "cccc, dd LLL yyyy' | Local time 'hh:mm a",
) => {
  return DateTime.fromSeconds(seconds + timezone, { zone: "utc" }).toFormat(
    format,
  );
};

const formatTemp = (data) => {
  const celsius = data - 274;
  return Math.floor(celsius);
};

const formatCurrent = (data) => {
  //   console.log(data);
  const {
    coord: { lat, lon },
    main: { temp, feels_like, temp_max, temp_min, humidity },
    name,
    dt,
    sys: { country, sunrise, sunset },
    weather,
    wind: { speed },
    timezone,
  } = data;

  const { main, icon, description } = weather[0];

  const formattedTime = formatToLocalTime(dt, timezone);

  return {
    lat,
    lon,
    temp: formatTemp(temp),
    feels_like: formatTemp(feels_like),
    temp_max: formatTemp(temp_max),
    temp_min: formatTemp(temp_min),
    humidity,
    name,
    dt,
    country,
    sunrise: formatToLocalTime(sunrise, timezone, "hh:mm a"),
    sunset: formatToLocalTime(sunset, timezone, "hh:mm a"),
    speed,
    timezone,
    main,
    icon: iconUrl(icon),
    description,
    formattedTime,
  };
};

const formatForecast = (dt, timezone, data) => {
  // only 5 future hourly data
  const hourly = data.slice(0, 5).map((el) => ({
    icon: iconUrl(el.weather[0].icon),
    timeDay: formatToLocalTime(el.dt, timezone, "hh:mm a"),
    temp: formatTemp(el.main.temp),
  }));

  // only 5 future daily data
  const daily = data
    .filter((el) => {
      if (el.dt_txt.slice(-8) === "12:00:00") return el;
    })
    .map((el) => ({
      icon: iconUrl(el.weather[0].icon),
      timeDay: formatToLocalTime(el.dt, timezone, "cccc").slice(0, 3),
      temp: formatTemp(el.main.temp),
      //   date: el.dt_txt,
    }));

  return { hourly, daily };
};

const getFormattedWeatherData = async (searchParams) => {
  const formattedCurrentWeather = await getWeatherData(
    "weather",
    searchParams,
  ).then((data) => {
    // console.log(data);
    return formatCurrent(data);
  });

  const { lat, lon, dt, timezone } = formattedCurrentWeather;

  const formattedForecastWeather = await getWeatherData("forecast", {
    lat: lat,
    lon: lon,
  }).then((data) => {
    // console.log(data);
    return formatForecast(dt, timezone, data.list);
  });

  return { ...formattedCurrentWeather, ...formattedForecastWeather };
};

export default getFormattedWeatherData;

import axios from "axios";
require("dotenv").config();
export const getCities = async (city) => {
  return await axios
    .get(
      `https://api.openweathermap.org/data/2.5/weather?&lang=en&q=${city}&appid=${process.env.REACT_APP_WEATHER_KEY}&units=metric`
    )
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      return error.response.data.error;
    });
};
export const getDetails = async (lat, lng) => {
  return await axios.get(
    `https://api.geonames.org/countryCodeJSON?formatted=true&lat=${lat}&lng=${lng}&username=hasher098&style=full`
  );
};

export const getFutureWeather = async (lat, lon) => {
  return await axios
    .get(
      `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=minutely,current,hourly,alerts&appid=${process.env.REACT_APP_WEATHER_KEY}&units=metric&lang=pl`
    )
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      return error.response.data.error;
    });
};

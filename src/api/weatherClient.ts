import axios from "axios";

export const getCities = async (city) => {
  return await axios
    .get(
      `https://api.openweathermap.org/data/2.5/weather?&lang=en&q=${city}&appid=010b602fbede5a8e87aefcd6a736128d&units=metric`
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
    `http://api.geonames.org/countryCodeJSON?formatted=true&lat=${lat}&lng=${lng}&username=hasher098&style=full`
  );
};

export const getFutureWeather = async (lat, lon) => {
  return await axios
    .get(
      `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=minutely,current,hourly,alerts&appid=010b602fbede5a8e87aefcd6a736128d&units=metric&lang=pl`
    )
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      return error.response.data.error;
    });
};

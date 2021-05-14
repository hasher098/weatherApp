import { useState } from "react";
import { useEffect } from "react";
import { useStyles } from "./WeatherInfoStyles";
import { getDetails } from "../../api/weatherClient";
import CityInfoInterface from "../../interfaces/CityInfoInterface";
import FutureInfoInterface from "../../interfaces/FutureInfoInterface";
import Grid from "@material-ui/core/Grid";
import ArrowUpwardRoundedIcon from "@material-ui/icons/ArrowUpwardRounded";
const WeatherInfo = (props) => {
  const styles = useStyles();
  const [currentInfo, SetCurrentInfo] = useState<CityInfoInterface>({});
  const [futureInfo, setFutureInfo] = useState<FutureInfoInterface[]>([{}]);
  const [currentCountry, setCurrentCountry] = useState("");
  const showPosition = async (position) => {
    const response = await getDetails(
      position.coords.latitude,
      position.coords.longitude
    );
    setCurrentCountry(response.data.countryCode);
  };
  const showError = (error) => {
    switch (error.code) {
      case error.PERMISSION_DENIED:
        console.error("User denied the request for Geolocation.");
        break;
      case error.POSITION_UNAVAILABLE:
        console.error("Location information is unavailable.");
        break;
      case error.TIMEOUT:
        console.error("The request to get user location timed out.");
        break;
      case error.UNKNOWN_ERROR:
        console.error("An unknown error occurred.");
        break;
    }
  };
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition, showError);
    } else {
      console.log("error");
    }
  }, []);

  useEffect(() => {
    SetCurrentInfo({
      CityName: props.weatherInfo.name,
      Temperature: props.weatherInfo.main.temp,
      Description: props.weatherInfo.weather[0].description,
      WindSpeed: props.weatherInfo.wind.speed,
      WindDegree: props.weatherInfo.wind.deg,
      Pressure: props.weatherInfo.main.pressure,
      Cloudiness: props.weatherInfo.clouds.all,
      IconId: props.weatherInfo.weather[0].icon,
    });
  }, [props.weatherInfo]);

  useEffect(() => {
    if (props.futureData.daily != undefined) {
      setFutureInfo([]);

      for (let i = 1; i < 8; i++) {
        const newDate = new Date();
        newDate.setDate(newDate.getDate() + i);
        const day = new Date(newDate).toLocaleDateString("en-us", {
          weekday: "long",
        });
        setFutureInfo((futureInfo) => [
          ...futureInfo,
          {
            dayTemp: Math.round(props.futureData.daily[i].temp.day).toString(),
            nightTemp: Math.round(
              props.futureData.daily[i].temp.night
            ).toString(),
            dayName: day,
            iconId: props.futureData.daily[i].weather[0].icon,
          },
        ]);
      }
    }
  }, [props.futureData]);

  return (
    <Grid container>
      <Grid container item xs={12} className={styles.todayWeather}>
        {currentCountry != "" && (
          <Grid container item xs={12} className={styles.infoContainer}>
            <Grid item xs={12} className={styles.horizontalPart}>
              {currentInfo.CityName}
            </Grid>
            <Grid item xs={12} md={4} className={styles.verticalPart}>
              <Grid item xs={12}>
                {currentInfo.Description &&
                  currentInfo.Description.charAt(0).toUpperCase() +
                    currentInfo.Description.substring(1)}
              </Grid>
              <Grid item xs={12}>
                {currentInfo.WindSpeed} KM/H
              </Grid>
              <Grid item xs={12}>
                Wind Direction:
                <ArrowUpwardRoundedIcon
                  style={{ transform: `rotate(${currentInfo.WindDegree}deg)` }}
                ></ArrowUpwardRoundedIcon>
              </Grid>

              <Grid item xs={12}>
                <img
                  src={`http://openweathermap.org/img/wn/${currentInfo.IconId}@2x.png`}
                ></img>
              </Grid>
            </Grid>
            <Grid item xs={12} md={4} className={styles.verticalPart}>
              <Grid item xs={12} className={styles.temperature}>
                {currentInfo.Temperature && parseInt(currentInfo.Temperature)}°C
              </Grid>
            </Grid>
            <Grid container item xs={12} md={4} className={styles.verticalPart}>
              <Grid item xs={12}>
                Pressure: {currentInfo.Pressure}hPa
              </Grid>
              <Grid item xs={12}>
                Cloudiness: {currentInfo.Cloudiness}%
              </Grid>
            </Grid>
          </Grid>
        )}
      </Grid>
      <Grid container item xs={12}>
        <Grid container>
          {futureInfo &&
            futureInfo.map((item, index) => {
              return (
                <Grid
                  className={styles.futureDayInfo}
                  container
                  item
                  xs
                  key={index}
                >
                  <Grid item xs={12}>
                    {item.dayName}
                  </Grid>
                  <Grid item xs={12}>
                    {item.iconId && (
                      <img
                        src={`http://openweathermap.org/img/wn/${item.iconId}@2x.png`}
                      ></img>
                    )}
                  </Grid>
                  <Grid item xs={6}>
                    {item.dayTemp}°C
                  </Grid>
                  <Grid item xs={6}>
                    {item.nightTemp}°C
                  </Grid>
                </Grid>
              );
            })}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default WeatherInfo;

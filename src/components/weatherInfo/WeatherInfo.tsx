import Grid from "@material-ui/core/Grid";
import ArrowUpwardRoundedIcon from "@material-ui/icons/ArrowUpwardRounded";
import { useEffect, useState } from "react";
import CityInfoInterface from "../../interfaces/CityInfoInterface";
import FutureInfoInterface from "../../interfaces/FutureInfoInterface";
import { useStyles } from "./WeatherInfoStyles";
const WeatherInfo = (props) => {
  const styles = useStyles();
  const [currentInfo, SetCurrentInfo] = useState<CityInfoInterface>({});
  const [futureInfo, setFutureInfo] = useState<FutureInfoInterface[]>([{}]);
  const [currentCountry, setCurrentCountry] = useState("");

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
      <Grid
        container
        item
        xs={12}
        className={styles.todayWeather}
        style={{ margin: "10px" }}
      >
        {currentInfo != {} && (
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
                {currentInfo.IconId != undefined && (
                  <img
                    src={`http://openweathermap.org/img/wn/${currentInfo.IconId}@2x.png`}
                  ></img>
                )}
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
                  style={{ margin: "10px" }}
                >
                  <Grid item xs={12}>
                    {item.dayName}
                  </Grid>
                  <Grid item xs={12}>
                    {item.iconId != undefined && (
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

import SearchIcon from "@material-ui/icons/Search";
import React, { useEffect, useRef, useState } from "react";
import { getCities, getFutureWeather } from "../../api/weatherClient";
import jsonData from "../../data/countries.json";
import WeatherInfo from "../weatherInfo/WeatherInfo";
import { useStyles } from "./AutoCompleteStyles";
const AutoComplete = () => {
  const classes = useStyles();
  const [data, setData] = useState("");
  const [futureData, setFutureData] = useState("");
  const [display, setDisplay] = useState(false);
  const [displayWeatherInfo, setDisplayWeatherInfo] = useState(false);
  const [search, setSearch] = useState("");
  const wrapperRef = useRef(null);
  const [cities, setCities] = useState<any>([]);

  //new Part
  const [autoCompleteCities, setAutoCompleteCities] = useState([
    "No results found",
  ]);

  const fetchCities = async (city) => {
    const resp = await getCities(city);

    if (resp != undefined) {
      setData(resp);
      fetchFutureCities(resp.coord.lat, resp.coord.lon);
      setDisplayWeatherInfo(true);
    } else {
      setDisplayWeatherInfo(false);
    }
  };

  const fetchFutureCities = async (lat, lon) => {
    const resp = await getFutureWeather(lat, lon);
    if (resp != undefined) {
      setFutureData(resp);
    }
  };

  useEffect(() => {
    const arrayCities: string[] = [];
    jsonData.forEach((item) => {
      arrayCities.push(item.CapitalName);
    });
    setCities(arrayCities);
  }, []);

  const updateValue = (city) => {
    if (city != "No results found") {
      setSearch(city);
      const str = city.substring(0, city.indexOf(","));
      fetchCities(str);
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      fetchCities(search);
      setDisplay(false);
    }
  };

  //new Version

  const autoCompleteChange = async (event) => {
    setSearch(event.target.value);
  };

  return (
    <div>
      <div className={classes.topPart}>
        <div className={classes.gridSearchBar}>
          <input
            placeholder="City"
            className={classes.searchInput}
            onClick={() => setDisplay(!display)}
            value={search}
            onChange={autoCompleteChange}
            onKeyDown={handleKeyDown}
          ></input>
          <SearchIcon
            className={classes.searchButton}
            onClick={() => {
              fetchCities(search);
              setDisplay(false);
            }}
          ></SearchIcon>
        </div>

        {/* {display && (
          <div className={classes.autoComplete}>
            {autoCompleteCities.slice(0, 5).map((value, i) => {
              return (
                <div
                  onClick={() => updateValue(value)}
                  className={classes.option}
                  key={i}
                >
                  <span className={classes.optionText}>{value}</span>
                </div>
              );
            })}
          </div>
        )} */}
      </div>
      {displayWeatherInfo && (
        <WeatherInfo weatherInfo={data} futureData={futureData}></WeatherInfo>
      )}
    </div>
  );
};

export default AutoComplete;

import React, { useEffect, useRef, useState } from "react";
import { getCities, getFutureWeather } from "../../api/weatherClient";
import { useStyles } from "./AutoCompleteStyles";
import jsonData from "../../data/countries.json";
import JsonInterface from "../../interfaces/JsonInterface";
import SearchIcon from "@material-ui/icons/Search";
import Grid from "@material-ui/core/Grid";
import jsonp from "jsonp";
import WeatherInfo from "../weatherInfo/WeatherInfo";
import CircularProgress from "@material-ui/core/CircularProgress";
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
    setDisplay(true);
    setSearch(event.target.value);
    jsonp(
      `http://gd.geobytes.com/AutoCompleteCity?q=${event.target.value}&sort=size`,
      null,
      (err, data) => {
        if (err) {
          console.error(err.message);
        } else {
          if (data[0] !== "%s" && data[0] !== "") {
            setAutoCompleteCities(data);
          } else {
            setAutoCompleteCities(["No results found"]);
          }
        }
      }
    );
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

import { makeStyles } from "@material-ui/core/styles";
import styled from "styled-components";

export const useStyles = makeStyles((theme) => ({
  todayWeather: {
    color: "white",
    background: "rgba( 255, 255, 255, 0.25 )",
    boxShadow: "0 8px 32px 0 rgba( 31, 38, 135, 0.37 )",
    backdropFilter: " blur( 0.0px )",
    borderRadius: "10px",
    border: "1px solid rgba( 255, 255, 255, 0.18 )",
    marginTop: "2rem",
    minWidth: "310px",
    marginBottom: "2rem",
  },
  infoContainer: {
    fontSize: "26px",
    fontWeight: "lighter",
  },
  verticalPart: {
    textAlign: "center",
  },
  horizontalPart: {
    textAlign: "center",
    fontSize: "30px",
    fontWeight: "bolder",
    marginBottom: "10px",
  },
  temperature: {
    fontSize: "80px",
  },
  futureDayInfo: {
    color: "white",
    background: "rgba( 255, 255, 255, 0.25 )",
    backdropFilter: " blur( 0.0px )",
    borderRadius: "10px",
    border: "1px solid rgba( 255, 255, 255, 0.18 )",
    padding: "20px",
    margin: "10px",
    textAlign: "center",
  },
}));

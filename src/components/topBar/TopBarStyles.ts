import { makeStyles } from "@material-ui/core/styles";
import Image from "../../rain.png";
export const useStyles = makeStyles((theme) => ({
  image: {
    backgroundImage: `url(${Image})`,
  },
  menu: {
    display: "flex",
    justifyContent: "center",
  },
  links: {
    display: "flex",
    justifyContent: "center",
    listStyle: "none",
    padding: "0px",
  },
  button: {
    background: "transparent",
    border: "0px",
    fontWeight: "bold",
    fontFamily: "inherit",
    fontSize: "18px",
    padding: "1.5rem 1.5rem 1.5rem 1.5rem",
    color: "white",
    display: "flex",
    justifyContent: "center",
    cursor: "pointer",
    position: "relative",
  },
}));

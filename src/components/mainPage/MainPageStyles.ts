import { makeStyles } from "@material-ui/core/styles";
import styled from "styled-components";
import bg from "../../background.jpg";
export const useStyles = makeStyles((theme) => ({
  fixedBg: {
    position: "fixed",
    top: 0,
    left: 0,
    zIndex: -1,
    width: "100%",
    height: "100vh",
    background: `url(${bg})`,
    backgroundSize: "cover",
  },
  app: {
    zIndex: 1,
    position: "relative",
    minHeight: "100vh",
  },
}));

import React from "react";
import AutoComplete from "../autoComplete/AutoComplete";
import TopBar from "../topBar/TopBar";
import { useStyles } from "./MainPageStyles";
const MainPage = () => {
  const classes = useStyles();
  return (
    <div className={classes.app}>
      <div className={classes.fixedBg}></div>
      <TopBar></TopBar>
      <AutoComplete></AutoComplete>
    </div>
  );
};

export default MainPage;

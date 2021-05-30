import React from "react";
import { useStyles } from "./TopBarStyles";

const TopBar = () => {
  const classes = useStyles();
  return (
    <div className={classes.menu}>
      <nav>
        <p className={classes.title}>Weather App</p>
      </nav>
    </div>
  );
};

export default TopBar;

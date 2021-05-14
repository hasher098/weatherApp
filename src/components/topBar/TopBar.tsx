import React from "react";
import { useStyles } from "./TopBarStyles";

const TopBar = () => {
  const classes = useStyles();
  return (
    <div className={classes.menu}>
      <nav>
        <ul className={classes.links}>
          <li>
            <button className={classes.button}>Contact</button>
          </li>
          <li>
            <button className={classes.button}>Author</button>
          </li>
          <li>
            <button className={classes.button}>Source</button>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default TopBar;

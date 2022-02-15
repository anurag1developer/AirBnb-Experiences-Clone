import React from "react";

// Local Image load Problem
// https://stackoverflow.com/questions/34582405/react-wont-load-local-images

import classes from "./Navbar.module.css";

function Navbar(props) {
  return (
    <nav className={classes.nav}>
      <img
        alt="airbnb-logo"
        className={classes.navLogo}
        src={require("../images/airbnb-logo.png")}
      />
    </nav>
  );
}

export default Navbar;

import React from "react";

import classes from "./Hero.module.css";

function Hero() {
  return (
    <section className={classes.hero}>
      <img
        className={classes.heroPhoto}
        src={require("../images/photo-grid.png")}
      />
      <h1 className={classes.heroHeader}>Online Experiences</h1>
      <p className={classes.heroText}>
        Join unique interactive activities led by one-of-a-kind hosts—all
        without leaving home.
      </p>
    </section>
  );
}

export default Hero;

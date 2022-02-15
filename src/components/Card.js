import React from "react";

import "./Card.css";

const Card = (props) => {
  let badgeText;
  if (props.openSpots === 0) {
    badgeText = "SOLD OUT";
  } else if (props.location === "Online") {
    badgeText = "ONLINE";
  }
  return (
    <div className="card">
      {badgeText && <div className="card--badge">{badgeText}</div>}
      {/* <h1>{`../../public/images/${props.img}`}</h1> */}
      {/* <img src={require(`../images/${props.img}`)} className="card--image" /> */}
      <img
        src={require(`../../public/images/${props.coverImg}`)}
        className="card--image"
        alt={props.title}
      />
      <div className="card--stats">
        <img
          className="card--star"
          alt="star"
          src={require("../images/star.png")}
        />
        <span>{props.stats.rating}</span>
        <span className="gray">({props.stats.reviewCount}) • </span>
        <span className="gray">{props.location}</span>
      </div>
      <p className="card--title">{props.title}</p>
      <p className="card--price">
        <span className="bold">From ${props.price}</span> / person
      </p>
    </div>
  );
};

export default Card;

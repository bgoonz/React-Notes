//This is a reusable wrapper component

import React from "react";
import "./Card.css";
function Card(props) {
  const classes = "card " + props.className; // need white space after 'card '
  return <div className={classes}>{props.children}</div>;
}

export default Card;

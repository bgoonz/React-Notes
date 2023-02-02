//This is a reusable wrapper component

import "./Card.css";

const Card = props => {
  const classes = "card " + props.className; // need white space after 'card '
  return <div className={classes}>{props.children}</div>;
};

export default Card;

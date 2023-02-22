import React from "react";
import classes from "./Header.module.css";
import mealsImage from "../../assets/meals.jpg";
const Header = () => {
  return (
    <React.Fragment>
      <header className={classes.header}>
        <h1>ReactMeals</h1>
        <button>Cart</button>
      </header>
      <div>
        <img src={mealsImage} alt="a table of food"></img>
      </div>
    </React.Fragment>
  );
};

export default Header;

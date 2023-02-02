import React, { useState } from "react";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import "./ExpenseItem.css";
// The expenseItem component function is called four times in Expenses.js... every time it is called a new seperate state is created... it's on a per component instance basis.
const ExpenseItem = (props) => {
  // let title = props.title;
  const [title, setTitle] = useState(props.title);
  console.log("ExpenseItem evaluated by React");

  const clickHandler = () => {
    setTitle("Updated!");
    console.log(title);
  };

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
      <button onClick={clickHandler}>Change Title</button>
    </Card>
  );
};

export default ExpenseItem;

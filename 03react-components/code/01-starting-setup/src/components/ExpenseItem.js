// a component in react is just a javascript function
import React from 'react'
import "./ExpenseItem.css";

function ExpenseItem() {
    const expenseDate = new Date( 2022, 2, 28 );//date object
    const expenseTitle = 'Car Insurance'
    const expenseAmount = 294.67
  return (
    <div className="expense-item">
      <div>{expenseDate}</div>
      <div className="expense-item__description">
        <h2>{expenseTitle}</h2>
        <div className="expense-item__price">$294.67</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
  
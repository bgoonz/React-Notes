import React from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
const NewExpense = (props) => {
  //the value for onSaveExpenseData should be a function that is triggered when the user clicks the submit button.
  const onSaveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    console.log(expenseData);
    props.onAddExpense(expenseData);
  };
    //the value for onSaveExpenseData should be a function that is triggered when the user clicks the submit button... we can pass data as an argument to onSaveExpenseDataHandler to pass that data from the child component to the parent component.
  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpenseData={onSaveExpenseDataHandler} />
    </div>
  );
};
export default NewExpense;

import React from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
const NewExpense = (props) => {
  //the value for onSaveExpenseData should be a function that is triggered when the user clicks the submit button.
    const onSaveExpenseDataHandler = ( enteredExpenseData ) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };
        console.log( expenseData )
        props.onAddExpense( expenseData );
    }
  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpenseData={onSaveExpenseDataHandler} />
    </div>
  );
};
export default NewExpense;

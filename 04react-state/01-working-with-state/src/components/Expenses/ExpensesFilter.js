import React from "react";
import "./ExpensesFilter.css";
//This is a controled component meaning that the value of the select element is set by the state of the parent component.
const ExpensesFilter = (props) => {
  const filterChangeHandler = (event) => {
    props.onFilter(event.target.value);
    console.log(
      "dropdownChangeHandler: event.target.value:",
      event.target.value
    );
  };
  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label>Filter by year</label>
        <select value={props.selected} onChange={filterChangeHandler}>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;

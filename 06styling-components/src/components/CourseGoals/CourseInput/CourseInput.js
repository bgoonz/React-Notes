import React, { useState } from "react";
import Button from "../../UI/Button/Button";
import "./CourseInput.css";
import styled from "styled-components";
//-------------------------------Form Control Component--------------------------------------
const FormControl = styled.div`
 
    margin: 0.5rem 0;


  & label {
    font-weight: bold;
    display: block;
    margin-bottom: 0.5rem;
  }

  & input {
    display: block;
    width: 100%;
    border: 1px solid #ccc;
    font: inherit;
    line-height: 1.5rem;
    padding: 0 0.25rem;
  }

  & input:focus {
    outline: none;
    background: #fad0ec;
    border-color: #8b005d;
  }

  /* the following applies to input elements that have class name form-control and invalid*/
  &.invalid input {
    border-color: red;
    background: #fad0ec;
  }

  &.invalid label {
    color: red;
  }
`;






//--------------------------------Course Input Component--------------------------------------
const CourseInput = (props) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [isValid, setIsValid] = useState(true);
  const goalInputChangeHandler = (event) => {
    if (event.target.value.trim().length > 0) {
      setIsValid(true);
    }
    setEnteredValue(event.target.value);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    if (enteredValue.trim().length === 0) {
      setIsValid(false);
      return;
    }
    props.onAddGoal(enteredValue);
  };

  return (
    <form onSubmit={formSubmitHandler}>
<FormControl>
        <label style={{ color: !isValid ? "red" : "black" }}>Course Goal</label>
        <input
          style={{
            borderColor: !isValid ? "red" : "#ccc",
            background: !isValid ? "salmon" : "transparent",
          }}
          type="text"
          onChange={goalInputChangeHandler}
        />
    </FormControl>
      <Button type="submit">Add Goal</Button>
    </form>
  );
};

export default CourseInput;

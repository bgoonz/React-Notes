# React-Complete-Guide-Course

#### What is React?

> A javascript library for building User Interfaces based on reusable components.

#### Why use react?

> traditionally any button on a website triggered a request from a server to load a new html page.
> Javascript allows us to manipulate the DOM without loading a new page and react is a JS library

#### Composition

> in react building components using a series of smaller components is called composition

#### Container Copmonents

```js
import React from "react";
import "./Card.css";
function Card(props) {
  return <div className="card">{props.children}</div>;
}

export default Card;
```

- props.children works because children is a reserved keyword in react and the value of the children prop will always be the content between the opening closing tags of your custom component.

> props.children is important for composition using a custom wrapper component often used to apply styles that are shared among components

#### A closer look at JSX

> in package.json we use react and reactDOM

```js
import React from "react";
// when you use jsx it is this(React.createElement ... requires importing React from react) method that gets called behind the scenes.
/* the second argument is an object tha configures atributes of element... in here none so empty object*/
// the third and subsequent arguments are the children of each sucessivly nested element or component.
return React.createElement(
  "div",
  {},
  React.createElement("h2", {}, `Let's get started!`),
  React.createElement(Expenses, { items: expenses })
);
```

---

---

## Events

- On all bult in html elements in react we have access to native dom events... we can use them in react by adding a prop to the element and setting it to a function that will be executed when the event occurs.

- Imperative approach:

```js
document.getElementById("root").addEventListener("click", () => {
  console.log("clicked");
});
```

> In react we add a special prop to the element we want to listen to and set it to a function that will be executed when the event occurs.

> React exposes events as props that start with prefix on... so onClick, onChange, onSubmit, etc.

i.e.

```jsx
<button onClick={clickHandler}>Change Title</button>
//here we are just pointing to the function and not calling it
```

> all the on-event handler props want a function passed as a value which will be executed when the event occurs.

- It is convention that you name your eventHandler functions as the event name + Handler i.e. clickHandler, submitHandler, etc.

```js
const clickHandler = () => {
  setTitle("Updated!");
  console.log(title);
};
```

### UseState

> useState is a react hook that allows you to manage state in functional components.

```js
// let title = props.title;
const [title, setTitle] = useState(props.title);
```

- We can't use let title = props.title because react will only run the function once and not re-run it when the state changes. so we use useState to manage state in functional components.

```js
import React, { useState } from "react";
```

> here {UseState} is a `named import` from react

- useState is a React hook that returns an array with 2 elements, the first element is the current state and the second element is a function that allows us to update the state.

- useState is declared inside of our component function. It should be called at the top level of the function... do not nest UseState inside of if statements or loops or other functions.

- UseState wants a default value as an argument. This is the initial value that will be used when the component is first rendered.

###### We use array destructuring to store the current state and update state function in variables.

```js
const [title, setTitle] = useState(props.title);
```

- the initial value of title is the value of props.title which is passed in as a prop from the parent component.

- We can use the update state function (setTitle) to update the state.

The useState hook always returns an array with these two elements.

Now instead of using the title variable we use the state variable.

- So

```js
const clickHandler = () => {
  title = "Updated!";
  console.log(title);
};
```

    - becomes

```js
const clickHandler = () => {
  setTitle("Updated!");
  console.log(title);
};
```

###### Expense Item Code:

```js
import React, { useState } from "react";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import "./ExpenseItem.css";

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
```

- In the above code calling setTitle("Updated!") will not update the title variable but will update the state variable which will cause react to re-evaluate the component function and update the dom. Changes to the state will cause react to re-render the component on which the state is used and only that component.

- Notice that below

```js
const [title, setTitle] = useState(props.title);
```

- we are using const here even though we do eventually assign a new value to title. This is because we are not reassigning the variable title but rather the state variable which is managed by react.

- The line above is exicuted whenever the component is re-evaulated by react. So if the state changes react will re-evaluate the component and re-execute the useState hook.



###### Events in vanilla javascript:

```js
document.getElementById("root").addEventListener("click", (event) => {
  console.log("clicked");
});
```



- The following syntax:

```js
  const titleChangeHandler = (event) => {

    setUserInput({ ...userInput, enteredTitle: event.target.value });
  };
  const amountChangeHandler = (event) => {

    setUserInput({ ...userInput, enteredAmount: event.target.value });
  };
  const dateChangeHandler = (event) => {

    setUserInput({ ...userInput, enteredDate: event.target.value });
  };

```
takes all of the properties of the userInput object and adds them to a new object. It then overwrites the enteredTitle property with the new value. This is called merging objects. It is a common pattern in react to merge objects when you want to update a state property that is an object.

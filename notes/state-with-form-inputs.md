# Exercise: Using State with Form Inputs

You're working on a **text messaging app** and your task is to **validate** the text entered by a user whilst the user is typing.

If the text message entered is **valid** (for this example: if it's at least 3 characters long), the text `"Valid message"` should be displayed below the input field. If it's invalid (i.e., shorter than 3 characters), the text `"Invalid message"` should be displayed.

This image shows how the finished app should look like when an **invalid message** (i.e., too short) is entered:

![](https://img-c.udemycdn.com/redactor/raw/coding_exercise_instructions/2023-01-25_17-06-54-6715ade76b67e5e1c7aa1d6e0af687f5.png)

And here's the same app with a **valid message** entered:

![](https://img-c.udemycdn.com/redactor/raw/coding_exercise_instructions/2023-01-25_17-06-54-8969e2ecdeb8d08f07c165d22813203b.png)

To achieve this result, you should store the current** message** **validity** (e.g., the string `"Invalid"` or `"Valid"`) in some **state value**. That state value must be updated **every time the input value changes**. You therefore must add a fitting **event listener** that triggers the code that updates the state.

To derive the proper state value (i.e., whether it should be `"Invalid"` or `"Valid"`), you could use this `if`-condition:

1.  if (value.trim().length < 3) {
2.  // Todo: Update state to say "Invalid"
3.  } else {
4.  // Todo: Update state to say "Valid"
5.  }

Of course, you must also output the state value as part of the App component's JSX code so that either `"Invalid message"` or `"Valid message"` is displayed.

_Important: When working in this Udemy code editor, you must use _`*React.useState()*`_ instead of just _`*useState()*`_!_

## Starter Code

```jsx
import React from "react";

import "./styles.css";

// don't change the Component name "App"
export default function App() {
  return (
    <form>
      <label>Your message</label>
      <input type="text" />
      <p>Invalid message</p>
    </form>
  );
}
```

## Solution

```jsx
import React from "react";

import "./styles.css";

// don't change the Component name "App"
export default function App() {
  const [message, setMessage] = React.useState("Invalid message");
  const messageHandler = (event) => {
    if (event.target.value.trim().length < 3) {
      setMessage("Invalid message");
    } else {
      setMessage("Valid message");
    }
  };
  return (
    <form>
      <label>Your message</label>
      <input type="text" onChange={messageHandler} />
      <p>{message}</p>
    </form>
  );
}
```

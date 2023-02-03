# Exercise: Listening to Events

Imagine you're working on a brand-new React app that should allow users to bookmark articles (e.g., news articles).

To start with your work, your task is to *"connect"* a **click event** listener to an already existing button and **output** "`Stored!`" via `console.log()`. And, of course, you should do that *"the React way"*.

## Starter Code

```jsx
import React from "react";

import "./styles.css";
// don't change the Component name "App"
export default function App() {
  return <button>Bookmark</button>;
}
```

## Solution

```jsx
import React from "react";

import "./styles.css";
// don't change the Component name "App"
export default function App() {
  const clickHandler = () => {
    console.log("Stored!");
  };
  return <button onClick={clickHandler}>Bookmark</button>;
}
```

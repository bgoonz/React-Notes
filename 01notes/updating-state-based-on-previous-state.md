# Exercise: Updating State Based On Older State

Your task is to build a **basic counter** that should **increment** whenever the "Increment" button is clicked.

Whilst this task allows you to **apply your general knowledge** about event handling and state (which you already practiced quite a bit at this point in the course), there's also **one crucial new aspect**: You should update the state following React **best practices**!

**Important**: Unfortunately, there's no way of automatically testing whether you used the best practice approach or not. Hence you should take a look at the "Solution explanation" to make sure you solved this task in the best possible way.

_Also make sure to use React.useState() instead of just useState() as the latter might fail in Udemy's code environment!_

## Starter Code

```jsx
import React from "react";
import "./styles.css";

// don't change the Component name "App"
export default function App() {
  return (
    <div>
      <p id="counter"></p>
      <button>Increment</button>
    </div>
  );
}
```

## Solution

```jsx
import React from "react";
import "./styles.css";

// don't change the Component name "App"
export default function App() {
  const [counter, setCounter] = React.useState(0);
  const incrementCounterHandler = () => {
    setCounter((prevCounter) => prevCounter + 1);
  };

  return (
    <div>
      <p id="counter">{counter}</p>
      <button onClick={incrementCounterHandler}>Increment</button>
    </div>
  );
}
```

# Exercise: Dynamic Styles

Your task is to **dynamically** apply a style (`color: red`) to the `<p>Style me</p>` element in the provided React app.

The style should be applied as an **inline style** (i.e., via the `style` attribute / prop) when the `<button>` is clicked for the first time. Once the button is clicked again, the styling should switch back to `color: white`, which should also be the initial style.

Make sure that the button toggles between these two styles (`color: white` <=> `color: red`).

Here's how the finished app should look like BEFORE the button was clicked:

![Before button click](https://img-c.udemycdn.com/redactor/raw/coding_exercise_instructions/2023-01-25_20-03-23-02fdb3ce682409032876037dd28b863f.png)

Here's how it should look like AFTER the button was clicked:

![after button click](https://img-c.udemycdn.com/redactor/raw/coding_exercise_instructions/2023-01-25_20-03-24-7c8e4ce80ee28148c63cfe980f251d9d.png)

And here's how it should look like when the button was clicked again:

![second button click](https://img-c.udemycdn.com/redactor/raw/coding_exercise_instructions/2023-01-25_20-03-24-eb267922d64394c0023ce989aa377ec2.png)

_Important: Use _`*React.useState()*`_ instead of just _`*useState()*`_ as the latter can cause problems in this Udemy code environment._

#### Starter Code:

```jsx
import React from "react";

// don't change the Component name "App"
export default function App() {
  return (
    <div>
      <p>Style me!</p>
      <button>Toggle style</button>
    </div>
  );
}
```

#### Solution Code:

```jsx
import React from "react";

// don't change the Component name "App"
export default function App() {
  const [toggle, setToggle] = React.useState(false);

  const toggleHandler = () => {
    setToggle(!toggle);
  };

  return (
    <div>
      <p style={{ color: toggle ? "red" : "white" }}>Style me!</p>
      <button onClick={toggleHandler}>Toggle style</button>
    </div>
  );
}
```

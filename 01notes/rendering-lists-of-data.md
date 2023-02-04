# Exercise: Rendering Lists of Data

You're working on a "Todo List" web app and your task is to **output a list of dummy todo items** **dynamically**. For this task, a `Todo` component has been prepared for you, though you must still add some code to it to **receive and output** the todo text.

To be more precise: In the `App` component, you should transform the `DUMMY_TODOS` array that's provided to you (which must not be changed!) to a list of JSX elements (`<Todo>` elements to be precise). Every `Todo` component item must receive and output the todo text via a prop called `text`.

-   Arrays can (and should) be transformed into JSX elements via the built-in `map()` method

-   Keep in mind that `someArray.map(...)` must be wrapped with curly braces if used in JSX code

-   `map()` takes a function that automatically receives the individual array item as an argument and returns the new value (to which the item should be transformed)

-   To pass the todo text (which is different for every todo item) to the `Todo` component, you should use a `text` prop (`props.text` inside the `Todo` component, `<Todo text="...">` inside the `App` component)

### Starter Code
- App.js
```jsx
import React from 'react';

import Todo from './Todo';
import './styles.css';

const DUMMY_TODOS = [
    'Learn React',
    'Practice React',
    'Profit!'
];

// don't change the Component name "App"
export default function App() {
    return (
        <ul>
          Todo: Output todos
        </ul>
    );
}

```

- Todo.js

```jsx
import React from 'react';

export default function Todo() {
    return <li>...</li>;
}

```

### Solution

- App.js
```jsx
import React from 'react';

import Todo from './Todo';
import './styles.css';

const DUMMY_TODOS = [
    'Learn React',
    'Practice React',
    'Profit!'
];

// don't change the Component name "App"
export default function App() {
    return (
        <ul>
          <Todo text={DUMMY_TODOS}></Todo>
        </ul>
    );
}


```

- Todo.js

```jsx
import React from "react";

export default function Todo(props) {
  return (
    <div>
      {props.text.map((todo) => {
        return <li>{todo}</li>;
      })}
    </div>
  );
}

```

# Exercise: Working with "State"

You're working on a part of an online shop where a discounted price should be displayed on the screen once the user clicked a button.

Your task is to add an **event listener** to listen for **clicks** on the button that's already included in the `App` component.

Upon a button click, the **price should change** from `$100` to `$75`.

**Add a state value** to the existing `App` component function and make sure the state value is both **updated** upon button clicks and **output** as part of the JSX code.

---

*Important: When using React Hooks like *`*useState()*`*, make sure to use them via *`*React.useState()*`* instead of just importing and using *`*useState()*`* standalone. This Udemy code editor / environment might fail to display the UI when not using *`*React.useState()*`*!*



## Starter Code

```jsx
import React from 'react';

import './styles.css';

// don't change the Component name "App"
// important: In this code editor, use React.useState() instead of just useState()
export default function App() {
    return (
        <div>
            <p>$100</p>
            <button>Apply Discount</button>
        </div>
    );
}

```

## Solution

```jsx
import React from 'react';

import './styles.css';

// don't change the Component name "App"
// important: In this code editor, use React.useState() instead of just useState()
export default function App() {
    const [price,setPrice]=React.useState(100)
    const clickHandler = ()=>{
        setPrice(75);
    }
    return (
        <div>
            <p>${price}</p>
            <button onClick={clickHandler}>Apply Discount</button>
        </div>
    );
}

```

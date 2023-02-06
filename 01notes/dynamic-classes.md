Exercise: Dynamic CSS Classes

Your task is to **dynamically** apply a **CSS class** (`active`) to the `<p>Style me</p>` element in the provided React app. This task is therefore very similar to the previous coding exercise but you're now going to set a CSS class dynamically - instead of an inline style.

The style should be applied as an **CSS class** (i.e., via the `className` attribute / prop) when the `<button>` is clicked for the first time. Once the button is clicked again, all CSS classes should be removed from the `<p>` element (this should also be the initial state).

Make sure that the button toggles between these two styles (no CSS class <=> `active`  CSS class).

Here's how the finished app should look like BEFORE the button was clicked:

![before](https://img-c.udemycdn.com/redactor/raw/coding_exercise_instructions/2023-01-25_20-18-40-a84ea52cbc1fe11c38ab9fec8263bfe4.png)

Here's how it should look like AFTER the button was clicked:

![after](https://img-c.udemycdn.com/redactor/raw/coding_exercise_instructions/2023-01-25_20-18-41-d38af590ee33c2badd29e3ec5e1f2965.png)

And here's how it should look like when the button was clicked again:

![again](https://img-c.udemycdn.com/redactor/raw/coding_exercise_instructions/2023-01-25_20-18-41-0a0b6c139e2be5bbb63d032e210309d1.png)

*Important: Use *`*React.useState()*`* instead of just *`*useState()*`* as the latter can cause problems in this Udemy code environment.*




#### Starter Code:

```jsx
import React from 'react';

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

###### Style.css:
```css
body {
    font-family: sans-serif;
    margin: 0;
    padding: 3rem;
    background-color: #2d2c2c;
    color: #959090;
    text-align: center;
}

.active {
    background-color: orange;
    padding: 0.5rem;
    border-radius: 4px;
    color: black;
}

```




#### Solution Code:

```jsx

import React from 'react';

// don't change the Component name "App"
export default function App() {
    
const [toggle,setToggle]=React.useState(false)    
const toggleHandler = () =>  {
    setToggle(!toggle)
} 

    return (
        <div>
            <p className={`${toggle?'active':''}`}>Style me!</p>
            <button onClick={toggleHandler}>Toggle style</button>
        </div>
    );
}


````

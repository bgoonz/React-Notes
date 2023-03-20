# Render a Class Component to the DOM

You may remember using the ReactDOM API in an earlier challenge to render JSX elements to the DOM. The process for rendering React components will look very similar. The past few challenges focused on components and composition, so the rendering was done for you behind the scenes. However, none of the React code you write will render to the DOM without making a call to the ReactDOM API.
Here's a refresher on the syntax: `ReactDOM.render(componentToRender, targetNode)`. The first argument is the React component that you want to render. The second argument is the DOM node that you want to render that component within.
React components are passed into `ReactDOM.render()` a little differently than JSX elements. For JSX elements, you pass in the name of the element that you want to render. However, for React components, you need to use the same syntax as if you were rendering a nested component, for example `ReactDOM.render(<ComponentToRender />, targetNode)`. You use this syntax for both ES6 class components and functional components.

---

Both the `Fruits` and `Vegetables` components are defined for you behind the scenes. Render both components as children of the `TypesOfFood` component, then render `TypesOfFood` to the DOM. There is a `div` with `id='challenge-node'` available for you to use.

```js
class TypesOfFood extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h1>Types of Food:</h1>
        <Fruits />
        <Vegetables />
      </div>
    );
  }
}
// Change code below this line
const root = document.getElementById("challenge-node");
ReactDOM.render(<TypesOfFood />, root);
```

---

# Write a React Component from Scratch

Now that you've learned the basics of JSX and React components, it's time to write a component on your own. React components are the core building blocks of React applications so it's important to become very familiar with writing them. Remember, a typical React component is an ES6 `class` which extends `React.Component`. It has a render method that returns HTML (from JSX) or `null`. This is the basic form of a React component. Once you understand this well, you will be prepared to start building more complex React projects.

---

Define a class `MyComponent` that extends `React.Component`. Its render method should return a `div` that contains an `h1` tag with the text: `My First React Component!` in it. Use this text exactly, the case and punctuation matter. Make sure to call the constructor for your component, too.
Render this component to the DOM using `ReactDOM.render()`. There is a `div` with `id='challenge-node'` available for you to use.

```js
// Change code below this line
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h1>My First React Component!</h1>
      </div>
    );
  }
}
const root = document.getElementById("challenge-node");
ReactDOM.render(<MyComponent />, root);
```

---

---

# Pass Props to a Stateless Functional Component

The previous challenges covered a lot about creating and composing JSX elements, functional components, and ES6 style class components in React. With this foundation, it's time to look at another feature very common in React: **props**. In React, you can pass props, or properties, to child components. Say you have an `App` component which renders a child component called `Welcome` which is a stateless functional component. You can pass `Welcome` a `user` property by writing:

```
<App>
  <Welcome user='Mark' />
</App>
```

You use **custom HTML attributes** created by you and supported by React to be passed to the component. In this case, the created property `user` is passed to the component `Welcome`. Since `Welcome` is a stateless functional component, it has access to this value like so:

```
const Welcome = (props) => <h1>Hello, {props.user}!</h1>
```

It is standard to call this value `props` and when dealing with stateless functional components, you basically consider it as an argument to a function which returns JSX. You can access the value of the argument in the function body. With class components, you will see this is a little different.

---

There are `Calendar` and `CurrentDate` components in the code editor. When rendering `CurrentDate` from the `Calendar` component, pass in a property of `date` assigned to the current date from JavaScript's `Date` object. Then access this `prop` in the `CurrentDate` component, showing its value within the `p` tags. Note that for `prop` values to be evaluated as JavaScript, they must be enclosed in curly brackets, for instance `date={Date()}`.

```js
const CurrentDate = (props) => {
  return (
    <div>
      {/* Change code below this line */}
      <p>The current date is:{props.date} </p>
      {/* Change code above this line */}
    </div>
  );
};
class Calendar extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h3>What date is it?</h3>
        {/* Change code below this line */}
        <CurrentDate date={Date()} />
        {/* Change code above this line */}
      </div>
    );
  }
}
```

---

---

# Pass an Array as Props

The last challenge demonstrated how to pass information from a parent component to a child component as `props` or properties. This challenge looks at how arrays can be passed as `props`. To pass an array to a JSX element, it must be treated as JavaScript and wrapped in curly braces.

```
<ParentComponent>
  <ChildComponent colors={["green", "blue", "red"]} />
</ParentComponent>
```

The child component then has access to the array property `colors`. Array methods such as `join()` can be used when accessing the property. `const ChildComponent = (props) => <p>{props.colors.join(', ')}</p>` This will join all `colors` array items into a comma separated string and produce: `<p>green, blue, red</p>` Later, we will learn about other common methods to render arrays of data in React.

---

There are `List` and `ToDo` components in the code editor. When rendering each `List` from the `ToDo` component, pass in a `tasks` property assigned to an array of to-do tasks, for example `["walk dog", "workout"]`. Then access this `tasks` array in the `List` component, showing its value within the `p` element. Use `join(", ")` to display the `props.tasks`array in the `p` element as a comma separated list. Today's list should have at least 2 tasks and tomorrow's should have at least 3 tasks.

```js
const List = (props) => {
  {
    /* Change code below this line */
  }
  return <p>{props.tasks.join(", ")}</p>;
  {
    /* Change code above this line */
  }
};
class ToDo extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h1>To Do Lists</h1>
        <h2>Today</h2>
        {/* Change code below this line */}
        <List tasks={["walk dog", "workout"]} />
        <h2>Tomorrow</h2>
        <List tasks={["study", "apply", "interview"]} />
        {/* Change code above this line */}
      </div>
    );
  }
}
```

---

---

# Use Default Props

React also has an option to set default props. You can assign default props to a component as a property on the component itself and React assigns the default prop if necessary. This allows you to specify what a prop value should be if no value is explicitly provided. For example, if you declare `MyComponent.defaultProps = { location: 'San Francisco' }`, you have defined a location prop that's set to the string `San Francisco`, unless you specify otherwise. React assigns default props if props are undefined, but if you pass `null` as the value for a prop, it will remain `null`.

---

The code editor shows a `ShoppingCart` component. Define default props on this component which specify a prop `items` with a value of `0`.

```js
const ShoppingCart = (props) => {
  return (
    <div>
      <h1>Shopping Cart Component</h1>
    </div>
  );
};
// Change code below this line
ShoppingCart.defaultProps = { items: 0 };
```

---

---

# Use Default Props

#### React also has an option to set default props. You can assign default props to a component as a property on the component itself and React assigns the default prop if necessary. This allows you to specify what a prop value should be if no value is explicitly provided. For example, if you declare `MyComponent.defaultProps = { location: 'San Francisco' }`, you have defined a location prop that's set to the string `San Francisco`Override Default Props

The ability to set default props is a useful feature in React. The way to override the default props is to explicitly set the prop values for a component.

---

The `ShoppingCart` component now renders a child component `Items`. This `Items` component has a default prop `quantity` set to the integer `0`. Override the default prop by passing in a value of `10` for `quantity`.
**Note:** Remember that the syntax to add a prop to a component looks similar to how you add HTML attributes. However, since the value for `quantity` is an integer, it won't go in quotes but it should be wrapped in curly braces. For example, `{100}`. This syntax tells JSX to interpret the value within the braces directly as JavaScript., unless you specify otherwise. React assigns default props if props are undefined, but if you pass `null` as the value for a prop, it will remain `null`.

---

The code editor shows a `ShoppingCart` component. Define default props on this component which specify a prop `items` with a value of `0`.

```js
const Items = (props) => {
  return <h1>Current Quantity of Items in Cart: {props.quantity}</h1>;
};
Items.defaultProps = {
  quantity: 0,
};
class ShoppingCart extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    {
      /* Change code below this line */
    }
    return <Items quantity={10} />;
    {
      /* Change code above this line */
    }
  }
}
```

---

---
Use PropTypes to Define the Props You Expect
============================================

React provides useful type-checking features to verify that components receive props of the correct type. For example, your application makes an API call to retrieve data that you expect to be in an array, which is then passed to a component as a prop. You can set `propTypes` on your component to require the data to be of type `array`. This will throw a useful warning when the data is of any other type.

It's considered a best practice to set `propTypes` when you know the type of a prop ahead of time. You can define a `propTypes` property for a component in the same way you defined `defaultProps`. Doing this will check that props of a given key are present with a given type. Here's an example to require the type `function` for a prop called `handleClick`:

```
MyComponent.propTypes = { handleClick: PropTypes.func.isRequired }

```

In the example above, the `PropTypes.func` part checks that `handleClick` is a function. Adding `isRequired` tells React that `handleClick` is a required property for that component. You will see a warning if that prop isn't provided. Also notice that `func` represents `function`. Among the seven JavaScript primitive types, `function` and `boolean` (written as `bool`) are the only two that use unusual spelling. In addition to the primitive types, there are other types available. For example, you can check that a prop is a React element. Please refer to the [documentation](https://reactjs.org/docs/typechecking-with-proptypes.html#proptypes) for all of the options.

**Note:** As of React v15.5.0, `PropTypes` is imported independently from React, like this: `import PropTypes from 'prop-types';`

* * * * *

Define `propTypes` for the `Items` component to require `quantity` as a prop and verify that it is of type `number`.

```js
const Items = (props) => {
  return <h1>Current Quantity of Items in Cart: {props.quantity}</h1>
};

// Change code below this line

// Change code above this line

Items.defaultProps = {
  quantity: 0
};

class ShoppingCart extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <Items />
  }
};

Items.propTypes ={quantity:PropTypes.number.isRequired}

```


---
---

Access Props Using this.props
=============================

The last several challenges covered the basic ways to pass props to child components. But what if the child component that you're passing a prop to is an ES6 class component, rather than a stateless functional component? The ES6 class component uses a slightly different convention to access props.

Anytime you refer to a class component within itself, you use the `this` keyword. To access props within a class component, you preface the code that you use to access it with `this`. For example, if an ES6 class component has a prop called `data`, you write `{this.props.data}` in JSX.

* * * * *

Render an instance of the `Welcome` component in the parent component `App`. Here, give `Welcome` a prop of `name` and assign it a value of a string. Within the child, `Welcome`, access the `name` prop within the `strong` tags.


```js
class App extends React.Component {
  constructor(props) {
    super(props);

  }
  render() {
    return (
        <div>
            { /* Change code below this line */ }
            <Welcome name={'Bryan'}/>
            { /* Change code above this line */ }
        </div>
    );
  }
};

class Welcome extends React.Component {
  constructor(props) {
    super(props);

  }
  render() {
    return (
        <div>
          { /* Change code below this line */ }
          <p>Hello, <strong>{this.props.name}</strong>!</p>
          { /* Change code above this line */ }
        </div>
    );
  }
};

```
---
---
Review Using Props with Stateless Functional Components
=======================================================

Except for the last challenge, you've been passing props to stateless functional components. These components act like pure functions. They accept props as input and return the same view every time they are passed the same props. You may be wondering what state is, and the next challenge will cover it in more detail. Before that, here's a review of the terminology for components.

A *stateless functional component* is any function you write which accepts props and returns JSX. A *stateless component*, on the other hand, is a class that extends `React.Component`, but does not use internal state (covered in the next challenge). Finally, a *stateful component* is a class component that does maintain its own internal state. You may see stateful components referred to simply as components or React components.

A common pattern is to try to minimize statefulness and to create stateless functional components wherever possible. This helps contain your state management to a specific area of your application. In turn, this improves development and maintenance of your app by making it easier to follow how changes to state affect its behavior.

* * * * *

The code editor has a `CampSite` component that renders a `Camper` component as a child. Define the `Camper` component and assign it default props of `{ name: 'CamperBot' }`. Inside the `Camper` component, render any code that you want, but make sure to have one `p` element that includes only the `name` value that is passed in as a `prop`. Finally, define `propTypes` on the `Camper` component to require `name` to be provided as a prop and verify that it is of type `string`.



```js
class CampSite extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <Camper name={'Bryan'}/>
      </div>
    );
  }
};
// Change code below this line

const Camper =(props)=>{
return <p>{props.name}</p>
}
Camper.defaultProps = { name: 'CamperBot' };
Camper.propTypes ={name:PropTypes.string.isRequired}

```

---
---

Create a Stateful Component
===========================

One of the most important topics in React is `state`. State consists of any data your application needs to know about, that can change over time. You want your apps to respond to state changes and present an updated UI when necessary. React offers a nice solution for the state management of modern web applications.

You create state in a React component by declaring a `state` property on the component class in its `constructor`. This initializes the component with `state` when it is created. The `state` property must be set to a JavaScript `object`. Declaring it looks like this:

```
this.state = {

}

```

You have access to the `state` object throughout the life of your component. You can update it, render it in your UI, and pass it as props to child components. The `state` object can be as complex or as simple as you need it to be. Note that you must create a class component by extending `React.Component` in order to create `state` like this.

* * * * *

There is a component in the code editor that is trying to render a `firstName` property from its `state`. However, there is no `state` defined. Initialize the component with `state` in the `constructor` and assign your name to a property of `firstName`.

```js
class StatefulComponent extends React.Component {
  constructor(props) {
    super(props);
    // Only change code below this line
this.state={
  firstName:'bryan'
}
    // Only change code above this line
  }
  render() {
    return (
      <div>
        <h1>{this.state.firstName}</h1>
      </div>
    );
  }
};

```
---
---
Render State in the User Interface
==================================

Once you define a component's initial state, you can display any part of it in the UI that is rendered. If a component is stateful, it will always have access to the data in `state` in its `render()` method. You can access the data with `this.state`.

If you want to access a state value within the `return` of the render method, you have to enclose the value in curly braces.

`state` is one of the most powerful features of components in React. It allows you to track important data in your app and render a UI in response to changes in this data. If your data changes, your UI will change. React uses what is called a virtual DOM, to keep track of changes behind the scenes. When state data updates, it triggers a re-render of the components using that data - including child components that received the data as a prop. React updates the actual DOM, but only where necessary. This means you don't have to worry about changing the DOM. You simply declare what the UI should look like.

Note that if you make a component stateful, no other components are aware of its `state`. Its `state` is completely encapsulated, or local to that component, unless you pass state data to a child component as `props`. This notion of encapsulated `state` is very important because it allows you to write certain logic, then have that logic contained and isolated in one place in your code.

* * * * *

In the code editor, `MyComponent` is already stateful. Define an `h1` tag in the component's render method which renders the value of `name` from the component's state.

**Note:** The `h1` should only render the value from `state` and nothing else. In JSX, any code you write with curly braces `{ }` will be treated as JavaScript. So to access the value from `state` just enclose the reference in curly braces.


```js

class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'freeCodeCamp'
    }
  }
  render() {
    return (
      <div>
        { /* Change code below this line */}
        <h1>{this.state.name}</h1>
        { /* Change code above this line */}
      </div>
    );
  }
};

```
---
---

Render State in the User Interface Another Way
==============================================

There is another way to access `state` in a component. In the `render()` method, before the `return` statement, you can write JavaScript directly. For example, you could declare functions, access data from `state` or `props`, perform computations on this data, and so on. Then, you can assign any data to variables, which you have access to in the `return` statement.

* * * * *

In the `MyComponent` render method, define a `const` called `name` and set it equal to the name value in the component's `state`. Because you can write JavaScript directly in this part of the code, you don't have to enclose this reference in curly braces.

Next, in the return statement, render this value in an `h1` tag using the variable `name`. Remember, you need to use the JSX syntax (curly braces for JavaScript) in the return statement.


```js
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'freeCodeCamp'
    }
  }
  render() {
    // Change code below this line
    const name = this.state.name
    // Change code above this line
    return (
      <div>
        { /* Change code below this line */}
        <h1>{name}</h1>
        { /* Change code above this line */}
      </div>
    );
  }
};


```
---
---

Set State with this.setState
============================

The previous challenges covered component `state` and how to initialize state in the `constructor`. There is also a way to change the component's `state`. React provides a method for updating component `state` called `setState`. You call the `setState` method within your component class like so: `this.setState()`, passing in an object with key-value pairs. The keys are your state properties and the values are the updated state data. For instance, if we were storing a `username` in state and wanted to update it, it would look like this:

```
this.setState({
  username: 'Lewis'
});

```

React expects you to never modify `state` directly, instead always use `this.setState()` when state changes occur. Also, you should note that React may batch multiple state updates in order to improve performance. What this means is that state updates through the `setState` method can be asynchronous. There is an alternative syntax for the `setState` method which provides a way around this problem. This is rarely needed but it's good to keep it in mind! Please consult our [React article](https://www.freecodecamp.org/news/what-is-state-in-react-explained-with-examples/) for further details.

* * * * *

There is a `button` element in the code editor which has an `onClick()` handler. This handler is triggered when the `button` receives a click event in the browser, and runs the `handleClick` method defined on `MyComponent`. Within the `handleClick` method, update the component `state` using `this.setState()`. Set the `name` property in `state` to equal the string `React Rocks!`.

Click the button and watch the rendered state update. Don't worry if you don't fully understand how the click handler code works at this point. It's covered in upcoming challenges.

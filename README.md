# React-Complete-Guide-Course

udemy-course

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



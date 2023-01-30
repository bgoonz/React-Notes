import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
// this is the first file to exicute
// react is split across two seperate libraries... react & react-Dom
// if you import a function in file a that you want to use in file b then you need to export it from file a....
// the line below 'createRoot' is the main hook and tells the webpage where you want to put the entry point of the react application
//corresponds to the div with id='root' in the index.html where we want to inject our React UI ... document.getElementById("root"));
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />); // render method tells react what should be rendered on the root element

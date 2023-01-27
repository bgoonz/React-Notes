import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import App from "./App";
// this is the first file to exicute
// react is split across two seperate libraries... react & react-Dom
//
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);

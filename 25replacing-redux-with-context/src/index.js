import React from "react";
import ReactDOM from "react-dom";
import ProductsProvider from "./context/products-context";
import { BrowserRouter } from "react-router-dom";

import "./index.css";
import App from "./App";
import productReducer from "./store/reducers/products";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ProductsProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ProductsProvider>
);

# Exercise: Passing Data via "props"

You're working on the UI prototype for an online shop and your task is to output **two product items** (via the `<Product />` component you find in the `Product.js` file) below the main page title (`"My Demo Shop"`) in the `App` component.

The **final UI** should look like this:

![](https://img-c.udemycdn.com/redactor/raw/coding_exercise_instructions/2023-01-25_13-48-35-4517034478c3d34ad3dedce2f3c9df20.png)

The **two product items** should use the **same component** (`<Product />`) but output **different data** (`title`, `price` & `description`). Data should be passed to the components (and output there) via `props`.

The **first product** **item** is expected to display the following information:

- Title: `Product 1`

- Price: `10`

- Description: `First product`

The **second product item** is expected to display the following information:

- Title: `Product 2`

- Price: `20`

- Description: `Second product`

---

## App.js

```js
import Product from "./Product";
import "./styles.css";

// don't change the Component name "App"
export default function App() {
  const products = [
    {
      title: "Product 1",
      price: "10",
      description: "First product",
    },
    {
      title: "Product 2",
      price: "20",
      description: "Second product",
    },
  ];
  return (
    <div>
      <h1>My Demo Shop</h1>
      <Product
        title={products[0].title}
        price={products[0].price}
        description={products[0].description}
      ></Product>
      <Product
        title={products[1].title}
        price={products[1].price}
        description={products[1].description}
      ></Product>
    </div>
  );
}
```

---

## Product.js

```js
export default function Product(props) {
  return (
    <article className="product">
      <h2>{props.title}</h2>
      <p className="price">${props.price}</p>
      <p>{props.description}</p>
    </article>
  );
}
```

---

## styles.css

```css
body {
  font-family: sans-serif;
  margin: 0;
  padding: 3rem;
  background-color: #2d2c2c;
  color: #959090;
}

.product {
  margin: 1rem 0;
  padding: 1rem;
  background-color: #373535;
  color: #e7e4e4;
  border-radius: 8px;
}

.product h2,
.product p {
  margin: 0.5rem 0;
}

.price {
  font-size: 0.75rem;
  color: #bab6b6;
}
```

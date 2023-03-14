import { Link } from "react-router-dom";
const PRODUCTS = [
  { id: "p1", title: "Product 1" },
  { id: "p2", title: "Product 2" },
  { id: "p3", title: "Product 3" },
];
function ProductsPage() {
  return (
    <div>
      <h1>The Products Page</h1>
      {PRODUCTS.map((product) => {
        return (
          <li key={product.id}>
            <Link to={`/products/${product.id}`}>{product.title}</Link>
          </li>
        );
      })}
    </div>
  );
}
export default ProductsPage;

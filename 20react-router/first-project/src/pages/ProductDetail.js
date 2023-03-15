import { useParams, Link } from "react-router-dom";

function ProductDetailPage() {
  const params = useParams();

  return (
    <div>
      <h1>The Product Detail Page</h1>
      <p>{params.productId}</p>
      <p>
        <Link to=".." relative="path">
          Back
        </Link>
      </p>
    </div>
  );
}
export default ProductDetailPage;

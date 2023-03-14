import { Link,useNavigate } from "react-router-dom";

function HomePage() {
    const navigate = useNavigate();
    function navigateHandler() {
        navigate('/products')
    }
  return (
    <div>
      <h1>The Home Page</h1>
      <p>
        Go to <Link to="/products">the list of products</Link>
          </p>
          <p>
              <button onClick={navigateHandler}>Go to Products</button>
          </p>
    </div>
  );
}

export default HomePage;

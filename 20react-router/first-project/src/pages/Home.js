import { Link } from "react-router-dom";
import MainNavigation from "../components/MainNavigation";
function HomePage() {
  return (
    <div>
      <h1>The Home Page</h1>
      <p>
        Go to <Link to="/products">the list of products</Link>
      </p>
    </div>
  );
}

export default HomePage;

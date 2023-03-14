import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/Home";
import ProductsPage from "./pages/Products";
const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  { path: "/products", element: <ProductsPage /> },
]);
function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;

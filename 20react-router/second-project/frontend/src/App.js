import { createBrowserRouter, RouterProvider } from "react-router-dom";
import EditEvent from "./pages/EditEvent";
import ErrorPage from "./pages/Error";
import EventDetail, { loader as eventDetailLoader } from "./pages/EventDetail";
import Events, { loader as eventsLoader } from "./pages/Events";
import EventsRootLayout from "./pages/EventsRoot";
import Home from "./pages/Home";
import NewEvent from "./pages/NewEvent";
import RootLayout from "./pages/Root";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Home /> },
      {
        path: "events",
        element: <EventsRootLayout />,
        children: [
          {
            path: "",
            element: <Events />,
            loader: eventsLoader,
          },
          {
            path: ":eventId",
            element: <EventDetail />,
            loader: eventDetailLoader,
          },
          { path: "new", element: <NewEvent /> },
          { path: ":eventId/edit", element: <EditEvent /> },
        ],
      },
    ],
  },
]);
function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;

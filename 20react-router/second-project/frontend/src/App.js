import { createBrowserRouter, RouterProvider } from "react-router-dom";
import EditEvent from "./pages/EditEvent";
import ErrorPage from "./pages/Error";
import EventDetail, { loader as eventDetailLoader, action as DeleteEventAction } from "./pages/EventDetail";
import Events, { loader as eventsLoader } from "./pages/Events";
import EventsRootLayout from "./pages/EventsRoot";
import Home from "./pages/Home";
import NewEvent, {action as newEventAction} from "./pages/NewEvent";
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
            index: true,
            element: <Events />,
            loader: eventsLoader,
          },
          {
            path: ":eventId",
            id: "event-detail",
            loader: eventDetailLoader,
            children: [
              {
                index: true,
                    element: <EventDetail />,
                action: DeleteEventAction,
              },
              { path: "edit", element: <EditEvent /> },
            ],
          },
          { path: "new", element: <NewEvent />, action: newEventAction },
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

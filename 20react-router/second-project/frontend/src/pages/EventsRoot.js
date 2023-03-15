import EventsNavigation from "../components/EventsNavigation";
import { Outlet } from "react-router-dom";

function EventsRootLayout() {
  return (
    <div>
      <EventsNavigation />
      <Outlet />
    </div>
  );
}
export default EventsRootLayout;

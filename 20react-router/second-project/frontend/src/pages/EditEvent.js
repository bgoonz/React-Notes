import EventForm from "../components/EventForm";
import { useRouteLoaderData } from "react-router-dom";
function EditEventPage() {
  const data = useRouteLoaderData("event-detail");
  const event = data.event;
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Edit Event</h1>
      <EventForm method='PATCH' event={event} />
    </div>
  );
}

export default EditEventPage;

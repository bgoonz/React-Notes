import { useLoaderData, json } from "react-router-dom";
import EventItem from "../components/EventItem";

function EventDetailPage() {
  const data = useLoaderData();
  return <EventItem event={data.event} />;
}

export default EventDetailPage;

export async function loader({ request, params }) {
  const id = params.eventId;
  const response = await fetch(
    `http://localhost:8080/events/${params.eventId}`
  );
  if (!response.ok) {
    throw json({ message: "Could not fetch event" }, { status: 500 });
  } else {
    return response;
  }
}

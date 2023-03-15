import EventsList from "../components/EventsList";
import { useLoaderData } from "react-router-dom";
function EventsPage() {
  // useLoaderData() is a hook that returns the data that was the result of the promise returned by the loader function.
 const events = useLoaderData();
  return (
    <>
      <EventsList events={events}/>
    </>
  );
}

export default EventsPage;
export async function loader() {
  const response = await fetch("http://localhost:8080/events");
  if (!response.ok) {
  } else {
    const resData = await response.json();
    return resData.events;
  }
}

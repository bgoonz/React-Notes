import EventsList from "../components/EventsList";
import { useLoaderData } from "react-router-dom";
function EventsPage() {
  // useLoaderData() is a hook that returns the data that was the result of the promise returned by the loader function.
    const data = useLoaderData();
    // if ( data.isError ) {
    //     return <p>{ data.message }</p>
    // }
    const events = data.events;
  return (
    <>
      <EventsList events={events} />
    </>
  );
}

export default EventsPage;
export async function loader() {
  const response = await fetch("http://localhost:8080/event");
    if ( !response.ok ) {
    //   return{isError: true, message: "Something went wrong!"}
        throw new Response (JSON.stringify({message: "Could not fetch events"}), {status: 500});
  } else {
      return response;
  }
}

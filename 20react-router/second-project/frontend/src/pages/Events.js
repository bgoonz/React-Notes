import EventsList from "../components/EventsList";
import { Suspense } from "react";
import { useLoaderData, json, defer, Await } from "react-router-dom";
function EventsPage() {
  // useLoaderData() is a hook that returns the data that was the result of the promise returned by the loader function.
  const { events } = useLoaderData();

  return (
    <>
      {/*The suspense component is used to show a fallback while we wait for data to arrive */}
      <Suspense fallback={<p style={{ textAlign: "center" }}>Loading...</p>}>
        <Await resolve={events}>
          {/*The function between the braces below will get exicuted once the events promise resolves */}
          {(loadedEvents) => <EventsList events={loadedEvents} />}
        </Await>
      </Suspense>
    </>
  );
}

export default EventsPage;
async function loadEvents() {
  const response = await fetch("http://localhost:8080/events");
  if (!response.ok) {
    //   return{isError: true, message: "Something went wrong!"}
    // throw new Response (JSON.stringify({message: "Could not fetch events"}), {status: 500});
    throw json(
      { message: "Could not fetch events" },
      {
        status: 500,
      }
    );
  } else {
    const resData = await response.json();
    return resData.events;
  }
}
export function loader() {
  /*loadEvents() returns a promise as a value...defer must take a promise as an argument*/

  return defer({
    events: loadEvents(),
  });
}

import { Link } from "react-router-dom";

const EVENTS = [
  {
    id: "e1",
    title: "Programming for everyone",
    description:
      "In this event, we will have some experts that teach you how to program in any language you like!",
    location: "Somewhere in the world",
    date: "2021-05-12",
  },
  {
    id: "e2",
    title: "Networking for introverts",
    description:
      "You probably need no help with networking in general. But focusing your energy correctly - that is something where most people can improve.",
    location: "Somewhere in the world",
    date: "2022-05-12",
  },
  {
    id: "e3",
    title: "Networking for extroverts",
    description:
      "You probably need no help with networking in general. But focusing your energy correctly - that is something where most people can improve.",
    location: "Somewhere in the world",
    date: "2022-05-12",
  },
];

function EventsPage() {
  return (
    <div>
      <h1>The Events Page</h1>
      {EVENTS.map((event) => (
        <div key={event.id}>
          <h2>{event.title}</h2>
          <p>{event.description}</p>
          <p>{event.location}</p>
          <p>{event.date}</p>
          <Link to={`/events/${event.id}`}>Show Details</Link>
        </div>
      ))}
    </div>
  );
}

export default EventsPage;

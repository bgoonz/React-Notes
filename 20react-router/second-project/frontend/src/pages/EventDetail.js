import { useParams, Link } from "react-router-dom";
function EventDetail() {
  const params = useParams();
  return (
    <section className="event-detail">
      <h1>Event Detail Page</h1>
      <p>{params.eventId}</p>
      <Link to="/events">Back to Events</Link>
    </section>
  );
}

export default EventDetail;

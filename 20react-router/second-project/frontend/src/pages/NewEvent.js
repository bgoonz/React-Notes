import EventForm from "../components/EventForm";
function NewEventPage() {
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>New Event</h1>
      <EventForm method="post"/>
    </div>
  );
}

export default NewEventPage;


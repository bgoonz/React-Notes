import EventForm from "../components/EventForm";
import { json, redirect } from "react-router-dom";
function NewEventPage() {
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>New Event</h1>
      <EventForm />
    </div>
  );
}

export default NewEventPage;
export async function action({ request, params }) {
  //.formData is a method on the request object sent by the Form Component provided  by the react-router-dom package
  const data = await request.formData();
  const eventData = {
    title: data.get("title"),
    image: data.get("image"),
    date: data.get("date"),
    description: data.get("description"),
  };
  const response = await fetch("http://localhost:8080/events", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(eventData),
  });
  if (response.status === 422) {
    return response;
  }
  if (!response.ok) {
    throw json({ message: "Could not create event" }, { status: 500 });
  }
  return redirect("/events");
}

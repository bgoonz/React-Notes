import MeetupList from "../components/meetups/MeetupList";
const DUMMY_MEETUPS = [
  {
    id: "m1",
    title: "This is a first meetup",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/American_Beaver.jpg/1200px-American_Beaver.jpg",
    address: "Some address 5, 12345 Some City",
    description: "This is a first meetup",
  },
  {
    id: "m2",
    title: "This is a second meetup",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/American_Beaver.jpg/1200px-American_Beaver.jpg",
    address: "Some address 10, 12345 Some City",
    description: "This is a second meetup",
  },
];

function HomePage() {
  return <MeetupList meetups={DUMMY_MEETUPS} />;
}

export default HomePage;

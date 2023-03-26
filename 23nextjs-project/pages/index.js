import MeetupList from "../components/meetups/MeetupList";
import { MongoClient } from "mongodb";

function HomePage(props) {
  return <MeetupList meetups={props.meetups} />;
}

export async function getStaticProps() {
  //revalidate is a special property that tells next.js that it should re-generate the page at most once every 10 seconds
  const client = await MongoClient.connect(
    "mongodb+srv://bryanguner:lVjEqV6QbEBhEx4l@cluster0.mdh4edk.mongodb.net/meetups?retryWrites=true&w=majority"
  );
  const db = client.db();
  const meetupsCollection = db.collection("meetups");
  const meetups = await meetupsCollection.find().toArray();
  client.close();

  return {
    props: {
      meetups: meetups.map((meetup) => ({
        title: meetup.title,
        address: meetup.address,
        image: meetup.image,
        id: meetup._id.toString(),
      })),
    },
    revalidate: 10,
  };
}
export default HomePage;

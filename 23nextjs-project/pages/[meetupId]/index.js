import MeetupDetail from "../../components/meetups/MeetupDetail";
function MetupDetails() {
  return (
    <MeetupDetail
      image={
        "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/American_Beaver.jpg/1200px-American_Beaver.jpg"
      }
      title={"This is a first meetup"}
      address={"Some address 5, 12345 Some City"}
      description={"This is a first meetup"}
    />
  );
}
export async function getStaticPaths() {
  return {
    fallback: false,
    paths: [
      {
        params: {
          meetupId: "m1",
        },
      },
      {
        params: {
          meetupId: "m2",
        },
      },
    ],
  };
}

export async function getStaticProps(context) {
  //fetch data for a single meetup
  const meetupId = context.params.meetupId;
  /*meetupId because that's the dynamic route identifier*/
  console.log(meetupId);
  return {
    props: {
      id: meetupId,
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/American_Beaver.jpg/1200px-American_Beaver.jpg",
      title: "This is a first meetup",
      address: "Some address 5, 12345 Some City",
      description: "This is a first meetup",
    },
  };
}

export default MetupDetails;

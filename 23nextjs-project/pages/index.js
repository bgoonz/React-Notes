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

function HomePage(props) {
  return <MeetupList meetups={props.meetups} />;
}

//getStaticProps is a special function that Next.js will recognize and will exicute during the pre-rendering process... it can be async meaning it can fetch data from an API.. the code in here is executed during the build process not on the client side... you always need to return an object from this function which has a props property which will be passed to the page component as an argument

export function getStaticProps() {
    //revalidate is a special property that tells next.js that it should re-generate the page at most once every 10 seconds
  return {
      props: { meetups: DUMMY_MEETUPS },
        revalidate: 10,
  };
}
export default HomePage;

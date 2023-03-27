import { useRouter } from "next/router";
// useRouter is a custom react hook that returns an object with the route information
function DetailPage() {
  const router = useRouter();
  const newsId = router.query.newsId;
  //send a request to the backend API to fetch news item with newsId

  return <h1>The Detail Page</h1>;
}

export default DetailPage;

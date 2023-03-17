import PageContent from "../components/PageContent";
import { useRouteError } from "react-router-dom";
import MainNavigation from "../components/MainNavigation";

function ErrorPage() {
  const error = useRouteError();
  let title = "An error occured";
  let message = "Something went wrong";
  console.log(error);
  if (error.status === 500) {
    //when you
    message = error.data.message;
  }
  if (error.status === 404) {
    title = "Page not found";
    message = "The page you are looking for does not exist";
  }
  return (
    <div>
      <MainNavigation />
      <PageContent title={title}>
        <p>{message}</p>
      </PageContent>
    </div>
  );
}
export default ErrorPage;

import MainNavigation from "../components/MainNavigation";

function ErrorPage() {
  return (
    <div>
      <MainNavigation />
      <h1>An Error Occured</h1>
      <p>Sorry, a page you are looking for does not exist.</p>
    </div>
  );
}

export default ErrorPage;

import classes from "./NewsletterSignup.module.css";
import { useFetcher } from "react-router-dom";
import { useEffect } from "react";
function NewsletterSignup() {
  const fetcher = useFetcher();
  const { data, state } = fetcher;
  useEffect(() => {
    if (state === "idle" && data && data.message) {
      window.alert(data.message);
    }
  }, [data, state]);
  return (
    /*Fetcher.Form will still trigger an action without initializing a route transition  */
    <fetcher.Form
      method="post"
      action="/newsletter"
      className={classes.newsletter}
    >
      <input
        type="email"
        placeholder="Email"
        aria-label="Sign up for newsletter"
      />
      <button>Sign up</button>
    </fetcher.Form>
  );
}

export default NewsletterSignup;

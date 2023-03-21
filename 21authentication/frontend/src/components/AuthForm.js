import { Form, Link, useSearchParams, useActionData, useNavigation } from "react-router-dom";

import classes from "./AuthForm.module.css";

function AuthForm() {
    const data = useActionData();
    //navigation has a state that lets us know if we are currently submitting the form
    const navigation = useNavigation();
    const isSubmitting = navigation.state ==='submitting'
    
  const [searchParams] = useSearchParams();
  const isLogin = searchParams.get("mode") === "login";
  return (
    <>
      <Form method="post" className={classes.form}>
        <h1>{isLogin ? "Log in" : "Create a new user"}</h1>
        {data && data.errors && (
          <ul>
            {Object.values(data.errors).map((error) => {
                return <li style={ { color: 'red' } } key={error}>{error}</li>;
            })}
          </ul>
              ) }
              { data && data.message && <p style={{color:'red'}}>{ data.message }</p> }
        <p>
          <label htmlFor="email">Email</label>
          <input id="email" type="email" name="email" required />
        </p>
        <p>
          <label htmlFor="image">Password</label>
          <input id="password" type="password" name="password" required />
        </p>
        <div className={classes.actions}>
          <Link to={`?mode=${isLogin ? "signup" : "login"}`}>
            {isLogin ? "Create new user" : "Login"}
          </Link>
          <button disabled={isSubmitting}>{isSubmitting?'Submitting...':'Save'}</button>
        </div>
      </Form>
    </>
  );
}

export default AuthForm;

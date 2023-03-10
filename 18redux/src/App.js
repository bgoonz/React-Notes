import Counter from "./components/Counter";
import { useSelector } from "react-redux";
import { Fragment } from "react";
import Header from "./components/Header";
import Auth from "./components/Auth";
import UserProfile from "./components/UserProfile";
function App() {
    const isAuth = useSelector((state) => state.auth.isAuthenticated);
  return (
    <Fragment>
      <Header />
          { !isAuth ?< Auth />: <UserProfile />}
      <Counter />
    </Fragment>
  );
}

export default App;

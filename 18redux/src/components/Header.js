import classes from "./Header.module.css";
import { useSelector,useDispatch } from 'react-redux';
import { authActions } from '../store/index';
const Header = () => {
    const dispatch = useDispatch();
    const logoutHandler = (event) => {
        dispatch( authActions.logout() );
    }
    
    const isAuth = useSelector((state) => state.auth.isAuthenticated);
  return (
    <header className={classes.header}>
          <h1>Redux Auth</h1>
          { isAuth &&
              <nav>
                  <ul>
                      <li>
                          <a href="/">My Products</a>
                      </li>
                      <li>
                          <a href="/">My Sales</a>
                      </li>
                      <li>
                          <button onClick={logoutHandler}>Logout</button>
                      </li>
                  </ul>
              </nav> }
    </header>
  );
};

export default Header;

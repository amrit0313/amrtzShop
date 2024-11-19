import { Link, NavLink, useNavigate } from "react-router-dom";
import classes from "./header.module.css";
import { useDispatch, useSelector } from "react-redux";
import cartIcon from "../../cart.svg";
import { authActions } from "../../reduxStore/authSlice";
import logo from "../../loGo.png";
import log from "../../pp.svg";

const Header = () => {
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const logoutHandler = () => {
    alert("Wanna logout?");
    dispatch(authActions.logout());
    navigate("auth");
  };

  return (
    <div className={classes.header}>
      <div className={classes.cover}>
        <div className={classes.logoDiv}>
          <Link to="/">
            <img src={logo} alt="logo" />
          </Link>
        </div>
        <div className={classes.links}>
          {auth.isLoggedIn && (
            <NavLink
              to="clothes"
              className={({ isActive }) => (isActive ? classes.active : "")}
            >
              Clothes
            </NavLink>
          )}
          {auth.isLoggedIn && (
            <NavLink
              to="shoes"
              className={({ isActive }) => (isActive ? classes.active : "")}
            >
              Shoes
            </NavLink>
          )}
          {auth.isLoggedIn && (
            <NavLink
              to="products"
              className={({ isActive }) => (isActive ? classes.active : "")}
            >
              Skin/Hair
            </NavLink>
          )}
        </div>
      </div>
      <div className={classes.buttonDiv}>
        {auth.isLoggedIn && (
          <button
            className={classes.cartButton}
            onClick={() => navigate("cart")}
          >
            <img src={cartIcon} alt="error" />
          </button>
        )}

        {auth.isLoggedIn && (
          <button onClick={logoutHandler} className={classes.logout}>
            logout
          </button>
        )}
        {!auth.isLoggedIn && (
          <button onClick={() => navigate("/auth")} className={classes.login}>
            <img src={log} alt="profile" />
          </button>
        )}
      </div>
    </div>
  );
};

export default Header;

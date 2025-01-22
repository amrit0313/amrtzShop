import { Link, NavLink, useNavigate } from "react-router-dom";
import classes from "./header.module.css";
import { useSelector } from "react-redux";
import cartIcon from "../../cart.svg";
import logo from "../../loGo.png";
// import { LiaUserSolid } from "react-icons/lia";

const Header = (props) => {
  const auth = useSelector((state) => state.auth);
  const cart = useSelector((state) => state.cart);

  const navigate = useNavigate();

  return (
    <div className={auth.isLoggedIn ? classes.header : classes.headerbefore}>
      <div className={auth.isLoggedIn ? classes.cover : classes.coverbefore}>
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
              to="cosmetics"
              className={({ isActive }) => (isActive ? classes.active : "")}
            >
              cosmetics
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
            {cart.totalQuantity > 0 && (
              <p className={classes.quantity}>{cart.totalQuantity}</p>
            )}
          </button>
        )}

        {auth.isLoggedIn && (
          <button onClick={props.showModal} className={classes.logout}>
            logout
          </button>
        )}
        {!auth.isLoggedIn && (
          <button onClick={props.onLogin} className={classes.login}>
            {/* <LiaUserSolid style={{ fontSize: "40px", strokeWidth: "0.1" }} /> */}{" "}
            Log In
          </button>
        )}
      </div>
    </div>
  );
};

export default Header;

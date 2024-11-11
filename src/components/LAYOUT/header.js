import { NavLink, useNavigate } from "react-router-dom";
import classes from "./header.module.css";
import { useDispatch, useSelector } from "react-redux";
import cartIcon from "../../cart.png";
import { authActions } from "../../reduxStore/authSlice";

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
      <h1>Amrtz Shop</h1>
      <div className={classes.links} style={{ marginRight: "40px" }}>
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
      <div className={classes.buttonDiv}>
        {auth.isLoggedIn && (
          <button
            className={classes.cartButton}
            onClick={() => navigate("cart")}
          >
            <img
              style={{
                height: "3rem",
                width: "3rem",
                mixBlendMode: "color-burn",
              }}
              src={cartIcon}
              alt="error"
            />
          </button>
        )}

        {auth.isLoggedIn && (
          <button onClick={logoutHandler} className={classes.logout}>
            logout
          </button>
        )}
        {!auth.isLoggedIn && (
          <button onClick={() => navigate("/auth")} className={classes.login}>
            Sign in
          </button>
        )}
      </div>
    </div>
  );
};

export default Header;

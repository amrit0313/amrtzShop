import { NavLink, useNavigate } from "react-router-dom";
import classes from "./header.module.css";
import cartIcon from "../CART/carticon.png";
import { useSelector } from "react-redux";

const Header = () => {
  const cart = useSelector((state) => state.cart);
  const auth = useSelector((state) => state.auth);
  const navigate = useNavigate();
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
            <div>
              <img src={cartIcon} alt="error" />
              <p>Cart</p>
              <p>{cart.totalQuantity}</p>
            </div>
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

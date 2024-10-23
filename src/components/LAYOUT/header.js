import { NavLink, useNavigate } from "react-router-dom";
import classes from "./header.module.css";
import cartIcon from "../CART/carticon.png";
import { useSelector } from "react-redux";

const Header = () => {
  const cart = useSelector((state) => state.cart);
  const navigate = useNavigate();
  return (
    <div className={classes.header}>
      <h1 style={{ color: "yellow", margin: "50px" }}>Amrtz Shop</h1>
      {/* </div> */}
      <div style={{ marginRight: "40px" }}>
        <NavLink
          to="clothes"
          className={({ isActive }) => (isActive ? classes.active : "")}
        >
          Clothes
        </NavLink>
        <NavLink
          to="shoes"
          className={({ isActive }) => (isActive ? classes.active : "")}
        >
          Shoes
        </NavLink>
        <NavLink
          to="products"
          className={({ isActive }) => (isActive ? classes.active : "")}
        >
          Skin/Hair
        </NavLink>
      </div>
      <button onClick={() => navigate("cart")}>
        <div className={classes.buttonDiv}>
          <img
            style={{
              height: "30px",
              width: "35px",
              margin: "auto",
              marginRight: "20px",
              mixBlendMode: "color-burn",
            }}
            src={cartIcon}
            alt="error"
          />
          <p>Cart</p>
          <p
            style={{
              marginLeft: "20px",
              backgroundColor: "brown",
              padding: "7px 20px",
              borderRadius: "20px",
            }}
          >
            {cart.totalQuantity}
          </p>
        </div>
      </button>
    </div>
  );
};

export default Header;

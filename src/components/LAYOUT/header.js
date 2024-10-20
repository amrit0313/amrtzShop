import { NavLink } from "react-router-dom";
import classes from "./header.module.css";

const Header = () => {
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
    </div>
  );
};

export default Header;

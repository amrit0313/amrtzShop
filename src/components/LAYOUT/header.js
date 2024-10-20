import classes from "./header.module.css";
import loGo from "../../loGo.png";

const Header = () => {
  return (
    <div className={classes.header}>
      {/* <div style={{ color: "yellow", marginLeft: "40px" }}> */}
      <h1 style={{ color: "yellow", margin: "50px" }}>Amrtz Shop</h1>
      {/* <img className={classes.image} src={loGo} alt="no" /> */}
      {/* </div> */}
      <div style={{ marginRight: "40px" }}>
        <a href="###">Clothes</a>
        <a href="###">Shoes</a>
        <a href="###">Skin/Hair</a>
      </div>
    </div>
  );
};

export default Header;

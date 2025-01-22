import { useSelector } from "react-redux";
import classes from "./home.module.css";
import { homeImages } from "../assets/assets";

const Home = () => {
  const auth = useSelector((state) => state.auth);
  return (
    <div className={auth.isLoggedIn ? classes.home : classes.homebefore}>
      <div className={classes.logos}>
        {!auth.isLoggedIn && (
          <p className={classes.text}>
            Sign In and enjoy the best shopping experience!
          </p>
        )}
        {!auth.isLoggedIn && (
          <p className={classes.text}>
            Click the Sign In option..
          </p>
        )}
        {auth.isLoggedIn && <p className={classes.text}>Hey! welcome</p>}
        {auth.isLoggedIn && (
          <p className={classes.text}>Let's find some amazing stuff</p>
        )}
      </div>
      <div className={classes.imageContainer}>
        {homeImages.map((items) => (
          <div key={`m${items.id}`} className={classes.imgdiv}>
            <img key={items.id} src={items.image} alt="error" />
          </div>
        ))}
      </div>
      <div className={classes.belowDetail}>
        <p>Made By Amrit</p>
      </div>
    </div>
  );
};

export default Home;

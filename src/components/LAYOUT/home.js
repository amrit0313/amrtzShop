import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import classes from "./home.module.css";
import { homeImages } from "../assets/assets";

const Home = ({ onLoginRequest }) => {
  const auth = useSelector((state) => state.auth);
  const navigate = useNavigate();

  const redirectToRandomRoute = () => {
    const routes = ["clothes", "shoes", "cosmetics", "cart"];
    const randomRoute = routes[Math.floor(Math.random() * routes.length)];
    navigate(`/${randomRoute}`);
  };

  const redirecToCart = () => {
    if (!auth.isLoggedIn) {
      onLoginRequest?.();
      return;
    }
    navigate("/cart");
  };

  const handleCtaClick = () => {
    if (!auth.isLoggedIn) {
      onLoginRequest?.();
      return;
    }
    redirectToRandomRoute();
  };
  return (
    <div className={auth.isLoggedIn ? classes.home : classes.homebefore}>
      <div className={classes.logos}>
        <span className={classes.eyebrow}>AmrtzShop</span>
        {!auth.isLoggedIn && (
          <p className={classes.heroTitle}>Shop the future</p>
        )}
        {!auth.isLoggedIn && (
          <p className={classes.heroSub}>
            Curated drops, precision styling, and next-level essentials designed
            to move with you.
          </p>
        )}
        {auth.isLoggedIn && <p className={classes.heroTitle}>Welcome back</p>}
        {auth.isLoggedIn && (
          <p className={classes.heroSub}>
            Your premium picks are ready. New arrivals and bold staples are
            waiting.
          </p>
        )}
        <div className={classes.ctaRow}>
          <button className={classes.primaryCta} onClick={handleCtaClick}>
            Explore now
          </button>
          <button className={classes.ghostCta} onClick={redirecToCart}>
            View your collections
          </button>
        </div>
        <div className={classes.metaRow}>
          <div className={classes.metaCard}>
            <span className={classes.metaLabel}>24h</span>
            <span className={classes.metaValue}>Drop windows</span>
            <span style={{ color: "gray", fontSize: "16x" }}>Oh yeah!</span>
          </div>
          <div className={classes.metaCard}>
            <span className={classes.metaLabel}>120+</span>
            <span className={classes.metaValue}>Premium picks</span>
            <span style={{ color: "gray", fontSize: "16x" }}>
              You'll love it{" "}
            </span>
          </div>
          <div className={classes.metaCard}>
            <span className={classes.metaLabel}>4.9</span>
            <span className={classes.metaValue}>Client rating</span>
            <span style={{ color: "gray", fontSize: "16x" }}>
              You'll be the next on to review good
            </span>
          </div>
        </div>
      </div>
      <div className={classes.galleryPanel}>
        <div className={classes.panelHeader}>
          <p className={classes.panelTitle}>Featured drops</p>
        </div>
        <div className={classes.imageContainer}>
          {homeImages.map((items) => (
            <div key={`m${items.id}`} className={classes.imgdiv}>
              <img key={items.id} src={items.image} alt="featured" />
            </div>
          ))}
        </div>
      </div>
      <div className={classes.belowDetail}>
        <p>Crafted by Amrit</p>
      </div>
    </div>
  );
};

export default Home;

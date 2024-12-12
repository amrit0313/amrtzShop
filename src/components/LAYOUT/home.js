import { useSelector } from "react-redux";
import classes from "./home.module.css";

const Home = () => {
  const auth = useSelector((state) => state.auth);
  const IMG_DATA = [
    {
      id: "p1",
      image:
        "https://images.unsplash.com/photo-1720514496239-33f761f171d2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTYwfHxzaGlydHxlbnwwfHwwfHx8MA%3D%3D",

      price: "18000",
    },
    {
      id: "p2",
      image:
        "https://t4.ftcdn.net/jpg/04/39/60/05/240_F_439600528_2FWTMQDiXYv6T0qolS57KSxiNbqlhDTa.jpg",

      price: "14000",
    },
    {
      id: "p3",
      image:
        "https://images.pexels.com/photos/27363151/pexels-photo-27363151/free-photo-of-woman-hand-holding-vial-of-body-lotion.jpeg?auto=compress&cs=tinysrgb&w=600",
      price: "12000",
    },
  ];
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
            Click the Sign In option on the top right..
          </p>
        )}
        {auth.isLoggedIn && <p className={classes.text}>Hey! welcome</p>}
        {auth.isLoggedIn && (
          <p className={classes.text}>Let's find some amazing stuff</p>
        )}
      </div>
      <div className={classes.imageContainer}>
        {IMG_DATA.map((items) => (
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

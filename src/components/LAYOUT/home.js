import { useSelector } from "react-redux";
import classes from "./home.module.css";

const Home = () => {
  const auth = useSelector((state) => state.auth);
  const IMG_DATA = [
    {
      id: "p1",
      image:
        "https://images.unsplash.com/photo-1499971856191-1a420a42b498?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTI2fHxjbG90aGluZ3xlbnwwfHwwfHx8MA%3D%3D",
      price: "18000",
    },
    {
      id: "p2",
      image:
        "https://images.pexels.com/photos/1032110/pexels-photo-1032110.jpeg?auto=compress&cs=tinysrgb&w=600",

      price: "14000",
    },
    {
      id: "p3",
      image:
        "https://images.pexels.com/photos/3993398/pexels-photo-3993398.jpeg?auto=compress&cs=tinysrgb&w=600",
      price: "12000",
    },
  ];
  return (
    <div className={classes.home}>
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
            <p key={`d${items.id}`}>Price: RS {items.price}</p>
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

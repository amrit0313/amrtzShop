import classes from "./home.module.css";

const Home = () => {
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
        "https://images.unsplash.com/photo-1491553895911-0055eca6402d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8c2hvZXxlbnwwfHwwfHx8MA%3D%3D",
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
        <p className={classes["transparent-text"]}>
          Hey! Let's look what we love in common
        </p>
      </div>
      <div className={classes.imageContainer}>
        {IMG_DATA.map((items) => (
          <div className={classes.imgdiv}>
            <img key={items.id} src={items.image} alt="error" />
            <div className={classes.overlayText}>Price: RS {items.price}</div>
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

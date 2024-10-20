import classes from "./cosmetics.module.css";

const COSMETICS_DATA = [
  {
    id: "s1",
    image:
      "https://images.pexels.com/photos/14798340/pexels-photo-14798340.jpeg?auto=compress&cs=tinysrgb&w=600",
    price: 9000,
  },
  {
    id: "s2",
    image:
      "https://images.pexels.com/photos/11927263/pexels-photo-11927263.png?auto=compress&cs=tinysrgb&w=600",
    price: 5000,
  },
  {
    id: "s3",
    image:
      "https://media.istockphoto.com/id/1200662015/photo/black-hair-dryer-on-a-blue-background-close-up-top-view.jpg?b=1&s=612x612&w=0&k=20&c=rZ9L1xDa6NSX2mM98ABAFAQA4psfu2cwtdWVL2z2W8U=",
    price: 8000,
  },
  {
    id: "s4",
    image:
      "https://images.pexels.com/photos/3999057/pexels-photo-3999057.jpeg?auto=compress&cs=tinysrgb&w=600",
    price: 10000,
  },
  {
    id: "s5",
    image:
      "https://images.pexels.com/photos/27363151/pexels-photo-27363151/free-photo-of-woman-hand-holding-vial-of-body-lotion.jpeg?auto=compress&cs=tinysrgb&w=600",
    price: 7000,
  },
  {
    id: "s6",
    image:
      "https://images.pexels.com/photos/4465124/pexels-photo-4465124.jpeg?auto=compress&cs=tinysrgb&w=600",
    price: 12000,
  },
  {
    id: "s7",
    image:
      "https://images.pexels.com/photos/4041392/pexels-photo-4041392.jpeg?auto=compress&cs=tinysrgb&w=600",
    price: 4000,
  },
  {
    id: "s8",
    image:
      "https://images.pexels.com/photos/5797999/pexels-photo-5797999.jpeg?auto=compress&cs=tinysrgb&w=600",
    price: 13000,
  },
  {
    id: "s9",
    image:
      "https://images.unsplash.com/photo-1598662957563-ee4965d4d72c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8c3Vuc2NyZWVuc3xlbnwwfHwwfHx8MA%3D%3D",
    price: 9000,
  },
  {
    id: "s10",
    image:
      "https://images.unsplash.com/photo-1698912269897-c9325da81afc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHN1bnNjcmVlbnN8ZW58MHx8MHx8fDA%3D",
    price: 4000,
  },
  {
    id: "s11",
    image:
      "https://images.unsplash.com/photo-1673350963902-2a8366b3d4ca?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aGFpciUyMHdheHxlbnwwfHwwfHx8MA%3D%3D",
    price: 7000,
  },
  {
    id: "s12",
    image:
      "https://images.unsplash.com/photo-1653919198052-546d44e2458e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZmFjZSUyMHdhc2h8ZW58MHx8MHx8fDA%3D",
    price: 4000,
  },
];

const CosmeticStore = () => {
  return (
    <div className={classes.mainDiv}>
      {COSMETICS_DATA.map((items) => (
        <div key={`d${items.id}`} className={classes.itemWrapper}>
          <img key={items.id} src={items.image} alt="error" />
          <div key={`f${items.id}`} className={classes.options}>
            <p key={`a${items.id}`}>{`RS: ${items.price}`}</p>
            <button className={classes.buy}>Buy</button>
            <button className={classes.cart}>Cart</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CosmeticStore;

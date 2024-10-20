import classes from "./shoeStore.module.css";

const SHOES_DATA = [
  {
    id: "s1",
    image:
      "https://images.pexels.com/photos/1598505/pexels-photo-1598505.jpeg?auto=compress&cs=tinysrgb&w=600",
    price: 9000,
  },
  {
    id: "s2",
    image:
      "https://images.pexels.com/photos/1240892/pexels-photo-1240892.jpeg?auto=compress&cs=tinysrgb&w=600",
    price: 5000,
  },
  {
    id: "s3",
    image:
      "https://media.istockphoto.com/id/1339440288/photo/white-sneakers-shoes-and-girl%C3%A2s-legs-on-nude-background-casual-footwear.jpg?b=1&s=612x612&w=0&k=20&c=MhjinzpdRp_8sk5rItsuCXnuw3UaGgQD4aUSGLuJzy0=",
    price: 8000,
  },
  {
    id: "s4",
    image:
      "https://media.istockphoto.com/id/187310279/photo/brown-leather-shoe.jpg?b=1&s=612x612&w=0&k=20&c=JF_TUO7r6ksoUIDt_CsulVQ9HlUEpCsRnIn0t-6L7oA=",
    price: 10000,
  },
  {
    id: "s5",
    image:
      "https://images.pexels.com/photos/1478442/pexels-photo-1478442.jpeg?auto=compress&cs=tinysrgb&w=600",
    price: 7000,
  },
  {
    id: "s6",
    image:
      "https://images.pexels.com/photos/718981/pexels-photo-718981.jpeg?auto=compress&cs=tinysrgb&w=600",
    price: 12000,
  },
  {
    id: "s7",
    image:
      "https://images.pexels.com/photos/1598508/pexels-photo-1598508.jpeg?auto=compress&cs=tinysrgb&w=600",
    price: 4000,
  },
  {
    id: "s8",
    image:
      "https://images.pexels.com/photos/1123985/pexels-photo-1123985.jpeg?auto=compress&cs=tinysrgb&w=600",
    price: 13000,
  },
  {
    id: "s9",
    image:
      "https://images.pexels.com/photos/1302321/pexels-photo-1302321.jpeg?auto=compress&cs=tinysrgb&w=600",
    price: 9000,
  },
  {
    id: "s10",
    image:
      "https://images.pexels.com/photos/1503009/pexels-photo-1503009.jpeg?auto=compress&cs=tinysrgb&w=600",
    price: 4000,
  },
  {
    id: "s11",
    image:
      "https://images.pexels.com/photos/1122605/pexels-photo-1122605.jpeg?auto=compress&cs=tinysrgb&w=600",
    price: 7000,
  },
  {
    id: "s12",
    image:
      "https://images.pexels.com/photos/3782789/pexels-photo-3782789.jpeg?auto=compress&cs=tinysrgb&w=600",
    price: 4000,
  },
];

const ShoesStore = () => {
  return (
    <div className={classes.mainDiv}>
      {SHOES_DATA.map((items) => (
        <div key={`d${items.id}`} className={classes.itemWrapper}>
          <img key={items.id} src={items.image} alt="error" />
          <p key={`a${items.id}`}>price: {`RS ${items.price}`}</p>
        </div>
      ))}
    </div>
  );
};

export default ShoesStore;

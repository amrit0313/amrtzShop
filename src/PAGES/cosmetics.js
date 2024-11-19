import ProductItems from "../components/PRODUCTS/productItems";

const COSMETICS_DATA = [
  {
    id: "m1",
    image:
      "https://images.pexels.com/photos/14798340/pexels-photo-14798340.jpeg?auto=compress&cs=tinysrgb&w=600",
    price: 9000,
  },
  {
    id: "m2",
    image:
      "https://images.pexels.com/photos/11927263/pexels-photo-11927263.png?auto=compress&cs=tinysrgb&w=600",
    price: 5000,
  },
  {
    id: "m3",
    image:
      "https://media.istockphoto.com/id/1200662015/photo/black-hair-dryer-on-a-blue-background-close-up-top-view.jpg?b=1&s=612x612&w=0&k=20&c=rZ9L1xDa6NSX2mM98ABAFAQA4psfu2cwtdWVL2z2W8U=",
    price: 8000,
  },
  {
    id: "m4",
    image:
      "https://images.pexels.com/photos/3999057/pexels-photo-3999057.jpeg?auto=compress&cs=tinysrgb&w=600",
    price: 10000,
  },
  {
    id: "m5",
    image:
      "https://images.pexels.com/photos/27363151/pexels-photo-27363151/free-photo-of-woman-hand-holding-vial-of-body-lotion.jpeg?auto=compress&cs=tinysrgb&w=600",
    price: 7000,
  },
  {
    id: "m6",
    image:
      "https://images.pexels.com/photos/4465124/pexels-photo-4465124.jpeg?auto=compress&cs=tinysrgb&w=600",
    price: 12000,
  },
  {
    id: "m7",
    image:
      "https://images.pexels.com/photos/4041392/pexels-photo-4041392.jpeg?auto=compress&cs=tinysrgb&w=600",
    price: 4000,
  },
  {
    id: "m8",
    image:
      "https://images.pexels.com/photos/5797999/pexels-photo-5797999.jpeg?auto=compress&cs=tinysrgb&w=600",
    price: 13000,
  },
  {
    id: "m9",
    image:
      "https://images.unsplash.com/photo-1598662957563-ee4965d4d72c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8c3Vuc2NyZWVuc3xlbnwwfHwwfHx8MA%3D%3D",
    price: 9000,
  },
  {
    id: "m10",
    image:
      "https://images.unsplash.com/photo-1698912269897-c9325da81afc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHN1bnNjcmVlbnN8ZW58MHx8MHx8fDA%3D",
    price: 4000,
  },
  {
    id: "m11",
    image:
      "https://images.unsplash.com/photo-1673350963902-2a8366b3d4ca?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aGFpciUyMHdheHxlbnwwfHwwfHx8MA%3D%3D",
    price: 7000,
  },
  {
    id: "m12",
    image:
      "https://images.unsplash.com/photo-1653919198052-546d44e2458e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZmFjZSUyMHdhc2h8ZW58MHx8MHx8fDA%3D",
    price: 4000,
  },
];

const CosmeticStore = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-evenly",
        flexWrap: "wrap",
        alignItems: "center",
      }}
    >
      {COSMETICS_DATA.map((items) => (
        <ProductItems
          key={items.id}
          id={items.id}
          image={items.image}
          price={items.price}
        />
      ))}
    </div>
  );
};

export default CosmeticStore;

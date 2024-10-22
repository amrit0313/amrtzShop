import ProductItems from "../components/PRODUCTS/productItems";
const CLOTH_DATA = [
  {
    id: "c1",
    image:
      "https://plus.unsplash.com/premium_photo-1678218594563-9fe0d16c6838?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c2hpcnR8ZW58MHx8MHx8fDA%3D",
    price: 6000,
  },
  {
    id: "c2",
    image:
      "https://plus.unsplash.com/premium_photo-1673356302031-86c27e061153?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8c2hpcnR8ZW58MHx8MHx8fDA%3D",
    price: 6500,
  },
  {
    id: "c3",
    image:
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8c2hpcnR8ZW58MHx8MHx8fDA%3D",
    price: 7000,
  },
  {
    id: "c4",
    image:
      "https://images.unsplash.com/photo-1595523052653-b9f497845c3d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTR8fHNoaXJ0fGVufDB8fDB8fHww",
    price: 4500,
  },
  {
    id: "c5",
    image:
      "https://plus.unsplash.com/premium_photo-1691367279376-624618a5aac9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDl8fHNoaXJ0fGVufDB8fDB8fHww",
    price: 4000,
  },
  {
    id: "c6",
    image:
      "https://images.unsplash.com/photo-1564257631407-4deb1f99d992?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHNoaXJ0fGVufDB8fDB8fHww",

    price: 4600,
  },
  {
    id: "c7",
    image:
      "https://plus.unsplash.com/premium_photo-1691367279675-0e466cfb5135?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzN8fHNoaXJ0fGVufDB8fDB8fHww",

    price: 7000,
  },
  {
    id: "c8",
    image:
      "https://images.unsplash.com/photo-1522706604291-210a56c3b376?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODJ8fHNoaXJ0fGVufDB8fDB8fHww",

    price: 5000,
  },
  {
    id: "c9",
    image:
      "https://images.unsplash.com/photo-1716541425064-b07b68f436de?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTU1fHxzaGlydHxlbnwwfHwwfHx8MA%3D%3D",

    price: 5000,
  },
  {
    id: "c10",
    image:
      "https://images.unsplash.com/photo-1716541424893-734612ddcabb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTU0fHxzaGlydHxlbnwwfHwwfHx8MA%3D%3D",

    price: 3000,
  },
  {
    id: "c11",
    image:
      "https://images.unsplash.com/photo-1720514496239-33f761f171d2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTYwfHxzaGlydHxlbnwwfHwwfHx8MA%3D%3D",

    price: 4000,
  },
  {
    id: "c12",
    image:
      "https://images.unsplash.com/photo-1720514496333-2c552e9ee5f2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTcxfHxzaGlydHxlbnwwfHwwfHx8MA%3D%3D",

    price: 1500,
  },
];

const ClothStore = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-evenly",
        flexWrap: "wrap",
        alignItems: "center",
      }}
    >
      {CLOTH_DATA.map((items) => (
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

export default ClothStore;

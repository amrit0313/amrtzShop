import { useSelector } from "react-redux";
import CartItems from "./cartItem";
import classes from "./cart.module.css";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart);
  return (
    <div className={classes.cart}>
      <div className={classes.mappedItems}>
        {cartItems.items.map((items) => (
          <CartItems
            key={items.id}
            id={items.id}
            image={items.image}
            price={items.totalPrice}
            quantity={items.quantity}
            total={items.totalPrice}
          />
        ))}
      </div>
      <div>
        <div>
          <p>{`Total Cost: RS ${cartItems.totalAmount}`}</p>
        </div>
      </div>
    </div>
  );
};

export default Cart;

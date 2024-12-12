import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import CartItems from "./cartItem";
import classes from "./cart.module.css";
const Cart = () => {
  const navigate = useNavigate();
  const cartItems = useSelector((state) => state.cart);
  return (
    <div className={classes.cart}>
      <div className={classes.topDiv}>
        <p>{`×${cartItems.totalQuantity} items`}</p>
        <p>{`Total Cost: RS ${cartItems.totalAmount}`}</p>
        <button onClick={() => navigate("/form")}>BUY</button>
      </div>
      <div className={classes.mappedItems}>
        {cartItems.items.map((items) => (
            <CartItems
              key={items.id}
              id={items.id}
              image={items.image}
              totalPrice={items.totalPrice}
              price={items.price}
              quantity={items.quantity}
              total={items.totalPrice}
            />
          ))}
      </div>
    </div>
  );
};

export default Cart;

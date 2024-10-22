import classes from "./cartItem.module.css";
// import { cartActions } from "../../reduxStore/cartSlice";

const CartItems = (props) => {
  const { quantity, image, price } = props;
  return (
    <div className={classes.cartitems}>
      <img src={image} alt="error" />
      <div>
        <p>{`×${quantity}`}</p>
        <p>{`RS: ${price}`}</p>
      </div>
    </div>
  );
};

export default CartItems;

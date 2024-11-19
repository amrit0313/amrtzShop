import { useDispatch } from "react-redux";
import classes from "./cartItem.module.css";
import { cartActions } from "../../reduxStore/cartSlice";

const CartItems = (props) => {
  const { id, quantity, image, price, totalPrice } = props;
  const dispatch = useDispatch();
  const addToCartHandler = () => {
    dispatch(cartActions.addItemToCartHandler({ id, image, price }));
  };
  const removeFromCartHandler = () => {
    dispatch(cartActions.removeItemFromCartHandler(id));
  };

  return (
    <div className={classes.cartitems}>
      <img src={image} alt="error" />
      <div>
        <div>
          <button
            className={classes.alterItems}
            onClick={removeFromCartHandler}
          >
            -
          </button>
          <p style={{ color: "yellow" }}>{`×${quantity}`}</p>
          <button className={classes.alterItems} onClick={addToCartHandler}>
            +
          </button>
        </div>
        <p className={classes.pricetag}>{`RS: ${totalPrice}`}</p>
      </div>
    </div>
  );
};

export default CartItems;

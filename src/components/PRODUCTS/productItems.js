import classes from "./productItem.module.css";
import { useDispatch } from "react-redux";
import { cartActions } from "../../reduxStore/cartSlice";

const ProductItems = (props) => {
  const dispatch = useDispatch();
  const { id, image, price } = props;
  const addToCartHandler = () => {
    dispatch(cartActions.addItemToCartHandler({ id, image, price }));
  };

  return (
    <div className={classes.maindiv}>
      <div className={classes.itemWrapper}>
        <img src={props.image} alt="error" />
        <div className={classes.options}>
          <p>{`RS: ${props.price}`}</p>
          <button onClick={addToCartHandler} className={classes.cart}>
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductItems;

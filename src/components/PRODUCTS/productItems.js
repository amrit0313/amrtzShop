import classes from "./productItem.module.css";
import { useDispatch } from "react-redux";
import { cartActions } from "../../reduxStore/cartSlice";
import { useNavigate } from "react-router-dom";

const ProductItems = (props) => {
  const navigate = useNavigate();
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
          <button onClick={() => navigate("/form")} className={classes.buy}>
            Buy
          </button>
          <button onClick={addToCartHandler} className={classes.cart}>
            Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductItems;

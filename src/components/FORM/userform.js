import { useState } from "react";
import classes from "./userForm.module.css";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { cartActions } from "../../reduxStore/cartSlice";
import { cartToCheckoutDetails } from "../../reduxStore/cartActions";
import { deleteCartDatabase } from "../../reduxStore/cartActions";

const UserForm = () => {
  const auth = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    name: "",
    number: "",
    address: "",
  });

  const [correctFormData, setCorrectFormData] = useState({
    correctName: true,
    correctNumber: true,
    correctAddress: true,
  });

  const submitHandler = async (e) => {
    e.preventDefault();
    let isValid = true;

    if (!formData.name) {
      setCorrectFormData((prev) => ({ ...prev, correctName: false }));
      isValid = false;
    } else {
      setCorrectFormData((prev) => ({ ...prev, correctName: true }));
    }

    if (formData.number.length !== 10) {
      setCorrectFormData((prev) => ({ ...prev, correctNumber: false }));
      isValid = false;
    } else {
      setCorrectFormData((prev) => ({ ...prev, correctNumber: true }));
    }

    if (!formData.address) {
      setCorrectFormData((prev) => ({ ...prev, correctAddress: false }));
      isValid = false;
    } else {
      setCorrectFormData((prev) => ({ ...prev, correctAddress: true }));
    }

    if (!isValid) {
      return;
    }
    await fetch(
      `https://amrtzshop-default-rtdb.asia-southeast1.firebasedatabase.app/${auth.user}/checkoutDetails.json`,
      {
        method: "POST",
        body: JSON.stringify({
          name: formData.name,
          number: formData.number,
          address: formData.address,
        }),
      }
    );

    dispatch(cartToCheckoutDetails());
    dispatch(deleteCartDatabase());
    dispatch(cartActions.emptyCartHandler());
    navigate("/");
  };

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <form onSubmit={submitHandler}>
      <div className={classes.formgroup}>
        <label htmlFor="name">Enter Your Name</label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Enter Your Name"
          onChange={changeHandler}
          value={formData.name}
        />
        {!correctFormData.correctName && (
          <p style={{ color: "red", fontWeight: "lighter" }}>
            Name field is required
          </p>
        )}
      </div>
      <div className={classes.formgroup}>
        <label htmlFor="name">Phone Number</label>
        <input
          type="number"
          id="number"
          name="number"
          placeholder="Enter Your Phone Number"
          onChange={changeHandler}
          value={formData.number}
        />
        {!correctFormData.correctNumber && (
          <p style={{ color: "red", fontWeight: "lighter" }}>
            Phone Number should be of 10 numbers
          </p>
        )}
      </div>
      <div className={classes.formgroup}>
        <label htmlFor="name">Enter Address</label>
        <input
          type="text"
          id="address"
          name="address"
          placeholder="Enter Your address"
          onChange={changeHandler}
          value={formData.address}
        />
        {!correctFormData.correctAddress && (
          <p style={{ color: "red", fontWeight: "lighter" }}>
            Address field is required
          </p>
        )}
      </div>
      <div className={classes.formgroup}>
        <button>Buy</button>
      </div>
    </form>
  );
};

export default UserForm;

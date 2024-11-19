import { useState } from "react";
import classes from "./userForm.module.css";
import { useSelector } from "react-redux";
const UserForm = () => {
  const auth = useSelector((state) => state.auth);
  const [formData, setFormData] = useState({
    name: "",
    number: "",
    address: "",
  });

  const submitHandler = async (e) => {
    e.preventDefault();
    console.log(formData);

    const response = await fetch(
      `https://amrtzshop-default-rtdb.asia-southeast1.firebasedatabase.app/${auth.user}/CheckoutDetails.json`,
      {
        method: "POST",
        body: JSON.stringify({
          name: formData.name,
          number: formData.number,
          address: formData.address,
        }),
      }
    );
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
      </div>
      <div className={classes.formgroup}>
        <button>Buy</button>
      </div>
    </form>
  );
};

export default UserForm;

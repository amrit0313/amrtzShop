import { cartActions } from "./cartSlice";

export const fetchcartData = () => {
  return async (dispatch, getstate) => {
    const state = getstate();
    const auth = state.auth;
    const fetchRequest = async () => {
      const response = await fetch(
        `https://amrtzshop-default-rtdb.asia-southeast1.firebasedatabase.app/${auth.user}/cart.json`
      );
      if (!response.ok) {
        throw new Error("failed");
      }
      const data = response.json();
      return data;
    };
    try {
      const cartData = await fetchRequest();
      dispatch(
        cartActions.replacecart({
          items: cartData?.items ?? [],
          totalQuantity: cartData?.totalQuantity ?? 0,
          totalAmount: cartData?.totalAmount ?? 0,
        })
      );
    } catch (error) {
      alert(error.message);
    }
  };
};

export const sendCartData = () => {
  return async (dispatch, getstate) => {
    const state = getstate();
    const auth = state.auth;
    const cart = state.cart;
    const sendRequest = async () => {
      const response = await fetch(
        `https://amrtzshop-default-rtdb.asia-southeast1.firebasedatabase.app/${auth.user}/cart.json`,
        {
          method: "PUT",
          body: JSON.stringify({
            items: cart.items,
            totalQuantity: cart.totalQuantity,
            totalAmount: cart.totalAmount,
            username: auth.email,
          }),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (!response.ok) {
        throw new Error("failed");
      }
    };
    try {
      await sendRequest();
    } catch (error) {
      alert(error.message);
    }
  };
};

export const cartToCheckoutDetails = () => {
  return async (dispatch, getstate) => {
    const state = getstate();
    const auth = state.auth;
    const cart = state.cart;
    const sendRequest = async () => {
      const response = await fetch(
        `https://amrtzshop-default-rtdb.asia-southeast1.firebasedatabase.app/${auth.user}/checkoutDetails/cart.json`,
        {
          method: "POST",
          body: JSON.stringify({
            items: cart.items,
            totalQuantity: cart.totalQuantity,
            totalAmount: cart.totalAmount,
            username: auth.email,
          }),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (!response.ok) {
        throw new Error("failed");
      }
    };
    try {
      await sendRequest();
    } catch (error) {
      alert(error.message);
    }
  };
};

export const deleteCartDatabase = () => {
  return async (dispatch, getstate) => {
    const state = getstate();
    const auth = state.auth;
    const sendRequest = async () => {
      const response = await fetch(
        `https://amrtzshop-default-rtdb.asia-southeast1.firebasedatabase.app/${auth.user}/cart.json`,
        {
          method: "PUT",
          body: JSON.stringify({
            items: [],
            totalQuantity: 0,
            totalAmount: 0,
            username: auth.email,
          }),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (!response.ok) {
        throw new Error("failed");
      }
    };
    try {
      await sendRequest();
    } catch (error) {
      alert(error.message);
    }
  };
};

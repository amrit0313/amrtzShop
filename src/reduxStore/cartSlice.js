import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    totalQuantity: 0,
    totalAmount: 0,
  },
  reducers: {
    addItemToCartHandler(state, action) {
      const newItem = action.payload;
      const existingItem = state.items.find((item) => item.id === newItem.id);
      state.totalQuantity++;

      if (!existingItem) {
        state.items.push({
          id: newItem.id,
          image: newItem.image,
          totalPrice: newItem.price,
          price: newItem.price,
          quantity: 1,
        });
        state.totalAmount += newItem.price;
      } else {
        existingItem.quantity++;
        state.totalAmount += newItem.price;
        existingItem.totalPrice += newItem.price;
        state.price = newItem.price;
      }
      // console.log(
      //   "Updated state.items:",
      //   JSON.parse(JSON.stringify(state.items))
      // );
      // console.log(state.totalAmount);
    },
    removeItemFromCartHandler(state, action) {
      const id = action.payload;
      const selectedItem = state.items.find((item) => item.id === id);
      if (selectedItem.quantity === 1) {
        state.items = state.items.filter((item) => item.id !== id);
      } else {
        selectedItem.quantity--;
        selectedItem.totalPrice -= selectedItem.price;
      }
      state.totalAmount -= selectedItem.price;
      state.totalQuantity--;
    },
  },
});

export const cartActions = cartSlice.actions;
export default cartSlice;

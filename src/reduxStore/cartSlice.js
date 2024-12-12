import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    totalQuantity: 0,
    totalAmount: 0,
    changed: false,
  },
  reducers: {
    replacecart(state, action) {
      state.items = action.payload.items ?? [];
      state.totalQuantity = action.payload.totalQuantity;
      state.totalAmount = action.payload.totalAmount;
    },
    addItemToCartHandler(state, action) {
      const newItem = action.payload;
      const existingItem = state.items.find((item) => item.id === newItem.id);
      state.totalQuantity++;
      state.changed = true;

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
    },
    removeItemFromCartHandler(state, action) {
      state.changed = true;
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
    emptyCartHandler(state) {
      state.items = [];
      state.totalQuantity = 0;
      state.totalAmount = 0;
      state.changed = false;
    },
  },
});

export const cartActions = cartSlice.actions;
export default cartSlice;

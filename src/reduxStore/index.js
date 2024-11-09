import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";
import AuthSlice from "./authSlice";
const store = configureStore({
  reducer: {
    cart: cartSlice.reducer,
    auth: AuthSlice.reducer,
  },
});

export default store;

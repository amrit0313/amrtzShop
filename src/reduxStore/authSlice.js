import { createSlice } from "@reduxjs/toolkit";

const AuthSlice = createSlice({
  name: "auth",
  initialState: {
    isLoggedIn: false,
    token: null,
    loading: false,
    error: null,
    user: null,
  },
  reducers: {
    loginStart(state) {
      state.loading = true;
      state.error = null;
    },
    loginSucesss(state, action) {
      localStorage.setItem("token", action.payload.idToken);
      localStorage.setItem("user", action.payload.email);
      state.loading = false;
      state.isLoggedIn = true;
      state.token = action.payload.idToken;
      state.user = action.payload.email;
    },
    loginFailure(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
    logout(state) {
      state.isLoggedIn = false;
      state.user = null;
    },
  },
});
export const authActions = AuthSlice.actions;
export default AuthSlice;

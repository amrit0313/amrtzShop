import Home from "./components/LAYOUT/home";
import "./App.css";
import Header from "./components/LAYOUT/header";
import ClothStore from "./PAGES/clothStore";
import { Route, Routes, Navigate } from "react-router-dom";
import ShoesStore from "./PAGES/shoeStore";
import CosmeticStore from "./PAGES/cosmetics";
import Cart from "./components/CART/cart";
import UserForm from "./components/FORM/userform";
import AuthForm from "./components/FORM/authForm";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchcartData, sendCartData } from "./reduxStore/cartActions";

let isInitial = true;
function App() {
  const auth = useSelector((state) => state.auth);
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    if (auth.isLoggedIn) {
      dispatch(fetchcartData());
    }
  }, [dispatch, auth.isLoggedIn]);

  useEffect(() => {
    if (isInitial) {
      isInitial = false;
      return;
    }
    if (cart.changed) {
      dispatch(sendCartData(cart));
    }
  }, [dispatch, cart]);

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="" element={<Home />} />
        {!auth.isLoggedIn && <Route path="auth" element={<AuthForm />} />}
        {auth.isLoggedIn && <Route path="clothes" element={<ClothStore />} />}
        {auth.isLoggedIn && <Route path="shoes" element={<ShoesStore />} />}
        {auth.isLoggedIn && (
          <Route path="products" element={<CosmeticStore />} />
        )}
        <Route path="cart" element={<Cart />} />
        <Route path="form" element={<UserForm />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </div>
  );
}

export default App;

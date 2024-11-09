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
import { useSelector } from "react-redux";

function App() {
  const auth = useSelector((state) => state.auth);
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

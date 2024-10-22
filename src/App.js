import Home from "./components/LAYOUT/home";
import "./App.css";
import Header from "./components/LAYOUT/header";
import ClothStore from "./PAGES/clothStore";
import { Route, Routes } from "react-router-dom";
import ShoesStore from "./PAGES/shoeStore";
import CosmeticStore from "./PAGES/cosmetics";
import Cart from "./components/CART/cart";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="" element={<Home />} />
        <Route path="clothes" element={<ClothStore />} />
        <Route path="shoes" element={<ShoesStore />} />
        <Route path="products" element={<CosmeticStore />} />
        <Route path="cart" element={<Cart />} />
      </Routes>
    </div>
  );
}

export default App;

import React from "react";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Shop from "./pages/Shop";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ShopCategory from "./pages/ShopCategory";
import Product from "./pages/Product";
import Cart from "./pages/Cart";
import LoginSignup from "./pages/LoginSingup";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Shop />} />
          <Route path="/Mens" element={<ShopCategory Category="Mens" />} />
          <Route path="/Women" element={<ShopCategory Category="Women" />} />
          <Route path="/Kids" element={<ShopCategory Category="Kids" />} />
          <Route path="/Product" element={<Product />}>
            <Route path=":ProductId" element={<Product />} />
          </Route>
          <Route path="/Cart" element={<Cart />} />
          <Route path="/Login" element={<LoginSignup />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

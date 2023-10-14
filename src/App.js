import React from "react";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Shop from "./pages/Shop";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ShopCategory from "./pages/ShopCategory";
import Product from "./pages/Product";
import Cart from "./pages/Cart";
import LoginSignup from "./pages/LoginSingup";
import Footer from "./components/footer/Footer";
import mens_banner from "./components/assets/banner_mens.png";
import women_banner from "./components/assets/banner_women.png";
import kids_banner from "./components/assets/banner_kids.png";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Shop />} />
          <Route
            path="/Mens"
            element={<ShopCategory banner={mens_banner} Category="Mens" />}
          />
          <Route
            path="/Women"
            element={<ShopCategory banner={women_banner} Category="Women" />}
          />
          <Route
            path="/Kids"
            element={<ShopCategory banner={kids_banner} Category="Kids" />}
          />
          <Route path="/Product" element={<Product />}>
            <Route path=":ProductId" element={<Product />} />
          </Route>
          <Route path="/Cart" element={<Cart />} />
          <Route path="/Login" element={<LoginSignup />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;

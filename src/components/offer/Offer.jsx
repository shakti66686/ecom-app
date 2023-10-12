import React from "react";
import exclusive_image from "../assets/exclusive_image.png";
import "../offer/offer.css";

const Offer = () => {
  return (
    <div className="offer">
      <div className="offers-left">
        <h1>Exclusive</h1>
        <h1>Offers for you</h1>
        <p>ONLY ON BEST SELLERS PRODUCTS</p>
        <button>Cheak Now</button>
      </div>
      <div className="offers-right">
        <img src={exclusive_image} alt="" />
      </div>
    </div>
  );
};

export default Offer;

import React from "react";
import Hero from "../components/hero/Hero";
import Popular from "../components/popular/Popular";
import Offer from "../components/offer/Offer";
import NewCollection from "../components/newcollection/NewCollection";

const Shop = () => {
  return (
    <div>
      <Hero />
      <Popular />
      <Offer />
      <NewCollection />
    </div>
  );
};

export default Shop;

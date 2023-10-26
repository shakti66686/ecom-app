import React, { useContext } from "react";
import "./css/shopCategory.css";
import { shopContext } from "../context/ShopContext";
import dropdown from "../components/assets/dropdown_icon.png";
import Item from "../components/item/Item";

const ShopCategory = (props) => {
  const { all_product } = useContext(shopContext);
  return (
    <div className="ShopCategory">
      <img src={props.banner} alt="" className="banner-img" />
      <div className="shopCategory-indexShort">
        <p>
          <span>showing 1-12</span>out of 36 products
        </p>
        <div className="shopCategory-short">
          short by <img src={dropdown} alt="" />
        </div>
      </div>
      <div className="shopCategory-product">
        {all_product.map((item, i) => {
          if (props.category === item.category) {
            return (
              <Item
                key={i}
                id={item.id}
                name={item.name}
                image={item.image}
                new_price={item.new_price}
                old_price={item.old_price}
              />
            );
          }
        })}
      </div>
      <div className="shopCategory-loadMore">Explore more</div>
    </div>
  );
};

export default ShopCategory;

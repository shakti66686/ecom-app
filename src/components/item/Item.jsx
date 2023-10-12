import React from "react";
import "../item/item.css";

const Item = (props) => {
  return (
    <div className="item">
      <img src={props.image} alt="" />
      <p>{props.name}</p>
      <div className="item-prices">
        <div className="new-item-price">${props.new_price}</div>
        <div className="old-item-price">${props.old_price}</div>
      </div>
    </div>
  );
};

export default Item;

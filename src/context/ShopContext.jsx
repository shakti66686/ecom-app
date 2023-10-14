import React, { createContext } from "react";
import all_product from "../components/assets/all_product";

export const shopContext = createContext(null);

export const ShopContextProvider = (props) => {
  const contextValue = { all_product };
  return (
    <shopContext.Provider value={contextValue}>
      <>{props.children}</>
    </shopContext.Provider>
  );
};
export default ShopContextProvider;

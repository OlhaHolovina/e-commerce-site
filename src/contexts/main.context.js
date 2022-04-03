import React from "react";

const MainContext = React.createContext({
  user: null,
  updateUser: () => {},
  products: [],
  shoppingCart: [],
  updateShoppingCart: () => {},
});

export default MainContext;

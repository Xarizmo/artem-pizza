import React, { createContext, useContext, useState } from "react";

const OrderContext = createContext(null);

export const OrderProvider = ({ children }) => {
  const [pizza, setPizza] = useState();
  const [order, setOrder] = useState();

  return (
    <OrderContext.Provider value={{ pizza, setPizza, order, setOrder }}>
      {children}
    </OrderContext.Provider>
  );
};

export const useOrder = () => useContext(OrderContext);

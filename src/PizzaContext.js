import React, { createContext, useContext, useState } from "react";

const PizzaContext = createContext(null);

export const PizzaProvider = ({ children }) => {
  const [pizza, setPizza] = useState();

  return (
    <PizzaContext.Provider value={{ pizza, setPizza }}>
      {children}
    </PizzaContext.Provider>
  );
};

export const usePizza = () => useContext(PizzaContext);
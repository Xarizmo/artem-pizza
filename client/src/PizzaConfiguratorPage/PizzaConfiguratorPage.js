import React from "react";
import { useOrder } from "../OrderContext";
import { PizzaForm } from "./PizzaForm";
import { useHistory } from "react-router-dom";

export const PizzaConfiguratorPage = ({ _usePizzaHook = useOrder }) => {
  const { setPizza } = _usePizzaHook();
  const history = useHistory();

  const onPizzaChange = (pizza) => {
    setPizza(pizza);
    history.push("/checkout");
  };

  return (
    <>
      <PizzaForm onPizzaSubmit={onPizzaChange} />
    </>
  );
};

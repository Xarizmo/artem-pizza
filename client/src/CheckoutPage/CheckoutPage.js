import React from "react";
import { Link, useHistory, Redirect } from "react-router-dom";
import { PizzaSummary } from "../sharedComponents/PizzaSummary/PizzaSummary";
import { CheckoutForm } from "./CheckoutForm";
import { useOrder } from "../OrderContext";
import { PizzaPreview } from "../sharedComponents/PizzaPreview/PizzaPreview";

export const CheckoutPage = () => {
  const { pizza, setOrder } = useOrder();
  const history = useHistory();

  if (!pizza) {
    return <Redirect to="/" />;
  }

  const onOrderChange = (data) => {
    setOrder(data);
    history.push("/order");
  };

  return (
    <>
      <Link to="/">Вернуться на главную</Link>
      <PizzaPreview ingredients={pizza} />
      <PizzaSummary ingredients={pizza} />
      <CheckoutForm onOrderSubmit={onOrderChange} />
    </>
  );
};

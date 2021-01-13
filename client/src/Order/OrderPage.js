import React from "react";
import { PizzaSummary } from "../sharedComponents/PizzaSummary/PizzaSummary";
import { useOrder } from "../OrderContext";
import { Link } from "react-router-dom";

export const OrderPage = () => {
  const { pizza } = useOrder();

  const orderNumber = 1;
  const date = new Date();
  const orderStatus = "В работе";

  return (
    <>
      <p>Спасибо за заказ! Ожидайте вашу пиццу уже через час</p>
      <p>
        Заказ {orderNumber} · {date.toLocaleString("ru-Ru")} · {orderStatus}
      </p>
      <PizzaSummary ingredients={pizza} />

      <Link to="/orders">На страницу "Заказы"</Link>
    </>
  );
};

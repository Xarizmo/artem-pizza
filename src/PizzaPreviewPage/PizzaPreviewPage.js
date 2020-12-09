import React from "react";
import { PizzaPreview } from "./PizzaPreview";
import { Link, Redirect } from "react-router-dom";
import { usePizza } from "../PizzaContext";

export const PizzaPreviewPage = () => {
  const { pizza } = usePizza();

  if (!pizza) {
    return <Redirect to="/" />;
  }

  return (
    <>
      <h2>Пицца "Маргарита"</h2>
      <PizzaPreview pizza={pizza} />
      <label>
        <p>Адрес доставки</p>
        <p><input type="text" placeholder="введите адрес" /></p>
      </label>
      <label>
        <p>Данные для оплаты</p>
        <p><input type="text" placeholder="введите номер карты" /></p>
      </label>
      <hr />
      <Link to="/checkout">Перейти к оплате</Link>
    </>
  );
};
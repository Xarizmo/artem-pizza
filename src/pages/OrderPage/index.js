import React from "react";

export const OrderPage = ({ orderOptions, totalPrice }) => {
  const { size, dough, sauce, extra } = orderOptions;
  
  return (
    <div>
      <h1>Оформление заказа</h1>
      <p>Ваша пицца "Маргарита"</p>
      <p>
        Размер: {size}. Тесто: {dough}. Coyc:{sauce}
      </p>
      <p>Дополнительные ингридиенты:</p>
      <ul>
        {extra.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      Стоимость: {totalPrice} руб.
    </div>
  );
};
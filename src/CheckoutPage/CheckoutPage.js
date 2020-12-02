import React from 'react';
import { Link } from 'react-router-dom';

export const CheckoutPage = () => {
  return (
    <>
      <h1>Оплата пиццы</h1>
      <hr/>
      <Link to="/">Вернуться на главную</Link>
    </>
  );
}
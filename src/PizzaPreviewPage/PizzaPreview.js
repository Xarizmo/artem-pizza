import React from "react";
import {
  SIZES,
  DOUGH,
  SAUCES,
  CHEESES,
  VEGETABLES,
  TOPPINGS,
} from "../utils/pizzaData";

export const PizzaPreview = ({ pizza }) => {
  const { size, dough, sauce, cheeses, vegetables, toppings } = pizza;
  const sizePlusDough = `${SIZES[size].name} на ${
    DOUGH[dough].name === "Тонкое" ? "тонком" : "толстом"
  } тесте · `;
  const sauceOrder = `${SAUCES[sauce].name} соус`;
  const cheesesOrder = ` · ${cheeses.map((c) => CHEESES[c].name).join(" · ")}`;
  const vegetablesOrder = ` · ${vegetables.map((v) => VEGETABLES[v].name).join(" · ")}`;
  const toppingsOrder = ` · ${toppings.map((t) => TOPPINGS[t].name).join(" · ")}`;

  return (
    <>
      <p>
        {sizePlusDough}
        {sauceOrder}
        {cheesesOrder}
        {vegetablesOrder}
        {toppingsOrder}
      </p>
    </>
  );
};

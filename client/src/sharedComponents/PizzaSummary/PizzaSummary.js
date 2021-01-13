import React from "react";
import {
  SIZES,
  DOUGH,
  SAUCES,
  CHEESES,
  VEGETABLES,
  TOPPINGS,
} from "../../utils/pizzaData";
import styles from "./PizzaSummary.module.scss";

export const PizzaSummary = ({ ingredients }) => {
  const { size, dough, sauce, cheeses, vegetables, toppings } = ingredients;

  const sizeOrder = SIZES[size].name;
  const doughOrder = DOUGH[dough].name;
  const sauceOrder = SAUCES[sauce].name;
  const cheesesOrder = cheeses.map((c) => CHEESES[c].name);
  const vegetablesOrder = vegetables.map((v) => VEGETABLES[v].name);
  const toppingsOrder = toppings.map((t) => TOPPINGS[t].name);

  const mainIngredientsOrder = `${sizeOrder}, ${doughOrder} тесто, ${sauceOrder} соус.`;
  const extraIngredientsOrder = [
    ...cheesesOrder,
    ...vegetablesOrder,
    ...toppingsOrder,
  ].join(" · ");

  return (
    <div className={styles.root}>
      <p>{mainIngredientsOrder}</p>
      <p>{extraIngredientsOrder}</p>
    </div>
  );
};

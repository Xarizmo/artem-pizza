import {
  SIZES,
  DOUGH,
  SAUCES,
  CHEESES,
  VEGETABLES,
  TOPPINGS,
} from "./pizzaData";

export const calculatePrice = ({
  size,
  dough,
  sauce,
  cheeses,
  vegetables,
  toppings,
}) => {
  const sizePrice = SIZES[size].price;
  const doughPrice = DOUGH[dough].price;
  const saucePrice = SAUCES[sauce].price;
  const cheesesPrice = cheeses.reduce(
    (price, cheese) => price + CHEESES[cheese].price,
    0
  );
  const vegetablesPrice = vegetables.reduce(
    (price, vegetable) => price + VEGETABLES[vegetable].price,
    0
  );
  const toppingsPrice = toppings.reduce(
    (price, topping) => price + TOPPINGS[topping].price,
    0
  );

  return (
    200 +
    sizePrice +
    doughPrice +
    saucePrice +
    cheesesPrice +
    vegetablesPrice +
    toppingsPrice
  );
};

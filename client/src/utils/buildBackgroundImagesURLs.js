import { DOUGH, CHEESES, VEGETABLES, TOPPINGS } from "./pizzaData";

export const buildBackgroundImagesURLs = ({
  dough,
  cheeses,
  vegetables,
  toppings,
}) => {
  const doughUrl = `url(${DOUGH[dough].url})`;
  const cheesesUrl = cheeses.map((cheese) => `url(${CHEESES[cheese].url})`);
  const vegetablesUrl = vegetables.map((veg) => `url(${VEGETABLES[veg].url})`);
  const toppingsUrl = toppings.map(
    (topping) => `url(${TOPPINGS[topping].url})`
  );

  return [...toppingsUrl, ...vegetablesUrl, ...cheesesUrl, doughUrl].join(",");
};

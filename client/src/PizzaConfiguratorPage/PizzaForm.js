import React from "react";
import {
  SIZES,
  DOUGH,
  SAUCES,
  CHEESES,
  VEGETABLES,
  TOPPINGS,
} from "../utils/pizzaData";
import { calculatePrice } from "../utils/calculatePrice";
import { useForm } from "react-hook-form";
import { PizzaSummary } from "../sharedComponents/PizzaSummary/PizzaSummary";
import { PizzaPreview } from "../sharedComponents/PizzaPreview/PizzaPreview";

export const PizzaForm = ({ onPizzaSubmit }) => {
  const { register, handleSubmit, watch } = useForm({
    defaultValues: {
      size: "small",
      dough: "thin",
      sauce: "tomato",
      cheeses: [],
      vegetables: [],
      toppings: [],
    },
  });

  const ingredients = watch();
  const price = calculatePrice(ingredients);

  const onSubmit = (data) => {
    onPizzaSubmit(data);
  };

  return (
    <>
      <PizzaPreview ingredients={ingredients} />
      <PizzaSummary ingredients={ingredients} />
      <h1>Соберите пиццу</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <fieldset>
          <legend>Размер</legend>
          <label>
            <input type="radio" name="size" value="small" ref={register} />
            {SIZES.small.name}
          </label>
          <label>
            <input type="radio" name="size" value="medium" ref={register} />
            {SIZES.medium.name}
          </label>
        </fieldset>
        <fieldset>
          <legend>Тесто</legend>
          <label>
            <input type="radio" name="dough" value="thin" ref={register} />
            {DOUGH.thin.name}
          </label>
          <label>
            <input type="radio" name="dough" value="thick" ref={register} />
            {DOUGH.thick.name}
          </label>
        </fieldset>
        <fieldset>
          <legend>Выберите соус:</legend>
          <label>
            <input type="radio" name="sauce" value="tomato" ref={register} />
            {SAUCES.tomato.name}
          </label>
          <label>
            <input type="radio" name="sauce" value="white" ref={register} />
            {SAUCES.white.name}
          </label>
          <label>
            <input type="radio" name="sauce" value="hot" ref={register} />
            {SAUCES.hot.name}
          </label>
        </fieldset>
        <fieldset>
          <legend>Выберите сыр:</legend>
          <label>
            <input
              type="checkbox"
              name="cheeses"
              value="mozzarella"
              ref={register}
            />
            {CHEESES.mozzarella.name}
          </label>
          <label>
            <input
              type="checkbox"
              name="cheeses"
              value="cheddar"
              ref={register}
            />
            {CHEESES.cheddar.name}
          </label>
          <label>
            <input
              type="checkbox"
              name="cheeses"
              value="dorBlue"
              ref={register}
            />
            {CHEESES.dorBlue.name}
          </label>
        </fieldset>
        <fieldset>
          <legend>Выберите овощи:</legend>
          <label>
            <input
              type="checkbox"
              name="vegetables"
              value="tomato"
              ref={register}
            />
            {VEGETABLES.tomato.name}
          </label>
          <label>
            <input
              type="checkbox"
              name="vegetables"
              value="mushrooms"
              ref={register}
            />
            {VEGETABLES.mushrooms.name}
          </label>
          <label>
            <input
              type="checkbox"
              name="vegetables"
              value="pepper"
              ref={register}
            />
            {VEGETABLES.pepper.name}
          </label>
        </fieldset>
        <fieldset>
          <legend>Выберите мясо:</legend>
          <label>
            <input
              type="checkbox"
              name="toppings"
              value="bacon"
              ref={register}
            />
            {TOPPINGS.bacon.name}
          </label>
          <label>
            <input
              type="checkbox"
              name="toppings"
              value="pepperoni"
              ref={register}
            />
            {TOPPINGS.pepperoni.name}
          </label>
          <label>
            <input type="checkbox" name="toppings" value="ham" ref={register} />
            {TOPPINGS.ham.name}
          </label>
        </fieldset>
        <button>Заказать за {price}</button>
      </form>
    </>
  );
};

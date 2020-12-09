import React, { useState } from "react";
import { useCollection } from "../utils/useCollection";
import { calculatePrice } from "../utils/calculatePrice";

export const PizzaForm = ({ onPizzaSubmit }) => {
  const [size, setSize] = useState("30");
  const [dough, setDough] = useState("thin");
  const [sauce, setSauce] = useState("tomato");
  const [cheeses, addCheese, removeCheese] = useCollection();
  const [vegetables, addVegetable, removeVegetable] = useCollection();
  const [toppings, addMTopping, removeTopping] = useCollection();

  const price = calculatePrice({
    size,
    dough,
    sauce,
    cheeses,
    vegetables,
    toppings,
  });

  const updateSize = (event) => {
    setSize(event.target.value);
  };

  const updateDough = (event) => {
    setDough(event.target.value);
  };

  const updateSauce = (event) => {
    setSauce(event.target.value);
  };

  const updateCheeses = (event) => {
    const { value, checked } = event.target;

    if (checked) {
      addCheese(value);
    } else {
      removeCheese(value);
    }
  };

  const updateVegetables = (event) => {
    const { value, checked } = event.target;

    if (checked) {
      addVegetable(value);
    } else {
      removeVegetable(value);
    }
  };

  const updateToppings = (event) => {
    const { value, checked } = event.target;

    if (checked) {
      addMTopping(value);
    } else {
      removeTopping(value);
    }
  };
  
  const handleSubmit = (event) => {
    event.preventDefault();
    onPizzaSubmit({
      size,
      dough,
      sauce,
      cheeses,
      vegetables,
      toppings,
    });
  };
  
  return (
    <form onSubmit={handleSubmit}>
      <fieldset>
        <legend>Размер</legend>
        <label>
          <input
            type="radio"
            value="30"
            name="size"
            onChange={updateSize}
            checked={size === "30"}
          />
          30 см
        </label>
        <label>
          <input
            type="radio"
            value="35"
            name="size"
            onChange={updateSize}
            checked={size === "35"}
          />
          35 см
        </label>
      </fieldset>

      <fieldset>
        <legend>Тесто</legend>
        <label>
          <input
            type="radio"
            value="thin"
            name="dough"
            onChange={updateDough}
            checked={dough === "thin"}
          />
          Тонкое
        </label>
        <label>
          <input
            type="radio"
            value="puffy"
            name="dough"
            onChange={updateDough}
            checked={dough === "puffy"}
          />
          Пышное
        </label>
      </fieldset>

      <fieldset>
        <legend>Выберите соус:</legend>
        <label>
          <input
            type="radio"
            value="tomato"
            name="sauce"
            onChange={updateSauce}
            checked={sauce === "tomato"}
          />
          Томатный
        </label>
        <label>
          <input
            type="radio"
            value="white"
            name="sauce"
            onChange={updateSauce}
            checked={sauce === "white"}
          />
          Белый
        </label>
        <label>
          <input
            type="radio"
            value="hot"
            name="sauce"
            onChange={updateSauce}
            checked={sauce === "hot"}
          />
          Острый
        </label>
      </fieldset>

      <fieldset>
        <legend>Выберите сыр:</legend>
        <label>
          <input
            type="checkbox"
            value="mozzarella"
            onChange={updateCheeses}
            checked={cheeses.includes("mozzarella")}
          />
          Моцарелла
        </label>
        <label>
          <input
            type="checkbox"
            value="cheddar"
            onChange={updateCheeses}
            checked={cheeses.includes("cheddar")}
          />
          Чеддер
        </label>
        <label>
          <input
            type="checkbox"
            value="dorBlue"
            onChange={updateCheeses}
            checked={cheeses.includes("dorBlue")}
          />
          Дор блю
        </label>
      </fieldset>

      <fieldset>
        <legend>Выберите овощи:</legend>
        <label>
          <input
            type="checkbox"
            value="tomato"
            onChange={updateVegetables}
            checked={vegetables.includes("tomato")}
          />
          Томаты
        </label>
        <label>
          <input
            type="checkbox"
            value="mushrooms"
            onChange={updateVegetables}
            checked={vegetables.includes("mushrooms")}
          />
          Грибы
        </label>
        <label>
          <input
            type="checkbox"
            value="pepper"
            onChange={updateVegetables}
            checked={vegetables.includes("pepper")}
          />
          Перец
        </label>
      </fieldset>

      <fieldset>
        <legend>Выберите мясо:</legend>
        <label>
          <input
            type="checkbox"
            value="bacon"
            onChange={updateToppings}
            checked={toppings.includes("bacon")}
          />
          Бекон
        </label>
        <label>
          <input
            type="checkbox"
            value="pepperoni"
            onChange={updateToppings}
            checked={toppings.includes("pepperoni")}
          />
          Пепперони
        </label>
        <label>
          <input
            type="checkbox"
            value="ham"
            onChange={updateToppings}
            checked={toppings.includes("ham")}
          />
          Ветчина
        </label>
      </fieldset>
      <button>Заказать за {price}</button>
    </form>
  );
};

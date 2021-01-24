import bacon from "./assets/bacon.png";
import cheddar from "./assets/cheddar.png";
import dorBlue from "./assets/dorBlue.png";
import ham from "./assets/ham.png";
import mozzarella from "./assets/mozzarella.png";
import mushrooms from "./assets/mushrooms.png";
import pepper from "./assets/pepper.png";
import pepperoni from "./assets/pepperoni.png";
import thick from "./assets/thick.png";
import thin from "./assets/thin.png";
import tomato from "./assets/tomato.png";

export const SIZES = {
  small: { name: "30 см", price: 0 },
  medium: { name: "35 см", price: 50 },
};

export const DOUGH = {
  thin: { name: "Тонкое", price: 0, url: thin },
  thick: { name: "Традиционное", price: 0, url: thick },
};

export const SAUCES = {
  tomato: { name: "Томатный", price: 0 },
  white: { name: "Белый", price: 0 },
  hot: { name: "Острый", price: 0 },
};

export const CHEESES = {
  mozzarella: { name: "Моцарелла", price: 29, url: mozzarella },
  cheddar: { name: "Чеддер", price: 29, url: cheddar },
  dorBlue: { name: "Дор блю", price: 29, url: dorBlue },
};

export const VEGETABLES = {
  tomato: { name: "Томаты", price: 29, url: tomato },
  mushrooms: { name: "Грибы", price: 29, url: mushrooms },
  pepper: { name: "Перец", price: 29, url: pepper },
};

export const TOPPINGS = {
  bacon: { name: "Бекон", price: 29, url: bacon },
  pepperoni: { name: "Пепперони", price: 29, url: pepperoni },
  ham: { name: "Ветчина", price: 29, url: ham },
};

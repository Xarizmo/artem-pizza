import React from "react";
import { render } from "@testing-library/react";
import { PizzaSummary } from "./PizzaSummary";

describe("PizzaSummary", () => {
  it("renders correctly", () => {
    const { getByText } = render(
      <PizzaSummary
        ingredients={{
          size: "small",
          dough: "thin",
          sauce: "tomato",
          cheeses: ["mozzarella", "cheddar", "dorBlue"],
          vegetables: ["tomato", "mushrooms", "pepper"],
          toppings: ["bacon", "pepperoni", "ham"],
        }}
      />
    );

    expect(
      getByText("30 см, Тонкое тесто, Томатный соус.")
    ).toBeInTheDocument();
    expect(
      getByText(
        "Моцарелла · Чеддер · Дор блю · Томаты · Грибы · Перец · Бекон · Пепперони · Ветчина"
      )
    ).toBeInTheDocument();
  });
});

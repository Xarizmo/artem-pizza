import React from 'react';
import { render } from '@testing-library/react';
import { PizzaPreview } from './PizzaPreview';

describe("PizzaPreview", () => {
  it("renders correctly", () => {
    const { getByText } = render(<PizzaPreview pizza={{
      size: "30",
      dough: "thin",
      sauce: "tomato",
      cheeses: ["mozzarella", "cheddar", "dorBlue"],
      vegetables: ["tomato", "mushrooms", "pepper"],
      toppings: ["bacon", "pepperoni", "ham"],
    }} />)
    
    expect(getByText("30 см на тонком тесте · Томатный соус · Моцарелла · Чеддер · Дор блю · Томаты · Грибы · Перец · Бекон · Пепперони · Ветчина")).toBeInTheDocument()
  })
})
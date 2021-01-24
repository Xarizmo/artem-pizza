import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { act } from "react-dom/test-utils";

import { PizzaForm } from "./PizzaForm";

describe("PizzaForm", () => {
  it("renders correctly", () => {
    const { getByText } = render(<PizzaForm />);
    expect(getByText("Соберите пиццу")).toBeInTheDocument();
  });

  describe("with all additions unchecked", () => {
    it("shows minimum price", () => {
      const { getByText } = render(<PizzaForm />);
      expect(getByText("Заказать за 200")).toBeInTheDocument();
    });
  });

  describe("with all additions checked", () => {
    it("shows maximum price", () => {
      const { getByText } = render(<PizzaForm />);

      fireEvent.click(getByText("35 см"));
      fireEvent.click(getByText("Моцарелла"));
      fireEvent.click(getByText("Чеддер"));
      fireEvent.click(getByText("Дор блю"));
      fireEvent.click(getByText("Томаты"));
      fireEvent.click(getByText("Грибы"));
      fireEvent.click(getByText("Перец"));
      fireEvent.click(getByText("Бекон"));
      fireEvent.click(getByText("Пепперони"));
      fireEvent.click(getByText("Ветчина"));

      expect(getByText("Заказать за 511")).toBeInTheDocument();
    });
  });

  describe("on pizza submit", () => {
    it("passes constructed pizza", async () => {
      const onPizzaSubmit = jest.fn();

      const { getByText } = render(<PizzaForm onPizzaSubmit={onPizzaSubmit} />);

      fireEvent.click(getByText("Белый"));
      fireEvent.click(getByText("Моцарелла"));
      fireEvent.click(getByText("Грибы"));
      fireEvent.click(getByText("Ветчина"));

      await act(async () => {
        fireEvent.click(getByText("Заказать за 287"));
      });

      expect(onPizzaSubmit).toBeCalledWith({
        size: "small",
        dough: "thin",
        sauce: "white",
        cheeses: ["mozzarella"],
        vegetables: ["mushrooms"],
        toppings: ["ham"],
      });
    });
  });
});

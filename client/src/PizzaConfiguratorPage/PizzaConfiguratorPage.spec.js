import React from "react";
import { PizzaConfiguratorPage } from "./PizzaConfiguratorPage";
import { Router, MemoryRouter } from "react-router-dom";
import { render, fireEvent } from "@testing-library/react";
import { createMemoryHistory } from "history";

jest.mock("./PizzaForm", () => {
  return {
    PizzaForm: ({ onPizzaSubmit }) => (
      <button onClick={() => onPizzaSubmit({ foo: "bar" })}>Сохранить</button>
    ),
  };
});

describe("PizzaConfiguratorPage", () => {
  it("renders correctly", () => {
    const { getByText } = render(
      <MemoryRouter>
        <PizzaConfiguratorPage
          _usePizzaHook={() => ({
            setPizza: () => {},
          })}
        />
      </MemoryRouter>
    );

    expect(getByText("Сохранить")).toBeInTheDocument();
  });

  describe(".onPizzaChange", () => {
    it("sets pizza value in the pizza context", () => {
      const mockSetPizza = jest.fn();

      const { getByText } = render(
        <MemoryRouter>
          <PizzaConfiguratorPage
            _usePizzaHook={() => ({
              setPizza: mockSetPizza,
            })}
          />
        </MemoryRouter>
      );

      fireEvent.click(getByText("Сохранить"));

      expect(mockSetPizza).toBeCalledWith({ foo: "bar" });
    });
    it("navigates to `/checkout`", () => {
      const history = createMemoryHistory();

      const { getByText } = render(
        <Router history={history}>
          <PizzaConfiguratorPage
            _usePizzaHook={() => ({
              setPizza: () => {},
            })}
          />
        </Router>
      );

      fireEvent.click(getByText("Сохранить"));

      expect(history.location.pathname).toEqual("/checkout");
    });
  });
});

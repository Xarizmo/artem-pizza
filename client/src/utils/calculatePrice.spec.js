import { calculatePrice } from "./calculatePrice";

describe("calculatePrice", () => {
  it("returns the sum of all the selected ingredients on small size pizza", () => {
    expect(
      calculatePrice({
        size: "small",
        dough: "thin",
        sauce: "tomato",
        cheeses: ["mozzarella", "cheddar", "dorBlue"],
        vegetables: ["tomato", "mushrooms", "pepper"],
        toppings: ["bacon", "pepperoni", "ham"],
      })
    ).toEqual(461);
  });
  it("returns the sum of all the selected ingredients on medium size pizza", () => {
    expect(
      calculatePrice({
        size: "medium",
        dough: "thin",
        sauce: "tomato",
        cheeses: ["mozzarella", "cheddar", "dorBlue"],
        vegetables: ["tomato", "mushrooms", "pepper"],
        toppings: ["bacon", "pepperoni", "ham"],
      })
    ).toEqual(511);
  });
});

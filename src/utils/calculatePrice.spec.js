import { calculatePrice } from './calculatePrice';

describe("calculatePrice", () => {
  it("returns the sum of all the selected ingredients", () => {
    expect(calculatePrice({
      size: "30",
      dough: "thin",
      sauce: "tomato",
      cheeses: ["mozzarella", "cheddar", "dorBlue"],
      vegetables: ["tomato", "mushrooms", "pepper"],
      toppings: ["bacon", "pepperoni", "ham"],
    })).toEqual(461)
  })
})
import { luhnAlgorithm, getPaymentSystem } from "../validators.js";

test("card number verification: positive result", () => {
  const result = luhnAlgorithm("2202200223948454");
  expect(result).toBe(true);
});

test("card number verification: negative result", () => {
  const result = luhnAlgorithm("12022002239");
  expect(result).toBe(false);
});

test.each([
  ["visa", "4485258160393286"],
  ["mir", "2202200223948454"],
  ["master", "5222970870586158"],
  ["amex", "375357181360893"],
  ["discover", "6011964575349452"],
  ["jcb", "3544604273997995"],
  ["diners_club", "30002862977899"],
])(
  "checking the payment system for a %s card with a number %i",
  (expected, number) => {
    const result = getPaymentSystem(number);
    expect(result).toBe(expected);
  },
);

import React from "react";
import { formatPrice } from ".../helpers";

test("price is formatted correctly", () => {
  const price = 1500;
  expect(formatPrice(price)).toBe("$15.00");
});

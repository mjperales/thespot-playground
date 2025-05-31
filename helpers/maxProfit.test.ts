import { maxProfit } from "./maxProfit";

describe("maxProfit()", () => {
  test("example 1", () => {
    const prices = [7, 1, 5, 3, 6, 4];
    expect(maxProfit(prices)).toBe(5);
  });
  test("example 2", () => {
    const prices = [7, 6, 4, 3, 1];
    expect(maxProfit(prices)).toBe(0);
  });
});

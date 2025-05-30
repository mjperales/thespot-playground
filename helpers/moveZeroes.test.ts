import { moveZeroes } from "./moveZeroes";

describe("moveZeores()", () => {
  test("", () => {
    let zeroes = [0, 1, 0, 3, 12];
    moveZeroes(zeroes);
    expect(zeroes).toEqual([1, 3, 12, 0, 0]);
  });
  test("", () => {
    let zeroes = [0];
    moveZeroes(zeroes);
    expect(zeroes).toEqual([0]);
  });
});

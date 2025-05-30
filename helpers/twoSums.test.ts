import { twoSum } from "./twoSums";

describe("twoSums", () => {
  test("example 1", () => {
    const numbers = [2, 7, 11, 15],
      target = 9;
    expect(twoSum(numbers, target)).toEqual([1, 2]);
  });
  test("example 2", () => {
    const numbers = [2, 3, 4],
      target = 6;
    expect(twoSum(numbers, target)).toEqual([1, 3]);
  });
  test("example 3", () => {
    const numbers = [-1, 0],
      target = -1;
    expect(twoSum(numbers, target)).toEqual([1, 2]);
  });
});

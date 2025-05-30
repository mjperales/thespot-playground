import { threeSum } from "./threeSum";

describe("threeSum()", () => {
  test("3 possible triples that sum to 0", () => {
    const nums = [-1, 0, 1, 2, -1, -4];
    expect(threeSum(nums)).toEqual([
      [-1, -1, 2],
      [-1, 0, 1],
    ]);
  });
  test("No possible triples that sum to 0", () => {
    const nums = [0, 1, 1];
    expect(threeSum(nums)).toEqual([]);
  });
  test("avoid duplicates", () => {
    const nums = [-1, -1, -1, 2, 2, 2];
    expect(threeSum(nums)).toEqual([[-1, -1, 2]]);
  });
  test("Test tricky input with many duplicates", () => {
    const nums = [-2, 0, 0, 0, 2, 2, 2, -2, -2, -2, 1, -1, -1, 1, 1];
    expect(threeSum(nums)).toEqual([
      [-2, 0, 2],
      [-2, 1, 1],
      [-1, -1, 2],
      [-1, 0, 1],
      [0, 0, 0],
    ]);
  });
});

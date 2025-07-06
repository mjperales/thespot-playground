import { findMaxAverage } from "./findMaxAverage";

describe("findMaxAverage()", () => {
  test("Output should be 12.75", () => {
    expect(findMaxAverage([1, 12, -5, -6, 50, 3], 4)).toEqual(12.75);
  });
  test("Output should be 5.0", () => {
    expect(findMaxAverage([5], 1)).toEqual(5.0);
  });
});

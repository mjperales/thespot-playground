import { smallestNumber } from "./smallestNumber";

describe("smallestNumber()", () => {
  test("returns 5", () => {
    expect(smallestNumber([1, 3, 6, 4, 1, 2])).toBe(5);
  });
  test("returns the next number after array ends", () => {
    expect(smallestNumber([1, 2, 3])).toBe(4);
  });
  test("returns 1 when every number is less than 0", () => {
    expect(smallestNumber([-1, -3])).toBe(1);
  });
  test("should return 5", () => {
    expect(smallestNumber([1, 3, 6, 4, 1, 2])).toBe(5);
  });
  test("should return 1", () => {
    expect(smallestNumber([2, 3, 7])).toBe(1);
  });
  test("should return 3", () => {
    expect(smallestNumber([1, 2, 4, 5, 6])).toBe(3);
  });
  test("should return 1", () => {
    expect(smallestNumber([100, 101])).toBe(1);
  });
});

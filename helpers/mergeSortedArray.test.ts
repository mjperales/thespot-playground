import { merge } from "./mergeSortedArray";

describe("merge in place", () => {
  test("combines sorted array", () => {
    let nums1 = [1, 2, 3, 0, 0, 0];
    merge(nums1, 3, [2, 5, 6], 3);
    expect(nums1).toEqual([1, 2, 2, 3, 5, 6]);
  });
  test("combines sorted array even if one is empty", () => {
    let again = [1];
    merge(again, 1, [], 0);
    expect(again).toEqual([1]);
  });
  test("combines sorted array even if one is empty", () => {
    let numbers = [0];
    merge(numbers, 0, [1], 1);
    expect(numbers).toEqual([1]);
  });
});

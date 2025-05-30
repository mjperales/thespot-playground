import { removeDuplicates } from "./removeDuplicates";

describe("removeDuplicates()", () => {
  test("Returns 2", () => {
    let dedup = [1, 1, 2];
    expect(removeDuplicates(dedup)).toBe(2);
  });
  test("Returns 5", () => {
    let dedup = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
    expect(removeDuplicates(dedup)).toBe(5);
  });
});

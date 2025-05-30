import { isValid } from "./isValid";

describe("isValid()", () => {
  test("example 1", () => {
    expect(isValid("()")).toBe(true);
  });
  test("example 2", () => {
    expect(isValid("()[]{}")).toBe(true);
  });
  test("example 3", () => {
    expect(isValid("(]")).toBe(false);
  });
  test("example 4", () => {
    expect(isValid("([])")).toBe(true);
  });
});

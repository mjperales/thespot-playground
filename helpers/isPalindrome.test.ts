import { isPalindrome } from "./isPalindrome";

describe("isPalindrome()", () => {
  test("returns true", () => {
    expect(isPalindrome("A man, a plan, a canal: Panama")).toBe(true);
  });
  test("returns false", () => {
    expect(isPalindrome("race a car")).toBe(false);
  });
  test("returns true for empty string", () => {
    expect(isPalindrome(" ")).toBe(true);
  });
});

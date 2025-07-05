import { reverseString } from "./reverseString";

describe("reverseString()", () => {
  test('should equal ["o","l","l","e","h"]', () => {
    let test1 = ["h", "e", "l", "l", "o"];
    reverseString(test1);
    expect(test1).toEqual(["o", "l", "l", "e", "h"]);
  });
  test('should equal ["h","a","n","n","a","H"]', () => {
    let test = ["H", "a", "n", "n", "a", "h"];
    reverseString(test);
    expect(test).toEqual(["h", "a", "n", "n", "a", "H"]);
  });
});

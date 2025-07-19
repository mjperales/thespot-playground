import { decodeString } from "./decodeString";

describe("decodeString()", () => {
  test("", () => {
    expect(decodeString("3[a]2[bc]")).toBe("aaabcbc");
  });
  test("", () => {
    expect(decodeString("3[a2[c]]")).toBe("accaccacc");
  });
  test("", () => {
    expect(decodeString("2[abc]3[cd]ef")).toBe("abcabccdcdcdef");
  });
  test("deep nesting", () => {
    expect(decodeString("2[2[2[a]]]")).toBe("aaaaaaaa");
  });
});

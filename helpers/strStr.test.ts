import { strStr } from "./strStr";

describe("strStr()", () => {
  test("Should return first occurance index of 'sad'", () => {
    expect(strStr("sadbutsad", "sad")).toBe(0);
  });
  test("Should return -1 since needle is not found", () => {
    expect(strStr("leetcode", "leeto")).toBe(-1);
  });
  test("Should return 2", () => {
    expect(strStr("hello", "ll")).toBe(2);
  });
  test("Should return -1", () => {
    expect(strStr("aaaaa", "bba")).toBe(-1);
  });
  test("empty string should return 0", () => {
    expect(strStr("", "")).toBe(0);
  });
  test("should return -1 if needle is greater than haystack", () => {
    expect(strStr("hay", "haystack")).toBe(-1);
  });
});

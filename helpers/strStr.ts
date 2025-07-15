/**
 * Given two strings needle and haystack, return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.
 * @param haystack
 * @param needle
 * @returns
 */
export function strStr(haystack: string, needle: string): number {
  // if empty string return 0
  if (needle === "") {
    return 0;
  }

  // if needle is longer than haystack then it isn't found
  if (needle.length > haystack.length) {
    return -1;
  }

  for (let i = 0; i <= haystack.length - needle.length; i++) {
    let check = haystack.slice(i, i + needle.length);
    if (check === needle) {
      return i;
    }
  }
  return -1;
}

/**
 Do not return anything, modify s in-place instead.
 */
export function reverseString(s: string[]): void {
  let end: number = s.length - 1;

  for (let i = 0; s.length - 1 >= i; i++) {
    if (i < end) {
      let tempStart = s[i];
      let tempEnd = s[end];
      // swap
      s[i] = tempEnd!;
      s[end] = tempStart!;
      end--;
    }
  }
}

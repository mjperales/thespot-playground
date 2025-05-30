export function smallestNumber(array: number[]) {
  const set = new Set(array.map((item) => item));

  for (let x = 1; x <= array.length + 1; x++) {
    if (!set.has(x as number)) {
      return x;
    }
  }
}

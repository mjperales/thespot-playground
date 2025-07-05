export function sortedSquares(nums: number[]): number[] {
  const squared: number[] = [];

  nums.forEach((item) => {
    squared.push(item * item);
  });

  return squared.sort((a, b) => a - b);
}

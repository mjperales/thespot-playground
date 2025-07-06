export function findMaxAverage(nums: number[], k: number): number {
  let maxAverage = 0;
  let right = k - 1;
  for (let i = 0; nums.length - 1 >= i; i++) {
    if (right < nums.length) {
      let window = nums.slice(i, right + 1);
      let total = window.reduce(
        (accumulator, currentValue) => accumulator + currentValue,
        0
      );
      let currentAverage = total / k;
      if (currentAverage > maxAverage) {
        maxAverage = currentAverage;
      }
      right++;
    }
  }
  return maxAverage;
}

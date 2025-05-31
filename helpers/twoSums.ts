// classic two pointer strategy
export function twoSum(
  numbers: number[],
  target: number
): number[] | undefined {
  // numbers is already sorted
  let left = 0;
  let right = numbers.length - 1;

  while (left < right) {
    //🧠 So in short:
    // Too small? ➡️ Move left pointer right
    // Too big? ⬅️ Move right pointer left
    const sum = numbers[right]! + numbers[left]!;
    // if sum is less than target move left
    if (sum < target) {
      left++;
      // if sum is greater than target, move right
    } else if (sum > target) {
      right--;
      // if sum equals target, move both
    } else {
      return [left + 1, right + 1];
    }
  }
}

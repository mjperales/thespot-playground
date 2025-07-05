/**
 Do not return anything, modify nums in-place instead.
 */
export function moveZeroes(nums: number[]): void {
  // start from the beginning. Both start at 0
  // one pointer can track where to write the next non-zero
  // other pointer, scans through the array
  let write: number = 0;
  for (let x = 0; x < nums.length; x++) {
    if (nums[x] !== 0 && nums[x] !== undefined) {
      nums[write] = nums[x] as number;
      write++;
    }
  }

  // fill the rest with 0s
  for (let x = write; nums.length > x; x++) {
    nums[x] = 0;
  }
}

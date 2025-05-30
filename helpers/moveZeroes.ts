/**
 Do not return anything, modify nums in-place instead.
 */
export function moveZeroes(nums: number[]): void {
  // start from the beginning. Both start at 0
  // one pointer can track where to write the next non-zero
  // other pointer, scans through the array
  let write = 0;
  for (let x = 0; x < nums.length; x++) {
    if (nums[x] != 0) {
      nums[write] = nums[x];
      write++;
    }
  }

  // fill the rest with 0s
  for (let x = write; nums.length > x; x++) {
    nums[x] = 0;
  }
}

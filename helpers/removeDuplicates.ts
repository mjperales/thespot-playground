/**
 *
 * Given an integer array nums sorted in non-decreasing order, remove the duplicates in-place such * that each unique element appears only once. The relative order of the elements should be kept * the same. Then return the number of unique elements in nums.
 *
 * Consider the number of unique elements of nums to be k, to get accepted, you need to do the
 * following things:
 *
 * Change the array nums such that the first k elements of nums contain the unique elements in the order they were present in nums initially. The remaining elements of nums are not important as well as the size of nums.
    Return k.

 */
// use two pointers for this one: read forward and another to write
// 	•	Use two pointers: one to read, one to write
// •	Compare current and previous values
// •	Only write when a new unique value is found
// •	Return the write pointer as the count of unique elements
export function removeDuplicates(nums: number[]): number {
  // reading forward, comparing the current value to the previous one
  // When you see a new value, you write it into the next available position
  // everything before the write is now de-duplicated
  let pointer = 1;
  for (let x = 1; nums.length > x; x++) {
    if (nums[x] !== nums[x - 1]) {
      nums[pointer] = nums[x];
      pointer++;
    }
  }
  return pointer;
}

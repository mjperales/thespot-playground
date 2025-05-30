/**
 * Do not return anything, modify nums1 in-place instead.
 * Strategy: You will need three pointers and start from the end
 * 1. Start from end of nums1
 * 2. Compare nums1[p1] and nums2[p2]
 * 3. Fill nums1[p] with the larger, move pointer
 * 4. After loop, copy any leftover nums2 values
 */
export function merge(
  nums1: number[],
  m: number,
  nums2: number[],
  n: number
): void {
  let p1 = m - 1; // last valid element in nums1
  let p2 = n - 1; // last valid element in nums2
  let p = m + n - 1; // last valid element in entire array

  for (let x = p; x >= 0; x--) {
    if (p2 >= 0 && p1 >= 0) {
      if (nums1[p1] > nums2[p2]) {
        nums1[x] = nums1[p1];
        p1--;
      } else {
        nums1[x] = nums2[p2];
        p2--;
      }
    }
  }

  while (p2 >= 0) {
    nums1[p] = nums2[p2];
    p--;
    p2--;
  }
}

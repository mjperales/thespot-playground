// Use two pointer technique with sorting
export function threeSum(nums: number[]): number[][] {
  // first we sort the array
  let copy: number[] = [...nums];
  copy.sort((a: number, b: number) => a - b);
  const triplets: number[][] = [];

  // copy.length - 2 ensures:
  // There’s always room for at least two more numbers after the fixed one.
  // You avoid out-of-bounds errors or logic bugs.
  for (let i = 0; i < copy.length - 2; i++) {
    if (i > 0 && copy[i] === copy[i - 1]) continue; // skip duplicates

    let next = i + 1;
    let end = copy.length - 1;
    while (next < end) {
      let sum = copy[i] + copy[next] + copy[end];
      // if sum is too high then the end should move
      // since those numbers are greater
      if (sum > 0) {
        end--;
        // if the sum is too low then next should move since those numbers are smaller
      } else if (sum < 0) {
        next++;
        // if the sum is just right then move both pointers
      } else {
        // found a valie triplet
        triplets.push([copy[i], copy[next], copy[end]]);

        // skip duplicates for next and end
        let currentNext = copy[next];
        let currentEnd = copy[end];
        while (next < end && copy[next] === currentNext) next++;
        while (next < end && copy[end] === currentEnd) end--;
      }
    }
  }
  return triplets;
}

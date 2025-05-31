export function twoSum(nums: number[], target: number): number[] | undefined {
  const seen = new Map<number, number>();

  for (let i = 0; nums.length > i; i++) {
    // y = target - x
    const complement = target - nums[i]!;

    if (seen.has(complement)) {
      return [seen.get(complement)!, i];
    }

    // we set it
    seen.set(nums[i]!, i);
  }
}

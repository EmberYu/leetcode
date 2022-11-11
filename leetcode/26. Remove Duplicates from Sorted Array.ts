function removeDuplicates(nums: number[]): number {
  let curr = 1;
  let replace = 1;
  while (curr < nums.length) {
    if (nums[curr] > nums[curr - 1]) {
      nums[replace] = nums[curr];
      replace += 1;
    }
    curr += 1;
  }
  return replace;
}

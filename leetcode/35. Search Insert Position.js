/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
  let left = 0;
  let right = nums.length - 1;
  let middle;

  if (nums[left] === target) return left;
  if (nums[right] === target) return right;
  if (nums[right] < target) return right + 1;
  if (nums[left] > target) return left;

  while (right - left > 1) {
    middle = Math.floor((right + left) / 2);
    if (nums[middle] === target) return middle;
    if (nums[middle] < target) {
      left = middle;
      continue;
    }
    if (nums[middle] > target) {
      right = middle;
      continue;
    }
  }
  return right;
};

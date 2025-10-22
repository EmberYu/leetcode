/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function (nums, k) {
  const pivot = nums[Math.floor(Math.random() * nums.length)];
  let left = [];
  let right = [];
  let mid = [];
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > pivot) left.push(nums[i]);
    else if (nums[i] === pivot) mid.push(nums[i]);
    else right.push(nums[i]);
  }
  if (left.length >= k) {
    return findKthLargest(left, k);
  } else if (left.length + mid.length >= k) {
    return mid[0];
  } else {
    const midL = mid.length;
    const leftL = left.length;
    return findKthLargest(right, k - (leftL + midL));
  }
};

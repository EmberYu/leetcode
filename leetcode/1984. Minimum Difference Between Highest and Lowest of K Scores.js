/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minimumDifference = function (nums, k) {
  if (k === 1) {
    return 0;
  }
  var sorttedNums = nums.sort((a, b) => a - b);
  let left = 0;
  let right = k - 1;
  let min = sorttedNums[sorttedNums.length - 1] - sorttedNums[left];
  while (right < sorttedNums.length) {
    console.log(left, right);
    min = Math.min(min, sorttedNums[right] - sorttedNums[left]);
    left++;
    right++;
  }
  return min;
};

console.log(minimumDifference([9, 4, 1, 7], 2));

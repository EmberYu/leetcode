/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNonDuplicate = function (nums) {
  let left = 0;
  let right = nums.length - 1;
  while (left < right) {
    let middle = Math.floor((right + left) / 2);
    const isEven = (middle - left) % 2 === 0;
    if (nums[middle] === nums[middle - 1]) {
      isEven ? (right = middle - 2) : (left = middle + 1);
    } else if (nums[middle] === nums[middle + 1]) {
      isEven ? (left = middle + 2) : (right = middle - 1);
    } else {
      return nums[middle];
    }
    console.log(left, middle, right);
  }
  return nums[left];
};

// const nums = [1, 1, 2, 3, 3, 4, 4, 8, 8];
// const nums = [3, 3, 7, 7, 10, 11, 11];
// const nums = [3, 3, 10, 7, 7, 11, 11];
// const nums = [1, 1, 3, 3, 4, 4, 2, 8, 8];
const nums = [3, 2, 2];

console.log(singleNonDuplicate(nums));

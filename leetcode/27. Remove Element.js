/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
  let k = nums.length;
  let leftPointer = 0;
  let rightPointer = nums.length - 1;

  while (leftPointer <= rightPointer) {
    debugger;
    if (nums[leftPointer] === val) {
      nums[leftPointer] = "_";
      k--;
      continue;
    }

    if (nums[rightPointer] === val) {
      k--;
      nums[rightPointer] = "_";
      rightPointer--;
      continue;
    }

    if (nums[leftPointer] === "_") {
      if (nums[rightPointer] !== val) {
        nums[leftPointer] = nums[rightPointer];
        nums[rightPointer] = "_";
        leftPointer++;
        rightPointer--;
      }
      continue;
    }
    leftPointer++;
  }

  return k;
};

removeElement([2, 2, 3], 2);

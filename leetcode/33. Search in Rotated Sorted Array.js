/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  let left = 0;
  let right = nums.length - 1;

  // 二分查找的核心循环：left <= right（闭区间查找）
  while (left <= right) {
    // 计算中间索引（避免 left + right 溢出）
    const mid = left + Math.floor((right - left) / 2);

    // 找到目标，直接返回索引
    if (nums[mid] === target) {
      return mid;
    }

    // 情况 1：mid 在左子数组（左半部分有序）
    if (nums[left] <= nums[mid]) {
      // 目标在左半有序区间内 → 缩小右边界
      if (nums[left] <= target && target < nums[mid]) {
        right = mid - 1;
      }
      // 目标在右半无序区间 → 缩小左边界
      else {
        left = mid + 1;
      }
    }
    // 情况 2：mid 在右子数组（右半部分有序）
    else {
      // 目标在右半有序区间内 → 缩小左边界
      if (nums[mid] < target && target <= nums[right]) {
        left = mid + 1;
      }
      // 目标在左半无序区间 → 缩小右边界
      else {
        right = mid - 1;
      }
    }
  }

  // 循环结束未找到目标，返回 -1
  return -1;
};

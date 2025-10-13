/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
  // 1. 初始化三个指针
  let p1 = m - 1; // 指向 nums1 有效元素的末尾
  let p2 = n - 1; // 指向 nums2 的末尾
  let p = m + n - 1; // 指向 nums1 整个数组的末尾（待填充位置）

  // 2. 从后向前遍历，比较并填充
  while (p1 >= 0 && p2 >= 0) {
    if (nums1[p1] > nums2[p2]) {
      nums1[p] = nums1[p1];
      p1--;
    } else {
      nums1[p] = nums2[p2];
      p2--;
    }
    p--;
  }

  // 3. 处理 nums2 中可能剩余的元素（nums1有剩余则已在正确位置）
  // 如果 nums2 有剩余，说明这些元素是合并后最小的，直接拷贝到 nums1 开头
  while (p2 >= 0) {
    nums1[p] = nums2[p2];
    p2--;
    p--;
  }
  // 函数执行完毕，结果已原地修改在 nums1 中
};

nums1 = [1, 2, 3, 0, 0, 0];
m = 3;
nums2 = [2, 5, 6];
n = 3;

merge(nums1, m, nums2, n);
console.log(nums1);

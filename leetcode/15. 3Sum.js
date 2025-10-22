/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  // 结果数组，用于存储所有不重复的三元组
  const result = [];
  // 1. 先对数组排序（关键前提：便于双指针操作和去重）
  // 注意：JS 的 sort() 默认按字符串排序，需传入数字比较函数
  nums.sort((a, b) => a - b);
  const n = nums.length;

  // 2. 边界处理：数组长度小于3时，直接返回空结果
  if (n < 3) return result;

  // 3. 固定第一个数（i），遍历范围：0 ~ n-3（需留 left=i+1 和 right=n-1）
  for (let i = 0; i < n - 2; i++) {
    // 剪枝优化：排序后若当前数>0，后续数均为正数，三数和必>0，直接终止循环
    if (nums[i] > 0) break;

    // 去重1：跳过与前一个元素相同的i（避免重复三元组，如[-1,-1,2]只生成一次）
    // 注意：i>0 是防止越界（i=0时无i-1）
    if (i > 0 && nums[i] === nums[i - 1]) continue;

    // 4. 初始化双指针：left在i右侧，right在数组末尾
    let left = i + 1;
    let right = n - 1;

    // 5. 双指针遍历（left < right 是循环终止条件，避免指针交叉）
    while (left < right) {
      const sum = nums[i] + nums[left] + nums[right];

      if (sum === 0) {
        // 找到有效三元组，加入结果数组
        result.push([nums[i], nums[left], nums[right]]);

        // 去重2：跳过left指针的重复元素（避免同一i下生成重复三元组）
        // 注意：需判断 left < right，防止指针越界（如left已到末尾）
        while (left < right && nums[left] === nums[left + 1]) {
          left++;
        }
        // 去重3：跳过right指针的重复元素
        while (left < right && nums[right] === nums[right - 1]) {
          right--;
        }

        // 找到有效解后，双指针同时移动（否则会重复计算同一组元素）
        left++;
        right--;
      } else if (sum < 0) {
        // 和偏小：需增大数值，左指针右移（排序后右侧数更大）
        left++;
      } else {
        // 和偏大：需减小数值，右指针左移（排序后左侧数更小）
        right--;
      }
    }
  }

  return result;
};

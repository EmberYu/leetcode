var maxSubArray = function (nums) {
  let pre = 0; // 记录 dp[i-1]：以当前元素前一个元素结尾的最大子数组和
  let maxSum = nums[0]; // 初始化为第一个元素（避免数组全负的情况）

  for (const num of nums) {
    // 状态转移：选择“接前一个子数组”或“重新开始”
    pre = Math.max(pre + num, num);
    // 更新全局最大和
    maxSum = Math.max(maxSum, pre);
  }

  return maxSum;
};

/**
 * @param {number[]} nums 待排列的数组（无重复元素）
 * @return {number[][]} 所有全排列
 */
var permute = function (nums) {
  // 1. 初始化核心状态
  const result = []; // 结果集：存储所有完整排列
  const path = []; // 当前路径：存储正在构建的排列
  const used = new Array(nums.length).fill(false); // 标记元素是否已使用

  // 2. 回溯函数（核心）
  function backtrack() {
    // 终止条件：当前路径长度 = 数组长度 → 生成一个完整排列
    if (path.length === nums.length) {
      // 注意：需拷贝 path（否则后续修改会覆盖结果）
      result.push([...path]);
      return; // 回溯到上一层
    }

    // 遍历所有元素，作为当前层的选择
    for (let i = 0; i < nums.length; i++) {
      // 跳过已使用的元素（避免重复选择）
      if (used[i]) continue;

      // 步骤a：选择当前元素
      path.push(nums[i]); // 加入当前路径
      used[i] = true; // 标记为已使用

      // 步骤b：递归探索下一层（继续构建路径）
      backtrack();

      // 步骤c：回溯（撤销选择，恢复状态）
      used[i] = false; // 标记为未使用
      path.pop(); // 从路径中移除当前元素
    }
  }

  // 3. 启动回溯（从空路径开始探索）
  backtrack();

  return result;
};

// 测试：输入 [1,2,3]，输出所有 6 种排列
console.log(permute([1, 2, 3]));
// 输出：[[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]

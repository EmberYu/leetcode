/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function (grid) {
  // 处理边界情况：网格为空或行长度为 0
  if (!grid || grid.length === 0) return 0;

  let count = 0; // 岛屿数量
  const rows = grid.length; // 网格行数
  const cols = grid[0].length; // 网格列数

  // DFS 函数：标记当前岛屿的所有相邻 '1' 为 '0'（已访问）
  const dfs = (i, j) => {
    // 终止条件：越界 或 当前单元格不是 '1'
    if (i < 0 || i >= rows || j < 0 || j >= cols || grid[i][j] !== "1") {
      return;
    }
    // 标记当前单元格为已访问（改为 '0'）
    grid[i][j] = "0";
    // 递归遍历上下左右四个方向
    dfs(i - 1, j); // 上
    dfs(i + 1, j); // 下
    dfs(i, j - 1); // 左
    dfs(i, j + 1); // 右
  };

  // 逐行逐列遍历网格
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (grid[i][j] === "1") {
        // 发现新岛屿
        count++; // 数量加 1
        dfs(i, j); // 标记该岛屿的所有 '1'
      }
    }
  }

  return count;
};

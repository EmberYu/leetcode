/**
 * @param {number[][]} grid
 * @return {number}
 */
var islandPerimeter = function (grid) {
  let meter = 0;
  for (var r = 0; r < grid.length; r++) {
    for (c = 0; c < grid[r].length; c++) {
      meter += grid[r][c] === 1 ? 4 - getNeighbors(grid, r, c) : 0;
    }
  }
  return meter;
};

var getNeighbors = function (grid, r, c) {
  let neighbors = 0;
  const top = r - 1;
  const bottom = r + 1;
  const left = c - 1;
  const right = c + 1;
  if (top >= 0) {
    neighbors += grid[top][c] === 1 ? 1 : 0;
  }
  if (left >= 0) {
    neighbors += grid[r][left] === 1 ? 1 : 0;
  }
  if (bottom < grid.length) {
    neighbors += grid[bottom][c] === 1 ? 1 : 0;
  }
  if (right < grid[0].length) {
    neighbors += grid[r][right] === 1 ? 1 : 0;
  }
  return neighbors;
};

const grid = [
  [0, 1, 0, 0],
  [1, 1, 1, 0],
  [0, 1, 0, 0],
  [1, 1, 0, 0],
];

console.log(islandPerimeter(grid), 16);

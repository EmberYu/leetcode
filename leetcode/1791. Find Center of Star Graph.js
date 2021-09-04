/**
 * @param {number[][]} edges
 * @return {number}
 */
var findCenter = function (edges) {
  const map = new Map();
  for (let path of edges) {
    map.set(path[0], map.has(path[0]) ? map.get(path[0]) + 1 : 1);
    map.set(path[1], map.has(path[1]) ? map.get(path[1]) + 1 : 1);
  }
  for (let [key, value] of map.entries()) {
    if (value === edges.length) {
      return key;
    }
  }
};

const edges = [
  [1, 2],
  [5, 1],
  [1, 3],
  [1, 4],
];

findCenter(edges);

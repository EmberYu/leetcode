/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function (root) {
  if (root === null) {
    return [];
  }
  const output = [];
  const depth = 0;
  traverseNode(output, depth, root);
  return output;
};

var traverseNode = function (arr, depth, node) {
  arr[depth] = arr[depth] || [];
  arr[depth].push(node.val);
  if (node.left !== null) {
    traverseNode(arr, depth + 1, node.left);
  }
  if (node.right !== null) {
    traverseNode(arr, depth + 1, node.right);
  }
};

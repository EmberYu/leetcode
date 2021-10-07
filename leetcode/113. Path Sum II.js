const TreeNode = require("../util/binaryTree");

const root = [5, 4, 8, 11, null, 13, 4, 7, 2, null, null, 5, 1];

const tree = TreeNode.Array2Node(root);

tree.log();

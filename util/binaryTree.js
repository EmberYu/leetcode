class TreeNode {
  constructor(val, left, right) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

TreeNode.Array2Node = function (arr) {
  if (!arr) {
    return null;
  }
  const root = new TreeNode(arr[0]);
  const w8List = [root];
  for (var i = 1; i < arr.length; i++) {
    const node = w8List.shift();
    node.left = arr[i] === null ? null : new TreeNode(arr[i]);
    i++;
    if (i >= arr.length) {
      return root;
    }
    node.right = arr[i] === null ? null : new TreeNode(arr[i]);
    if (node.left !== null) {
      w8List.push(node.left);
    }
    if (node.right !== null) {
      w8List.push(node.right);
    }
  }
  return root;
};

TreeNode.prototype.log = function () {
  const root = this;
  const w8List = [root];
  const resultArr = [];
  while (w8List.length !== 0) {
    debugger;
    if (w8List.every((val) => val === null)) {
      break;
    }
    const size = w8List.length;
    resultArr.push([]);
    for (var i = 0; i < size; i++) {
      const node = w8List.shift();
      if (node === null) {
        resultArr[resultArr.length - 1].push(null);
        w8List.push(null);
        w8List.push(null);
      } else {
        resultArr[resultArr.length - 1].push(node.val);
        w8List.push(node.left);
        w8List.push(node.right);
      }
    }
  }
  console.log(resultArr);
};

module.exports = TreeNode;

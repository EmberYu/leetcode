var minDepth = function (root) {
  if (root === null) {
    return 0;
  }
  let depth = 1;
  let queue = [root];
  while (queue.length) {
    let currentQueue = [];
    for (node of queue) {
      if (node.left === null && node.right === null) {
        return depth;
      }
      node.left !== null && currentQueue.push(node.left);
      node.right !== null && currentQueue.push(node.right);
      queue = currentQueue;
    }
    depth++;
  }
};

const { ListNode, buildTree } = require("../util/ListNode");
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var reverseKGroup = function (head, k) {
  const tail = new ListNode(head.val, null);
  let newHead = tail;
  let pointer = head;
  let count = 1;
  while (count < k) {
    pointer = pointer.next;
    if (pointer) {
      newHead = new ListNode(pointer.val, newHead);
      count++;
    } else {
      break;
    }
  }
  if (count === k) {
    if (pointer.next !== null) {
      tail.next = reverseKGroup(pointer.next, k);
    }
    return newHead;
  } else {
    return head;
  }
};

const testTree = buildTree([1, 2, 3, 4, 5]);

reverseKGroup(testTree, 3);

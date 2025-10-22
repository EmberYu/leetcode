/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function (head) {
  if (head === null) return null;
  let reverse;
  let curNode = head;
  reverse = new ListNode(head.val, null);

  while (curNode.next !== null) {
    reverse = new ListNode(curNode.next.val, reverse);
    curNode = curNode.next;
  }
  return reverse;
};

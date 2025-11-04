/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
var reverseBetween = function (head, left, right) {
  // 1. 创建虚拟头节点，避免处理left=1的边界情况
  const dummy = new ListNode(0);
  dummy.next = head;

  // 2. 定位pre：反转段的前一个节点（第left-1个节点）
  let pre = dummy;
  for (let i = 0; i < left - 1; i++) {
    pre = pre.next;
  }

  // 3. 定位cur：反转段的第一个节点（第left个节点）
  let cur = pre.next;

  // 4. 反转left到right段：共需要反转right-left次
  for (let i = 0; i < right - left; i++) {
    const nextNode = cur.next; // 暂存cur的下一个节点
    cur.next = nextNode.next; // cur指向nextNode的下一个节点（断开与nextNode的连接）
    nextNode.next = pre.next; // nextNode指向已反转部分的头节点（接入反转段）
    pre.next = nextNode; // pre指向nextNode（更新反转段的头节点）
  }

  // 5. 返回虚拟头节点的next（新链表头）
  return dummy.next;
};

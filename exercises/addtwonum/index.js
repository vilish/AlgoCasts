// 2. Add Two Numbers
// Medium

// 5793

// 1493

// Favorite

// Share
// You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order and each of their nodes contain a single digit. Add the two numbers and return it as a linked list.

// You may assume the two numbers do not contain any leading zero, except the number 0 itself.

// Example:

// Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
// Output: 7 -> 0 -> 8
// Explanation: 342 + 465 = 807.

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
const ListNode = function (val) {
    this.val = val;
    this.next = null;
}

ListNode.prototype.getLast = function () {
    let node = this;
    if (!this)
        return null;

    while (node.next) {
        node = node.next;
    }
    return node;
}

ListNode.prototype.insertLast = function (val) {
    let last = this.getLast();
    // last.next = new ListNode(val);

    if (!last) {
        last = new ListNode(val);
    } else {
        last.next = new ListNode(val);
    }

}

var addTwoNumbers = function (l1, l2) {
    if (!l1)
        return l2;
    if (!l2)
        return l1;

    let sum = l1.val + l2.val;
    let carryOver = Math.floor(sum / 10);
    let result = new ListNode(sum % 10);

    while (l1.next && l2.next) {
        l1 = l1.next;
        l2 = l2.next;
        sum = l1.val + l2.val + carryOver;
        result.insertLast(sum % 10);
        carryOver = Math.floor(sum / 10);
    }

    while (l1.next) {
        l1 = l1.next;
        sum = l1.val + carryOver;
        result.insertLast(sum % 10);
        carryOver = Math.floor(sum / 10);
    }

    while (l2.next) {
        l2 = l2.next;
        sum = l2.val + carryOver;
        result.insertLast(sum % 10);
        carryOver = Math.floor(sum / 10);

    }

    if (carryOver > 0) {
        result.insertLast(carryOver);
    }

    console.log(result);
    console.log(result.getLast().val);
    return result;

};


const l1 = new ListNode(5);
// l1.insertLast(4);
// l1.insertLast(3);
// l1.insertLast(1);
// console.log(l1.getLast());

const l2 = new ListNode(5);
// l2.next = new ListNode(6);
// l2.next.next = new ListNode(8);
// l2.insertLast(6);
l2.insertLast(9);
// l2.insertLast(1);


console.log(l1);
console.log(l2);

addTwoNumbers(l1, l2);
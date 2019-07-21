// --- Directions
// Return the 'middle' node of a linked list.
// If the list has an even number of elements, return
// the node at the end of the first half of the list.
// *Do not* use a counter variable, *do not* retrieve
// the size of the list, and only iterate
// through the list one time.
// --- Example
//   const l = new LinkedList();
//   l.insertLast('a')
//   l.insertLast('b')
//   l.insertLast('c')
//   midpoint(l); // returns { data: 'b' }

const L = require('./linkedlist');
const LinkedList = L.LinkedList;

function midpoint(list) {
    let slow = list.head;
    if (!slow)
        return;
    let fast = slow.next;

    while (fast && fast.next) {
        slow = slow.next;
        if (fast.next.next) {
            fast = fast.next.next;
        } else
            break;
    }

    return slow;
}

const l = new LinkedList();
l.insertLast('a');
l.insertLast('b');
l.insertLast('c');

midpoint(l);

module.exports = midpoint;

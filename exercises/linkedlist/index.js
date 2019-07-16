// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {

    constructor(data, next) {
        this.data = data;
        this.next = next;
    }
}

class LinkedList {

    constructor() {
        this.head = null;
    }

    insertFirst(data) {
        let node = new Node(data);
        node.data = data;
        node.next = this.head;
        this.head = node;
    }

    size() {
        let counter = 0;
        let node = this.head;
        while (node) {
            node = node.next;
            counter++;
        }
        return counter;
    }

    getFirst() {
        return this.head;
    }

    getLast() {
        let node = this.head;
        while (node && node.next) {
            node = node.next;
        }
        return node;
    }

    clear() {
        this.head = null;
    }

    removeFirst() {
        this.head = this.head.next;
    }

    removeLast() {
        let firstNode = this.head ? this.head.next : this.head;
        debugger;
        while (this.head && this.head.next) {
            debugger;
            this.head = this.head.next;
        }
        debugger;
        this.head = null;
        this.head = firstNode;
    }
}

const l = new LinkedList();
// expect(l.size()).toEqual(0);
l.insertFirst(1);
l.insertFirst(2);
l.insertFirst(3);
l.removeLast();
console.log(l.size());

module.exports = {
    Node,
    LinkedList
};
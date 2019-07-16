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
        this.head = new Node(data, this.head);
        // let node = new Node(data);
        // node.next = this.head;
        // this.head = node;
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
        while (node.next) {
            node = node.next;
        }
        return node;
    }

    clear() {
        this.head = null;
    }

    removeFirst() {
        if (!this.head)
            return;
        this.head = this.head.next;
    }

    removeLast() {
        // if list is empty
        if (!this.head)
            return;

        // if list has only one element
        if (!this.head.next) {
            this.head = null;
            return;
        }

        let node = this.head;
        let next = node.next;

        while (next.next) {
            node = next;
            next = next.next;
        }
        node.next = null;


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
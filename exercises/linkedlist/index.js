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
        if (!this.head)
            return null;

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

    insertLast(data) {
        let last = this.getLast();

        if (last) {
            last.next = new Node(data);
        } else {
            this.head = new Node(data)
        }
    }

    getAt(index) {
        if (index > this.size() - 1 || index < 0) {
            return null;
        }

        let node = this.head;
        let i = 0;
        while (i++ < index && node) {
            node = node.next;
        }
        return node;
    }

    removeAt(index) {
        let node = this.getAt(index);

        if (node) {
            let previous = this.getAt(index - 1);
            let next = this.getAt(index + 1);

            if (previous)
                previous.next = next;
            else
                this.head = next;

        }


    }


}

// const l = new LinkedList();
// // expect(l.size()).toEqual(0);
// l.insertFirst(1);
// l.insertFirst(2);
// l.insertFirst(3);
// l.removeLast();
// console.log(l.size());

module.exports = {
    Node,
    LinkedList
};
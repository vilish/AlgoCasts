// --- Directions
// 1) Implement the Node class to create
// a binary search tree.  The constructor
// should initialize values 'data', 'left',
// and 'right'.
// 2) Implement the 'insert' method for the
// Node class.  Insert should accept an argument
// 'data', then create an insert a new node
// at the appropriate location in the tree.
// 3) Implement the 'contains' method for the Node
// class.  Contains should accept a 'data' argument
// and return the Node in the tree with the same value.

class Node {

    constructor(val) {
        this.data = val;
        this.left = null;
        this.right = null;
    }

    insert(val) {
        let node = new Node(val);

        if (val < this.data) {
            this.left ? this.left.insert(val) : this.left = node;
        } else {
            this.right ? this.right.insert(val) : this.right = node;
        }
    }




    contains(val) {
        if (val === this.data) {
            return this;
        }

        if (val < this.data && this.left) {
            return this.left.contains(val);
        } else if (val > this.data && this.right) {
            return this.right.contains(val);
        }

        return null;
    }
}

module.exports = Node;
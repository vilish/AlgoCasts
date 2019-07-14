// --- Description
// Create a queue data structure.  The queue
// should be a class with methods 'add' and 'remove'.
// Adding to the queue should store an element until
// it is removed
// --- Examples
//     const q = new Queue();
//     q.add(1);
//     q.remove(); // returns 1;

class Queue {

    constructor() {
        this.data = [];
    }

    add(record) {
        // this.data.unshift(record);
        if (this.data.length < 1) {
            this.data.push(record)
        } else {
            let temp = this.data[0];
            for (let i = 1; i < this.data.length; i++) {
                temp = this.data[i];
                this.data[i] = this.data[i - 1];

            }
            this.data[0] = record;
            this.data.push(temp);
        }


    }

    remove() {
        return this.data.pop();
    }
}


module.exports = Queue;
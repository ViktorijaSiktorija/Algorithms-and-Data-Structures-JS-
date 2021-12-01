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
    constructor(){
        this.data = [];
    }
    add(record){
        this.data.unshift(record);
    }
    remove(){
        return this.data.pop();
    }
}

const q = new Queue();
q.add(1);
q.remove(); // returns 1;

// Konstrukcija

function Queue () { 
    collection = [];
    this.print = function() {
        console.log(collection);
    };
    this.enqueue = function(element) {
        collection.push(element);
    };
    this.dequeue = function() {
        return collection.shift(); 
    };
    this.front = function() {
        return collection[0];
    };
    this.size = function() {
        return collection.length; 
    };
    this.isEmpty = function() {
        return (collection.length === 0); 
    };
}

var q = new Queue(); 
q.enqueue('a'); 
q.enqueue('b');
q.enqueue('c');
q.print();
q.dequeue();
console.log(q.front());
q.print();

module.exports = Queue;

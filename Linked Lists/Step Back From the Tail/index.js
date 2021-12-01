// --- Directions
// Given a linked list, return the element n spaces
// from the last node in the list.  Do not call the 'size'
// method of the linked list.  Assume that n will always
// be less than the length of the list.
// --- Examples
//    const list = new List();
//    list.insertLast('a');
//    list.insertLast('b');
//    list.insertLast('c');
//    list.insertLast('d');
//    fromLast(list, 2).data // 'b'

class Node {
    constructor(data, next = null) {
      this.data = data;
      this.next = next;
    }
  }
  
  class LinkedList {
    constructor(values = []) {
      this.head = null;
  
      for (let value of values) {
        this.insertLast(value);
      }
    }
  
    clear() {
      this.head = null;
    }
  
    size() {
      let counter = 0;
      let node = this.head;
  
      while (node) {
        counter++;
        node = node.next;
      }
  
      return counter;
    }
  
    getAt(index) {
      if (!this.head) {
        return null;
      }
  
      let counter = 0;
      let node = this.head;
      while (node) {
        if (counter === index) {
          return node;
        }
        node = node.next;
        counter++;
      }
      return null;
    }
  
    insertAt(data, index) {
      if (!this.head) {
        this.head = new Node(data);
        return;
      }
  
      if (index === 0) {
        this.head = new Node(data, this.head);
        return;
      }
  
      let counter = 1;
      let previous = this.head;
      let node = this.head.next;
      while (node) {
        if (counter === index) {
          previous.next = new Node(data, node);
          return;
        }
        previous = node;
        node = node.next;
        counter++;
      }
  
      previous.next = new Node(data, node);
    }
  
    removeFirst() {
      if (!this.head) {
        return;
      }
  
      this.head = this.head.next;
    }
  
    removeLast() {
      if (!this.head) {
        return;
      }
  
      if (!this.head.next) {
        this.head = null;
        return;
      }
  
      let previous = this.head;
      let node = this.head.next;
      while (node.next) {
        previous = node;
        node = node.next;
      }
      previous.next = null;
    }
  
    removeAt(index) {
      if (!this.head) {
        return;
      }
  
      let counter = 0;
      let node = this.head;
      while (node) {
        if (counter === index - 1) {
          if (node.next) {
            return (node.next = node.next.next);
          } else {
            return (node.next = null);
          }
        }
        node = node.next;
        counter++;
      }
    }
  
    getFirst() {
      return this.head;
    }
  
    insertFirst(data) {
      this.head = new Node(data, this.getFirst());
    }
  
    getLast() {
      if (!this.head) {
        return null;
      }
  
      let node = this.head;
      while (node.next) {
        node = node.next;
      }
  
      return node;
    }
  
    insertLast(data) {
      const last = this.getLast();
  
      if (last) {
        last.next = new Node(data);
        return last.next;
      } else {
        this.head = new Node(data);
        return this.head;
      }
    }
  
    forEach(fn) {
      if (!this.head) {
        return null;
      }
  
      let node = this.head;
      while (node) {
        fn(node);
        node = node.next;
      }
    }
  
    *[Symbol.iterator]() {
      let node = this.head;
      while (node) {
        yield node;
        node = node.next;
      }
    }
  }

function fromLast(list, n) {
    let slow = list.getFirst();
    let fast = list.getFirst();

    while (n > 0){
        fast = fast.next;
        n--; 
    }
    while (fast.next){ 
        slow = slow.next;
        fast = fast.next;
    }
    return slow; 
}

   const list = new LinkedList();
   list.insertLast('a');
   list.insertLast('b');
   list.insertLast('c');
   list.insertLast('d');
   console.log(fromLast(list, 2).data) // 'b'

module.exports = fromLast;

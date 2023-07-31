/** Node: node for a singly linked list. */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/** LinkedList: chained together nodes. */

class LinkedList {
  constructor(vals = []) {
    this.head = null;
    this.tail = null;
    this.length = 0;

    for (let val of vals) this.push(val);
  }

  /** push(val): add new value to end of list. */

  push(val) {
    let newNode = new Node(val);

    //set empty list head and tail to newNode
    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
    //add newNode after current tail and update tail
    this.tail.next = newNode;
    this.tail = newNode;
    }

    //increment list length by one
    this.length++;
  }

  /** unshift(val): add new value to start of list. */

  unshift(val) {
    let newNode = new Node(val);

    //For empty list set head and tail to new node
    if (this.head === null){
      this.head = newNode;
      this.tail = newNode;
    } else {
      //if list contains nodes, then set new node as head and update pointer
      newNode.next = this.head;
      this.head = newNode;
    }
    //increase linked list length by one
    this.length++;
  }

  /** pop(): return & remove last item. */

  pop() {
    //empty linked list case
    if (this.length === 0) return undefined;

    let current = this.head;
    let newTail = current;

    while (current.next) {
      newTail = current;
      current = current.next;
    }

    //update tail, remove last node, and decrement length by one
    this.tail = newTail;
    this.tail.next = null;
    this.length--;

    //if list is now empty, then update head to be null;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }

    /**shorthand pop method code
    return this.removeAt(this.length - 1); */

    return current.val;
  }

  /** shift(): return & remove first item. */

  shift() {
    //empty linked list case
    if (this.length === 0) return undefined;

    //update head, remove first node, and decrement length by one
    let currentHead = this.head;
    this.head = currentHead.next;
    this.length--;

    //if list is now empty, then update tail to be null;
    if (this.length === 0) {
      this.tail = null;
    }

    /**shorthand shift method code
    return this.removeAt(0); */

    return currentHead.val;
  }

  /** getAt(idx): get val at idx. */

  getAt(idx) {
    //invalid idx, negative or greater than list length, returns undefined
    if (idx < 0 || idx >= this.length) return undefined;

    let current = this.head;
    let count = 0;

    //iterate over list while count < idx and increment count until count equals idx 
    while (count !== idx) {
      current = current.next;
      count++;
    }
  
    /**shorthand getAt method code
    return this._get(idx).val; */

    return current.val;
  }

  /** setAt(idx, val): set val at idx to val */

  setAt(idx, val) {
    //invalid idx, negative or greater than list length, returns undefined
    if (idx < 0 || idx >= this.length) return undefined;
    
    let current = this.head;
    let count = 0;

    //iterate over list while count < idx and increment count until count equals idx 
    while (count !== idx) {
      current = current.next;
      count++;
    }
    /**shorthand setAt method code
    let cur = this._get(idx);
    cur.val = val; */

    //access current val at node and set to assigned val and return true
    current.val = val;
    return true;
  }

  /** insertAt(idx, val): add node w/val before idx. */

  insertAt(idx, val) {
    //invalid negative idx or greater than list length, returns undefined
    if (idx < 0) return undefined;

    //call unshift method if idx == 0
    if (idx === 0) {
      this.unshift(val);
      return true;
    }

    //call push method if idx == list.length
    if (idx === this.length) {
      this.push(val);
      return true;
    }

    const newNode = new Node(val);
    
    let current = this.head;
    let count = 0;
    let prevNode = null;

    //iterate over list while count < idx and increment count until count equals idx 
    while (count !== idx) {
      prevNode = current;
      current = current.next;
      count++;
    }

    //when count equals idx, insert new node between previous and current node, increment length by one, and return true
    prevNode.next = newNode;
    newNode.next = current;
    this.length++;
    return true;
  }

  /** removeAt(idx): return & remove item at idx, */

  removeAt(idx) {
    //invalid idx, negative or greater than list length, returns undefined
    if (idx < 0 || idx >= this.length) return undefined;

    //call pop method for one-item list
    if (this.length === 1) return this.pop();

    //call pop method if idx is last index
    if (idx === this.length - 1) return this.pop();

    //call unshift method if idx == 0
    if (idx === 0) return this.unshift();

    let current = this.head;
    let count = 0;
    let prevNode = null;

    //iterate over list while count < idx and increment count until count equals idx 
    while (count !== idx) {
      prevNode = current;
      current = current.next;
      count++;
    }

    //when count equals idx, remove node at idx and connect previous node to one after, decrement length by one, and return removed value
    prevNode.next = current.next;
    this.length--;
    return current.val;
  }

  /** average(): return an average of all values in the list */

  average() {
    //if list is empty then return value of zero
    if (this.length === 0) return 0;
    
    let sum = 0;
    let current = this.head;

    //iterate over linked list and accumulate values in sum variable
    while (current) {
      sum += current.val;
      current = current.next;
    }

    //divide accumulated sum by list length and return avg
    let avg = (sum / this.length)
    return avg
  }
}

module.exports = LinkedList;
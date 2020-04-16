// implement a queue using linkedLists
var LinkedList = require('./LinkedList');

class Queue_ {
  constructor() {
    this._list = new LinkedList();
  }

  enqueue(value) {
    this._list.append(value);
  }

  dequeue() {
    let node = this._list.popFirst();
    return node.value;
  }

  peek() {
    return this._list.head ? this._list.head.value : null;
  }

  isEmpty() {
    return this._list.head == null;
  }

  _toArray() {
    return this._list._toArray();
  }
}


class Queue {
  constructor() {
    this._data = [];
    this._head = 0;
  }

  size() {
    return this._data.length;
  }

  enqueue(value) {
    this._data.push(value);
  }

  dequeue() {
    return this._data.shift(); 
    // TODO: need to find out the cost of .shift() -> O(N)
  }

  peek() {
    if (this.size() > 0) return this._data[0];
    return null;
  }

  isEmpty() {
    return this.size() == 0;
  }

  _toArray() {
    return this._data;
  }
}

// alias
Queue.prototype.add = Queue.prototype.enqueue;
Queue.prototype.remove = Queue.prototype.dequeue;

module.exports = Queue;

/* TEST */
/*
var q = new Queue();
q.add('a');
q.add('b');
q.add('c');
console.log(q._toArray());
console.log(q.remove(), 'a');
console.log(q.peek(), 'b');
console.log(q.remove(), 'b');
console.log(q.remove(), 'c');
console.log(q.isEmpty(), true);
console.log(q._toArray());
*/

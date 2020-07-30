// simple implementation of a stack 
// using WeakMap (Immutable)

/*
Interface:
- push(value)
- pop()
- peek()
- isEmpty()
- size()
*/
const data = new WeakMap()
class Stack {
  constructor() {
    data.set(this, [])
  }

  size() {
    const result = data.get(this)
    return result.length
  }

  isEmpty() {
    return this.size() == 0
  }

  push(value) {
    const result = data.get(this)
    result.push(value)
  }

  pop() {
    const s = data.get(this)
    const result = s.pop()
    return result
  }

  peek() {
    if (this.isEmpty()) return null
    const result = data.get(this)
    return result[this.size() - 1]
  }

  _toArray() {
    const result = data.get(this)
    return result
  }
}

module.exports = Stack;

/* TEST */

// var s = new Stack();
// s.push('a');
// s.push('b');
// s.push('c');
// console.log(s.pop(), 'c');
// console.log(s.peek(), 'b');
// console.log(s.pop(), 'b');
// console.log(s.pop(), 'a');
// console.log(s.isEmpty(), true);

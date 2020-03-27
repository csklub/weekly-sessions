// a new implementation of the linked list
/*
ADT:
# Main operations
prepend(value)        -> Add a node in the beginning
append(value)         -> Add a node in the end
pop()                 -> Remove a node from the end
popFirst()            -> Remove a node from the beginning
head()                -> Return the first node
tail()                -> Return the last node
remove(Node)*         -> Remove Node from the list
*/

// NOTE: no type-safety

class Node {
    constructor(value) {
        this.value = value
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    append(value) {
        let node = new Node(value);
        // if list is empty
        if (!this.head) {
            this.head = node;
            this.tail = node;
        }
        else {
            this.tail.next = node;
            this.tail = node;
        }
    }

    prepend(value) {
        let node = new Node(value);
        node.next = this.head;
        this.head = node;
    }

    pop() {
        let it = this.head;
        // only one or no item exists
        if (!it) return null;
        if (!it.next) {
            this.head = null;
            return it;
        }
        // move till the 2nd last
        while (it.next.next)
            it = it.next;
        
        let last = this.tail;
        this.tail = it;
        this.tail.next = null;
        return last;
    }

    popFirst() {
        let first = this.head;
        if (this.head && this.head.next) {
            this.head = this.head.next;
        }
        return first;
    }

    head() {
        return this.head;
    }

    tail() {
        return this.tail;
    }

    _toArray() {
        let arr = [];
        let it = this.head;
        while (it) {
            arr.push(it.value);
            it = it.next;
        }

        return arr;
    }
}

module.exports = LinkedList;

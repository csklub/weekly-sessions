const LinkedList = require('./LinkedList');

class Node {
    constructor(value) {
        this.prev = null
        this.value = value
        this.next = null
    }
}

/**
 * Methods inside double linked list are:
 * head(), tail(), size(), isEmpty(), 
 * append(), 
 */
class DoubleLinkedList extends LinkedList {
    constructor() {
        super()
    }

    append(value) {
        let node = new Node(value);
        // if list is empty
        if (!this.head) {
            this.head = node;
        }
        else {
            this.tail.next = node
            node.prev = this.tail
        }
        // reassign the tail to be the new node
        this.tail = node;
        this._size++;
    }

    prepend(value) {
        let node = new Node(value);
        let curr = this.head
        node.next = curr
        curr.prev = node.next
        this.head = node;
        this._size++;
    }
}

// const newItem = new DoubleLinkedList()
// newItem.append(1)
// newItem.append(2)
// newItem.append(3)
// console.log(newItem.head)

module.exports = DoubleLinkedList

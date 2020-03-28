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
size()                -> Return the length/size of the list
isEmpty()             -> Check if a list is Empty
insertAt(value, index) -> Add a node at a given index
removeAt(index)       -> Remove a node at a given index
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
        // initiate size of list to 0
        this.sizeOfList = 0;
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
        this.sizeOfList++;
    }

    prepend(value) {
        let node = new Node(value);
        node.next = this.head;
        this.head = node;
        this.sizeOfList++;
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
        this.sizeOfList--;
        return last;
    }

    popFirst() {
        let first = this.head;
        if (this.head && this.head.next) {
            this.head = this.head.next;
            first.next = null;
        }
        else this.head = null;
        this.sizeOfList--;
        return first;
    }

    insertAt(value, index) {
        if (index > 0 && index > this.sizeOfList) {
            return false;
        } else {
            const node = new Node(value);
            let curr, prev;
            curr = this.head;
            if (index === 0) {
                node.next = this.head;
                this.head = node;
            } else {
                curr = this.head;
                let initialIndex = 0;
                while (initialIndex < index) {
                    initialIndex++;
                    prev = curr;
                    curr = curr.next;
                }
                node.next = curr;
                prev.next = node;
            }
            this.sizeOfList++;
        }
    }

    removeAt(index) {
        if (index > 0 && index > this.sizeOfList) {
            return false;
        } else {
            let curr, prev;
            curr = this.head;
            prev = curr;
            if (index === 0) {
                this.head = curr.next;
            } else {
                let initialIndex = 0;
                while (initialIndex < index) {
                    initialIndex++;
                    prev = curr;
                    curr = curr.next;
                }
                prev.next = curr.next;
            }
            this.sizeOfList--;
        }
    }

    head() {
        return this.head;
    }

    tail() {
        return this.tail;
    }

    size() {
        return this.sizeOfList;
    }

    isEmpty() {
        return this.sizeOfList === 0;
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

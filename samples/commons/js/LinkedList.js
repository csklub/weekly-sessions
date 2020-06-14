class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        // initiate size of list to 0
        this._size = 0;
    }

    head() {
        return this.head;
    }

    tail() {
        return this.tail;
    }

    size() {
        return this._size;
    }

    isEmpty() {
        return this._size === 0;
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

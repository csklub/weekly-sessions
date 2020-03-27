// Issue #7

/*
Given a linked list, swap every two adjacent nodes and return its head.

You may not modify the values in the list's nodes, only nodes itself may be changed.

```
Given 1->2->3->4, 
you should return the list as 2->1->4->3.
```
*/
const { LinkedList, Node } = require("../commons/js/LinkedList");

// create sample linked list
let l = new LinkedList();

for (let elem of [4, 7, 1, 2]) {
    l.append(elem);
}

console.log(l._toArray());

// assuming a list of at least 2 items

function createListOfTwo(node1, node2) {
    // create the list and swap it already
    let l = new LinkedList();
    l.appendNode(node2);
    l.appendNode(node1);
    node1.next = null;

    return l;
}

function joinList(l1, l2) {
    l1.tail.next = l2.head;
    l1.tail = l2.tail;

    return l1;
}

// test

// firt iteration
let cur = l.head.next;
let prev = l.head;
let nextPrev = prev.next.next;

let newList = createListOfTwo(prev, cur);
console.log("swapped:", newList._toArray());

// second iteration
cur = nextPrev.next;
prev = nextPrev;

let newList2 = createListOfTwo(prev, cur);
let finalList = joinList(newList, newList2);

console.log(finalList._toArray());

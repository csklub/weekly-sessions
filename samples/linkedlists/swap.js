// Issue #7

/*
Given a linked list, swap every two adjacent nodes and return its head.

You may not modify the values in the list's nodes, only nodes itself may be changed.

```
Given 1->2->3->4, 
you should return the list as 2->1->4->3.
```
*/
const LinkedList = require("../commons/js/LinkedList");

// fresh take
/*

starting position:

prev  cur
  |    |
  V    V
  1 -> 2 -> 3 -> 4 -> null

then cur and prev keeps skipping
2 steps after swap is done.

so the next position is:

    prevCur prev cur
       |    |    |
       V    V    V
  2 -> 1 -> 3 -> 4 -> null

and so forth...

However, the swap also swaps up
prev and cur, and therefore we have
to recalibrate/restore them; 
hence the "recalibrate" section in the code.

*/

function swapLinkedList(list) {
    function _swap(prevCur, prev, cur) {
        if (prevCur == null) list.head = cur;
        else prevCur.next = cur;
        prev.next = cur.next;
        cur.next = prev;
    }

    // the list must have at least 2 items
    if (!list.head || !list.head.next) return;

    let cur = list.head.next;
    let prev = list.head
    let prevCur = null;

    while (cur) {
        _swap(prevCur, prev, cur);
        // recalibrate prev, cur
        let temp = cur;
        cur = prev;
        prev = temp;
        // move to the next pair if available
        if (cur.next && cur.next.next) {
            prevCur = cur;
            prev = cur.next;
            cur = cur.next.next;
        }
        else return;
    }
}

// test
// quick helper function
function listFromArray(arr) {
    let list = new LinkedList();
    for (let elem of arr) {
        list.append(elem);
    }
    return list;
}

// test case 1
let l = listFromArray([1, 2, 4, 7, 10]);

console.log(l._toArray()); // [ 1, 2, 4, 7, 10 ]
swapLinkedList(l);
console.log(l._toArray()); // [ 2, 1, 7, 4, 10 ]

// test case 2
l = listFromArray([1, 2, 3, 4]);
swapLinkedList(l);
console.log(l._toArray()); // [ 2, 1, 4, 3 ]

// test case 3
l = listFromArray([1]);
swapLinkedList(l);
console.log(l._toArray()); // [ 1 ]

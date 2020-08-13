

/* algo:

- start from root node
- s = -1
- repeat -- until leaf while (node):
    - if num > node.key:
        - s = node.key
        - go to left // node = node.right 
    - else:
        - go to the left // node = node.left
- return s
*/

const { Tree } = require("../commons/js/BST")

function largestSmallerKey(tree, num) {
    let smaller = -1
    let node = tree.root

    while (node) {
        if (num > node.key) {
            smaller = node.key
            node = node.right
        }
        else {
            node = node.left
        }
    }

    return smaller
}

// test
let arr = [ 20, 9, 25, 5, 12, 11, 14, 18, 19]

let bst = new Tree()
bst.fromArray(arr)

// check that all is ok
// bst.traverse()

console.log(largestSmallerKey(bst, 17)) // 16
console.log(largestSmallerKey(bst, 5)) // -1
console.log(largestSmallerKey(bst, 30)) // 25
console.log(largestSmallerKey(bst, 23)) // 20

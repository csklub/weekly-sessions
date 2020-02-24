const Tree = require('./lib/BST').Tree

function swap(node1, node2) {
    const temp = node1
    node1 = node2
    node2 = temp
    // [node1, node2] = [node2, node1]
    // python: node1, node2 = node2, node1
}

function invertTree(node) {
    if (node) {
        if (node.left || node.right) {
            swap(node.left, node.right);
            invertTree(node.left);
            invertTree(node.right);
        }
    }
}

// tests
let arr = [5, 20, 3, 4, 10, 12, 2, 9, 25 ]
let t = new Tree(arr)
// invertTree(t.root)
t.traverse()


// TODO: check out the actual interface
// for Tree ADT (abstract data type)

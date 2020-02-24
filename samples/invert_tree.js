const { Tree } = require('./commons/BST')

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
<<<<<<< HEAD
<<<<<<< HEAD
let arr = [5, 20, 5, 3, 4, 10, 12, 2, 9, 25 ]
let t = new Tree(arr)
t.insertNode(23)
t.insertNode(30)
=======
let arr = [5, 20, 3, 4, 10, 12, 2, 9, 25 ]
let t = new Tree(arr)
>>>>>>> wip: created a basic BST
=======
let arr = [5, 20, 5, 3, 4, 10, 12, 2, 9, 25 ]
let t = new Tree(arr)
t.insertNode(23)
t.insertNode(30)
>>>>>>> wip: minor refactors
// invertTree(t.root)
t.traverse()

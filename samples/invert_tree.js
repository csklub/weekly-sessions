class Node {
    constructor(key) {
        this.key = key
        this.left = null
        this.right = null
    }
}

//   root
//    |
//    v 
// [ 10, 5, 3, 20, 6, 8 ]
class Tree {
    // we will construct a non-balanced
    // tree
    constructor(arr) {
        // create the root
        if (!(Array.isArray(arr) && arr.length > 0)) {
            this.root = null
            return
        }
        for (let i = 1; i < arr.length; i++) {
            this.addNode(arr[i]);
        }
    }

    addNode(key)
    {
        let node = new Node(key);
        // ...
        // use getInsertionPoint
    }

    traverse() {
        // prints out the tree
        // in order, starting
        // from the root
    }

    getInsertionPoint(key) {
        // traverses the tree upto the
        // the node where you can add
        // the key, in order
        // returns the node

        // start with this.root
        // add traverse to the right place
    }
}

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
let arr = [10, 5, 20, 4, 3, 12 ]
let t = new Tree(arr)
invertTree(t)
t.traverse()


// TODO: check out the actual interface
// for Tree ADT (abstract data type)

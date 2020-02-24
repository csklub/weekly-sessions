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
        for (let i = 0; i < arr.length; i++) {
            this.insertNode(arr[i]);
        }
    }

    insertNode(key) {
        function _insertNode(node) {
            if (key == node.key) return
            if (key > node.key) {
                // goes to the right
                if (node.right) _insertNode(node.right)
                else node.right = new Node(key)
            }
            else {
                // goes to the left
                if (node.left) _insertNode(node.left)
                else node.left = new Node(key)
            }
        }

        if (this.root == null) {
            this.root = new Node(key)
            return
        }
        else _insertNode(this.root)
    }

    traverse() {
        // prints out the tree
        // in order, starting
        // from the root
        function _trav(node) {
            if (node && node.left) _trav(node.left)
            if (node) {
                console.log(`${node.key}`)
                // if (node.left) console.log(`-> left: ${node.left.key}`)
                // if (node.right) console.log(`-> right: ${node.right.key}`)
            }
            if (node && node.right) _trav(node.right)
        }
        _trav(this.root)
    }
}

module.exports = {
    Tree,
}

// TODO: check out the actual interface
// for Tree ADT (abstract data type)

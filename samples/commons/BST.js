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
        const newNode = new Node(key)
        if (this.root == null) {
            this.root = newNode
            return
        }
        let node = this.root
        while (node) {
            if (key > node.key) {
                if (node.right) node = node.right
                else {
                    node.right = newNode
                    return
                }
            }
            else if (key < node.key) {
                if (node.left) node = node.left
                else {
                    node.left = newNode
                    return
                }
            }
            else return
            // if == , no insertion
        }
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

        console.log(`starting traversal at root: ${this.root.key}`)
        _trav(this.root)
    }

    

}

module.exports = {
    Tree,
}

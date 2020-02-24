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
            this.addNode(arr[i]);
        }
    }

    addNode(key)
    {
        let node = new Node(key);
        // ...
        if (this.root == null) this.root = node
        else {
            let [ insertAt, _key ] = this.getInsertionPoint(key)
            insertAt[_key] = node
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

    

    getInsertionPoint(key) {
        // traverses the tree upto the
        // the node where you can add
        // the key, in order
        // returns the node

        // start with this.root
        // add traverse to the right place
        // assuming the tree has a root
        let node = this.root
        while (node) {
            if (key > node.key) {
                if (node.right) node = node.right
                else return [ node, 'right' ]
            }
            else {
                if (node.left) node = node.left
                else return [ node, 'left' ]
            }
        }
    }
}

module.exports = {
    Tree,
}

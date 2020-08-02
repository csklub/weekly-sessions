
const DoubleLinkedList = require('../commons/js/DoubleLinkedList');

class DictWithLast {
    constructor() {
        this.dic = new Map()
        this.dataNode = new DoubleLinkedList()
    }
    
    // get an item by key
    get(key){
        // get elem by key
        const elem = this.dic.get(key);
        /**
         * When getting last(), we either get last added or last read 
         * Thus, when we get(), we have to set it to the head 
         * using prepand() method
         */
        this.dataNode.prepend(elem)
        return elem
    } 

    // set element value to our dict
    set(key, value){
        const currentNode = this.dataNode;
        // add item to the node
        if(!currentNode.head) {
            currentNode.append(value)
        } else {
            currentNode.prepend(value)
        }
        
        // set key to key and value to the node
        return this.dic.set(key, currentNode.head.value)
    }

    /**
     * Not working has expected ->
     * It will remove item from the map
     * but not from the linked list
     */
    delete(key){
        
        // remove all occurance of the value in list
        const existingValue = this.dic.get(key);
        const currItems = this.dataNode;
        let curr = currItems.head

        while(curr) {
            if(curr.value === existingValue) {
                // let prevNode, nextNode 
                // prevNode = curr.prev
                // nextNode = curr.next
                // remove connection for this node
                // curr.prev = null
                // curr.next = null
                // delete nodes
                // curr.prev = prevNode
                // curr.next = nextNode
            } 

            curr = curr.next
        }

        // Also, remove the element from map
        return this.dic.delete(key)
    }

    last(){
        // last item is always added to the head
        return this.dataNode.head.value
    }

    // get list in array -> the last item is at index 0
    list() {
        let result = [];
        const data = this.dataNode;
        let it = data.head

        while(it) {
            result.push(it.value)
            it = it.next
        }

        return result
    }
}

const newItem = new DictWithLast()

newItem.set("Lewis", 16)
newItem.set("Nandaa", 21)
newItem.set("Kemboi", 20)
newItem.set("Lewis", 16)
newItem.set("Charity", 12)
console.log(newItem.last()) // print 12
console.log(newItem.get("Nandaa")) // print 21
console.log(newItem.last()) // print 21
console.log(newItem.get("Lewis")) // print 16
console.log(newItem.last()) // print 16
newItem.set("Kelvin", 9)
console.log(newItem.last()) // print 9
console.log(newItem.get("Lewis")) // print 16
console.log(newItem.list()) // [16, 9, 16, 21, 12, 16, 20, 21]
console.log(newItem.delete("Lewis"))
console.log(newItem.list()) // [9, 21, 12, 20, 21]

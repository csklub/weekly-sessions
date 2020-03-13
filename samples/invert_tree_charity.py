class Node:
    """
    Class Node
    """
    def __init__(self, value):
        self.left = None
        self.data = value
        self.right = None

class Tree:
    """
    Class tree will provide a tree as well as utility functions.
    """

    def __init__(self):
        # create the root
        self.root = None
        

    def fromArray(self, arr):
        if (not (type(arr)== list and len(arr) > 0)):
            return
        
        for  i in range (len(arr)):
            self.root = self.insert(arr[i])


    def createNode(self, data):
        """
        Utility function to create a node.
        """
        return Node(data)

    def insert(self, data):
        """
        Insert function will insert a node into tree.
        Duplicate keys are not allowed.
        """
        return self.insertHelper(self.root, data)

    def insertHelper(self, node, data):
        """
        Helper method to insert a node into tree.
        Duplicate keys are not allowed.
        """
        #if tree is empty , return a root node
        if node is None:
            return self.createNode(data)
        # if data is smaller than parent , insert it into left side
        if data < node.data:
            node.left = self.insertHelper(node.left, data)
        elif data > node.data:
            node.right = self.insertHelper(node.right, data)

        return node



    def traverse(self):
        """ 
        prints out the tree in order, starting from the root
        """
        self.traverseHelper(self.root)

    def traverseHelper(self, node):
        """ 
        Helper method to print out the tree in order, starting from the root
        """

        if node is not None:
            self.traverseHelper(node.left)
            print (node.data)
            self.traverseHelper(node.right)


    def invert(self):
        """ 
        Invert tree by swapping every left child with right child
        """
        self.invertHelper(self.root)

    def invertHelper(self, node):
        """ 
        Helper method to invert tree by swapping every left child with right child
        """
        if node is None:
            return 
        if node.left or node.right:
            self.swap(node)
            self.invertHelper(node.left)
            self.invertHelper(node.right)


    def swap(self, node):
        """ 
        swap left and right nodes
        """
        node.left,node.right = node.right,node.left



    
def main():
    arr = [10, 5, 20, 4, 3, 12 ]
    tree = Tree()
    tree.fromArray(arr)
    tree.insert(30)
    tree.insert(14)
    tree.insert(7)
    tree.insert( 6)
    tree.insert(80)

    print ("Traverse Inorder")
    tree.traverse()

    tree.invert()
    print ("Traverse Inorder after Invert")
    tree.traverse()



if __name__ == "__main__":
    main()
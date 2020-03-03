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

    def __init__(self, arr):
        # create the root
        self.root = None
        if (not (type(arr)== list and len(arr) > 0)):
            return
        
        for  i in range (len(arr)):
            self.root = self.insert(self.root, arr[i])
        

    def createNode(self, data):
        """
        Utility function to create a node.
        """
        return Node(data)

    def insert(self, node , data):
        """
        Insert function will insert a node into tree.
        Duplicate keys are not allowed.
        """
        #if tree is empty , return a root node
        if node is None:
            return self.createNode(data)
        # if data is smaller than parent , insert it into left side
        if data < node.data:
            node.left = self.insert(node.left, data)
        elif data > node.data:
            node.right = self.insert(node.right, data)

        return node


    def traverse(self, root):
        """ 
        prints out the tree in order, starting from the root
        """
        if root is not None:
            self.traverse(root.left)
            print (root.data)
            self.traverse(root.right)

    def invert(self,root):
        """ 
        Invert tree by swapping every left child with right child
        """
        if root is None:
            return 
        if root.left or root.right:
            self.swap(root)
            self.invert(root.left)
            self.invert(root.right)

    def swap(self, node):
        """ 
        swap left and right nodes
        """
        node.left,node.right = node.right,node.left



    
def main():
    arr = [10, 5, 20, 4, 3, 12 ]
    tree = Tree(arr)
    root = tree.root
    tree.insert(root, 30)
    tree.insert(root, 14)
    tree.insert(root, 7)
    tree.insert(root, 6)
    tree.insert(root, 80)

    print ("Traverse Inorder")
    tree.traverse(root)

    tree.invert(root)
    print ("Traverse Inorder after Invert")
    tree.traverse(root)



if __name__ == "__main__":
    main()
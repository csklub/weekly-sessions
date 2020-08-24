#!/bin/python3
# Author: Sebastian Opiyo
# Date Created: Aug 22, 2020
# Date Modified: Aug 22, 2020
# Descr: Implementing BST
# Acknowledgement: runestone.academy

# Since will need to create and work with an empty binary tree,
# will have two classes.

class TreeNode(object):
    """This is the root of the Binary Search Tree.
        - Serves to provide helper functions that make work done in the BST class
        - It also keeps track of the parent as an attribute of each node.
    """

    def __init__(self, key, val, left=None, right=None, parent=None):
        self.key = key
        self.payload = val
        self.left_child = left
        self.right_child = right
        self.parent = parent

    # BST Helper methods
    def has_left_child(self):
        return self.left_child

    def has_right_child(self):
        return self.right_child

    def is_left_child(self):
        return self.parent and self.parent.left_child == self

    def is_right_child(self):
        return self.parent and self.parent.right_child == self

    def is_root(self):
        return not self.parent

    def is_leaf(self):
        return not (self.right_child or self.left_child)

    def has_any_children(self):
        return self.right_child or self.left_child

    def has_both_children(self):
        return self.right_child and self.left_child

    def splice_out(self):
        """This method is used to delete the successor,
        by directly accessing the key in question.
        We could use delete recursively, but then, that will consume extra time
        researching the right key for deleting."""
        if self.is_leaf():
            if self.is_left_child():
                self.parent.left_child = None
            else:
                self.parent.right_child = None
        elif self.has_any_children():
            if self.has_left_child():
                if self.is_left_child():
                    self.parent.left_child = self.left_child
                else:
                    self.parent.right_child = self.left_child
                self.left_child.parent = self.parent
        else:
            if self.is_left_child():
                self.parent.left_child = self.right_child
            else:
                self.parent.right_child = self.right_child
            self.right_child.parent = self.parent

    def find_successor(self):
        successor = None
        if self.has_right_child():
            successor = self.right_child.find_min()
        else:
            if self.parent:
                if self.is_left_child():
                    successor = self.parent
                else:
                    self.parent.right_child = None
                    successor = self.parent.find_successor()
                    self.parent.right_child = self
        return successor

    def find_min(self):
        current = self
        while current.has_left_child():
            current = current.left_child
        return current

    def replace_node_data(self, key, value, l_child, r_child):
        self.key = key
        self.payload = value
        self.left_child = l_child
        self.right_child = r_child
        if self.has_left_child():
            self.left_child.parent = self
        if self.has_right_child():
            self.right_child.parent = self

    def postorder(self, order_list: list):
        if self.left_child:
            self.left_child.postorder(order_list)
        if self.right_child:
            self.right_child.postorder(order_list)
        order_list.append(self.payload)
        return order_list

    def inorder(self, order_list: list):
        if self.left_child:
            self.left_child.inorder(order_list)
        order_list.append(self.payload)
        if self.right_child:
            self.right_child.inorder(order_list)
        return order_list

    def preorder(self, order_list: list):
        order_list.append(self.payload)
        if self.left_child:
            self.left_child.preorder(order_list)
        if self.right_child:
            self.right_child.preorder(order_list)
        return order_list


class BST:
    """This a Binary Search Tree that has reference to the TreeNode.
    """

    def __init__(self):
        self.root = None
        self.size = 0

    def length(self):
        return self.size

    def __len__(self):
        return self.size

    def __iter__(self):
        return self.root.__iter__()

    def put(self, key, value):
        if self.root:
            self._put(key, value, self.root)
        else:
            self.root = TreeNode(key, value)
        self.size = self.size + 1

    def _put(self, key, value, current_node):
        if key < current_node.key:
            if current_node.has_left_child():
                self._put(key, value, current_node.left_child)
            else:
                current_node.left_child = TreeNode(key, value, parent=current_node)
        else:
            if current_node.has_right_child():
                self._put(key, value, current_node.right_child)
            else:
                current_node.right_child = TreeNode(key, value, parent=current_node)

    def __setitem__(self, key, value):
        self.put(key, value)

    def get(self, key):
        if self.root:
            ret_val = self._get(key, self.root)
            if ret_val:
                return ret_val.payload
            else:
                return None

    def _get(self, key, current_node):
        if not current_node:
            return None
        elif current_node.key == key:
            return current_node
        elif key < current_node.key:
            return self._get(key, current_node.left_child)
        else:
            return self._get(key, current_node.right_child)

    def __getitem__(self, key):
        return self.get(key)

    def __contains__(self, key):
        if self._get(key, self.root):
            return True
        else:
            return False

    def delete(self, key):
        if self.size > 1:
            to_remove_node = self._get(key, self.root)
            if to_remove_node:
                self.remove(to_remove_node)
                self.size -= 1
            else:
                raise KeyError('Error, key not in tree.')
        elif self.size == 1 and self.root.key == key:
            self.root = None
            self.size -= 1
        else:
            raise KeyError('Error, key not in tree')

    def __delitem__(self, key):
        self.delete(key)

    @staticmethod
    def remove(current_node):
        """
        :type current_node: the node we currently at during traversal
        """
        if current_node.is_leaf():  # leaf node
            if current_node == current_node.parent.left_child:
                current_node.parent.left_child = None
            else:
                current_node.parent.right_child = None
        elif current_node.has_both_children():  # non-leaf node
            successor = current_node.find_successor()
            successor.splice_out()
            current_node.key = successor.key
            current_node.payload = successor.payload
        else:  # node has one child
            if current_node.has_left_child():
                if current_node.is_left_child():
                    current_node.left_child.parent = current_node.parent
                    current_node.parent.left_child = current_node.left_child
                elif current_node.is_right_child():
                    current_node.left_child.parent = current_node.parent
                    current_node.parent.right_child = current_node.left_child
                else:
                    current_node.replace_node_data(current_node.left_child.key,
                                                   current_node.left_child.payload,
                                                   current_node.left_child.left_child,
                                                   current_node.left_child.right_child)
            else:
                if current_node.is_left_child():
                    current_node.right_child.parent = current_node.parent
                    current_node.parent.left_child = current_node.right_child
                elif current_node.is_right_child():
                    current_node.right_child.parent = current_node.parent
                    current_node.parent.right_child = current_node.right_child
                else:
                    current_node.replace_node_data(current_node.right_child.key,
                                                   current_node.right_child.payload,
                                                   current_node.right_child.left_child,
                                                   current_node.right_child.right_child)

    # Return list of preorder elements
    def preorder(self):
        if self.root:
            return self.root.preorder([])
        else:
            return []

    # return list of postorder elements
    def postorder(self):
        if self.root:
            return self.root.postorder([])
        else:
            return []

    # return list of inorder elements
    def inorder(self):
        if self.root:
            return self.root.inorder([])
        else:
            return []
    
    # create a bst from a given list.
    def create_bst_from_list(self, bst_list: list):
        for item in bst_list:
            self.put(bst_list.index(item), item)


# Helper Code
mytree = BST()
# mytree[3] = "Sugar"
# mytree[4] = "Mangoes"
# mytree[5] = "Oranges"
# mytree[8] = "Pineapples"
# mytree[0] = "Avocado"
my_list = [1, 2, 4, 6, 12, 45]
my_second_list = [20, 9, 25, 5, 12, 11, 14, 18, 19]

# print(mytree.create_bst_from_list(my_list))
print(mytree.create_bst_from_list(my_second_list))
# print(mytree[3])  # Sugar
# print(mytree[8])  # Pineapples
# print(mytree[4])  # Mangoes

print(mytree.inorder())
print(mytree.postorder())
print(mytree.preorder())

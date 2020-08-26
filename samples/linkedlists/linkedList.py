#!/bin/python3
# Author: Sebastian Opiyo
# Date Created: August 13, 2020
# Date Modified: August 13, 2020
# Description: Linked Lists implementation, Python3 Version.

class Node:
    """Data container and pointer initiator."""

    def __init__(self, data=None):
        self.data = data
        self.next = None


class LinkedList:
    """Create all the methods we need to operationalize linked list like:
    - Add to head, remove from head, reset head, move forward, etc.
    """
    def __init__(self):
        self._head = None
        self._curr = None

    def add_to_head(self, data):
        new_node = Node(data)
        new_node.next = self._head
        self._head = new_node
        self.reset_to_head()

    def remove_from_head(self):
        if self._head is None:
            return None
        ret_val = self._head.data
        self._head = self._head.next
        self.reset_to_head()
        return ret_val

    def reset_to_head(self):
        self._curr = self._head
        if self._curr is None:
            return None
        else:
            return self._curr.data

    def move_forward(self):
        if self._curr is None:
            return None
        else:
            self._curr = self._curr.next
        if self._curr is None:
            return None
        else:
            return self._curr.data

    def add_after_curr(self, data):
        if self._curr is None:
            self.add_to_head(data)
            return
        new_node = Node(data)
        new_node.next = self._curr.next
        self._curr.next = new_node

    def remove_after_curr(self):
        if self._curr is None or self._curr.next is None:
            return None
        ret_val = self._curr.next.data
        self._curr.next = self._curr.next.next
        return ret_val

    def find(self, value):
        curr_pos = self._head
        while curr_pos is not None:
            if curr_pos.data == value:
                return curr_pos.data
            curr_pos = curr_pos.next
        return None

    def delete(self, value):
        self.reset_to_head()
        if self._curr is None:
            return None
        if self._curr.data == value:
            return self.remove_from_head()
        while self._curr.next is not None:
            if self._curr.next.data == value:
                ret_val = self.remove_after_curr()
                self.reset_to_head()
                return ret_val
            self._curr = self._curr.next
        self.reset_to_head()
        return None

    def __iter__(self):
        self._curr = self._head
        return self

    def __next__(self):
        if self._curr is None:
            raise StopIteration
        ret_val = self._curr.data
        self.move_forward()
        return ret_val

'''
Brute-force implementation of DictionaryWithLast
using Python's OrderedDict
'''

from collections import OrderedDict

class DictionaryWithLast:
    '''
    ///
    Space Complexity? O(...)
    See implementatin of _map here - 
    https://github.com/python/cpython/blob/master/Lib/collections/__init__.py
    '''
    def __init__(self):
        self.__map = OrderedDict()
    
    def get(self, k):
        '''
        Cost = O(...)
        '''
        self.__map.move_to_end(k)
        return self.__map.get(k)
    
    def set(self, k, v):
        '''
        Cost = O(...)
        '''
        self.__map[k] = v
    
    def delete(self, k):
        '''
        Cost = 
        '''
        del self.__map[k]
    
    def last(self):
        '''
        Cost = 
        '''
        keys = self.__map.keys()
        return list(keys)[-1]


# test
people = DictionaryWithLast()

people.set("John", 40)
people.set("Joe", 35)
people.set("Jane", 12)
people.set("Jim", 8)

print(people.last()) # "Jim"
print(people.get("John"))
print(people.last()) # "John"

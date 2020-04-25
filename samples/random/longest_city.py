

def longest_name(cities):
    # lens = [ len(c) for c in cities ] # list comprehension
    # [ <evalutation> for <item> in <another_list> ]
    # longest = max(lens)
    # index = lens.index(longest)
    # return cities[index]
    # short version -> not optimized // O(cN) time, O(N) in space
    # return cities[lens.index(max(lens))]
    # optimized version -> O(N)
    longest = 0
    index = 0
    i = 0
    for c in cities:
        len_ = len(c)
        if len_ > longest:
            longest = len_
            index = i
        i += 1
    
    return cities[index]


# test
cities = ['Nairobi', 'Dar-es-Salam', 'New York', 'Kampala' ]
print(longest_name(cities))

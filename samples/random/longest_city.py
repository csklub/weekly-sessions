

def longest_name(cities):
    lens = [ len(c) for c in cities ] # list comprehension
    # [ <evalutation> for <item> in <another_list> ]
    # longest = max(lens)
    # index = lens.index(longest)
    # return cities[index]
    # short version
    return cities[lens.index(max(lens))]


# test
cities = ['Nairobi', 'Dar-es-Salam', 'New York', 'Kampala' ]
print(longest_name(cities))

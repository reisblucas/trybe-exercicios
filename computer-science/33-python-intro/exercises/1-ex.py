from queue import Empty


def max_number(*a):
    """Test"""
    new_list = [num for num in a if isinstance(num, int)]

    if len(new_list):
        return max(new_list)

    return "Does not have any number in the list or list is empty."


print(max_number(15, 16, 17))
print(max_number("a", "b", 1))
print(max_number("a", "b", "c"))

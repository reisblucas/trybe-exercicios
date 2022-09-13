from queue import Empty


def maxNumber(*a):
    new_list = [num for num in a if isinstance(num, int)]

    if len(new_list):
        return max(new_list)

    return "Does not have any number in the list or list is empty."

print(maxNumber(15, 16, 17))
print(maxNumber("a", "b", 1))
print(maxNumber("a", "b", "c"))

from typing import List


def arithmetic_avg(l=list) -> float:
    """..."""
    return sum(l) / len(l)


list1 = [1, 2, 3, 4, 5, 15]
uhu = 1

print(arithmetic_avg(list1))
print(arithmetic_avg(uhu))

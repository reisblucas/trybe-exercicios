from inspect import _void


def print_square(n: int) -> _void:
    """lint"""
    line = n * "* "

    for _i in range(n):
        print(line)


def print_square_ale(n: int) -> _void:
    """lint"""
    for _i in range(n):
        print("* " * n)


print_square(5)

print("\n")

print_square_ale(10)

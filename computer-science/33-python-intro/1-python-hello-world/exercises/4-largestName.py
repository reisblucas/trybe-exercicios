def largest_name(names: list) -> str:
    """lint"""
    aux_variable = names[0]
    for name in names:
        if name == names[0]:
            continue

        name_largest_than_last_name = len(name) > len(aux_variable)
        if name_largest_than_last_name:
            aux_variable = name

    return aux_variable

def big(nomes):
    '''lint'''
    return max(nomes, key=len)

name_list = ["lucas", "ale", "rafa", "rafo", "fernando"]
name_list_2 = ["lucas", "alessandro", "rafa", "rafo", "fernando"]

print("Our func", largest_name(name_list))
print("Our func", largest_name(name_list_2))

print("Fast solution", big(name_list))
print("Fast solution", big(name_list_2))

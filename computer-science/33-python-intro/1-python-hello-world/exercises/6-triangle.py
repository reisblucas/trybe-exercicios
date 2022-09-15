def triangle_check(a: int, b: int, c: int) -> str:
    """lint"""
    is_triangle = (a + b > c) and (b + a > c) and (b + c > a)
    if is_triangle:
        equilateral = a == b and a == c
        if equilateral:
            return print("Triângulo Equilátero: três lados iguais")

        isosceles = a == b or a == c or b == c
        if isosceles:
            return print("Triângulo Isósceles: dois lados iguais")
        return print("Triângulo Escaleno: três lados diferentes")

    return print("Não é um triângulo")

triangle_check(1, 2, 3)
triangle_check(2, 2, 2)
triangle_check(3, 2, 2)
triangle_check(4, 6, 7)
